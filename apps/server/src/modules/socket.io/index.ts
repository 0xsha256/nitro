import { Server } from 'socket.io'
import { server } from '../..'

const io = new Server(server)

export default io
