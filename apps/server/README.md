# Express server starter

# Modules
- Socket.io
- Stripe
- BTCPayserver
- MongoDB
- Firebase admin

# Utils
- Auto route, no more repetitive route configurations, just create a file in the routes folder and e.g add:

  ``` console
  get: (_, res: Response) => {
    res.status(200).send('Hello, Route!').end()
  }
  ```

- Deploy with vercel