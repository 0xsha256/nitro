
import Stripe from 'stripe'

const key = String(
  process.env.NODE_ENV === 'prod'
    ? process.env.STRIPE_PROD_SECRET_KEY
    : process.env.STRIPE_DEV_SECRET_KEY)

const stripe = new Stripe(key, {
  apiVersion: '2020-08-27',
})

export default stripe

