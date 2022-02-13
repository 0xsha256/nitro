import { Request, Response } from 'express'
import { Resource } from '../../../../utils/auto-route'
import stripe from '../../../../modules/stripe'
export default () => <Resource><unknown>{
  post: async (req: Request, res: Response) => {
    const user = req.body.user
    stripe.customers
      .create({
        name: user.displayName,
        email: user.email,
        description: JSON.stringify(user.description),
        metadata: {
          uid: user.uid,
          ip: user.ip,
          geo: JSON.stringify(user.geo)
        }
      }).then((r) => {
        return res.send(r)
      }).catch((e) => {
        return res.sendStatus(400).json({ error: e })
      })
  }
}