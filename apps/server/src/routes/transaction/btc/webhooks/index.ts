import { Response } from 'express'
import { Resource } from '../../../../utils/auto-route'
import axios from 'axios'

const prod = process.env.NODE_ENV === 'production'
const PROD_URL = process.env.BTC_PAY_SERVER_PROD_API_URL
const DEV_URL = process.env.BTC_PAY_SERVER_DEV_API_URL
const PROD_STORE_ID = process.env.BTC_PAY_SERVER_PROD_STORE_ID
const DEV_STORE_ID = process.env.BTC_PAY_SERVER_DEV_STORE_ID
const PAYMENT_REQUEST_ID_URL = prod ? `${PROD_URL}/${PROD_STORE_ID}/payment-methods` : `${DEV_URL}/${DEV_STORE_ID}/payment-methods`
const KEY = prod ? process.env.BTC_PAY_SERVER_PROD_API_KEY : process.env.BTC_PAY_SERVER_DEV_API_KEY // process.env.BTC_PAY_SERVER_PROD_API_KEY

export default () => <Resource><unknown>{
  get: async (_: unknown, res: Response) => {
    const result = await axios.post(PAYMENT_REQUEST_ID_URL, {
      headers: {
        'Authorization': KEY
      }
    })
    res.send(result)
  }
}