import { Request, Response } from 'express'
import { Resource } from '../../../../utils/auto-route'
import axios from 'axios'
import client from '../../../../modules/btc-pay-server'
import QRCode from 'qrcode'

const prod = process.env.NODE_ENV === 'production'
const PROD_URL = process.env.BTC_PAY_SERVER_PROD_API_URL
const DEV_URL = process.env.BTC_PAY_SERVER_DEV_API_URL
const PROD_STORE_ID = process.env.BTC_PAY_SERVER_PROD_STORE_ID
const DEV_STORE_ID = process.env.BTC_PAY_SERVER_DEV_STORE_ID
const PAYMENT_REQUEST_ID_URL = prod ? `${PROD_URL}/${PROD_STORE_ID}/payment-requests` : `${DEV_URL}/${DEV_STORE_ID}/payment-requests`
const QRCodeSettings = Object({
  type: 'svg',
  color: {
    dark: '#333333',
    light: '#fafafa00'
  }
})
export default () => <Resource><unknown>{
  delete: async (req: Request, res: Response) => {
    const result = await axios.post(PAYMENT_REQUEST_ID_URL, req.body)
    res.send(result)
  },
  get: async (req: Request, res: Response) => {
    const result = await axios.post(PAYMENT_REQUEST_ID_URL, req.body)
    res.send(result)
  },
  put: async (req: Request, res: Response) => {
    const result = await axios.post(PAYMENT_REQUEST_ID_URL, req.body)
    res.send(result)
  },
  post: async (req: Request, res: Response) => {
    if (prod) {
      // console.log('is production')
      client.create_invoice(req.body)
        .then(async (invoice) => {
          const { BTC, BTC_LightningLike } = invoice.addresses
          res.send(
            Object.assign(invoice, {
              networks: [
                {
                  text: 'Bitcoin',
                  value: QRCode.toString(BTC, QRCodeSettings)
                },
                {
                  text: 'Lightning',
                  value: QRCode.toString(BTC_LightningLike, QRCodeSettings)
                }
              ].map((i, key) => {
                return Object.assign(i, { id: key })
              })
            }
            ))
        })
    } else {
      client.create_invoice(req.body)
        .then(async (invoice) => {
          if (invoice) {
            const { BTC } = invoice.addresses
            const result = Object.assign(invoice, {
              networks: [
                {
                  text: 'Bitcoin',
                  value: await QRCode.toString(BTC, QRCodeSettings)
                }
              ].map((i, key) => {
                return Object.assign(i, { id: key })
              })
            })

            // console.log('IO connection when invoice is created?')
            // io.emit('BTC_PAY_CLIENT' + '_ID_' + result.id, { type: 'InvoiceCreated' })
            res.send(result)
          }
        })
    }
  },
}