import { Request, Response } from 'express'
import { Resource } from '../../../../utils/auto-route'
import io from '../../../../modules/socket.io'

export default () => <Resource><unknown>{
  post: async (req: Request, res: Response) => {
    io.on('connect', () => {
      io.socketsJoin(req.body.invoiceId)
    })

    io.on('connection', (socket) => {
      socket.on('BTC_PAY_CLIENT' + '_ID_' + req.body.invoiceId, (data) => {
        socket.join(req.body.invoiceId)
      })
    })

    io.to(req.body.invoiceId).emit('BTC_PAY_CLIENT' + '_ID_' + req.body.invoiceId, { type: req.body.type })

    return res.sendStatus(200)
  },
}