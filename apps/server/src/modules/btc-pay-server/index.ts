/**
 * Be your own bank, try BTCPayserver.
 * @see https://btcpayserver.org/
 */
import { BTCPayClient, crypto } from 'btcpay'

const prod = process.env.NODE_ENV === 'prod'

const key = prod ?
  process.env.BTC_PAY_SERVER_PROD_PRIVATE_KEY :
  process.env.BTC_PAY_SERVER_DEV_PRIVATE_KEY

const url = prod ?
  process.env.BTC_PAY_SERVER_PROD_URL :
  process.env.BTC_PAY_SERVER_DEV_URL

const keypair = crypto.load_keypair(Buffer
  .from(String(key), 'hex'))

const client = new BTCPayClient(String(url), keypair, {
  merchant: prod ?
    process.env.BTC_PAY_SERVER_PROD_MERCHANT :
    process.env.BTC_PAY_SERVER_DEV_MERCHANT
})

export default client