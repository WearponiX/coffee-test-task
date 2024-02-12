import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app: Express = express()
app.use(express.json())

var allowedOrigins = ['http://localhost:5173'];
app.use(cors({
  origin: function (origin: string, callback: Function) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

dotenv.config()
const PORT = process.env.PORT || 3005


app.get('/getOptions', async (req: Request, res: Response) => {
  try {
    return res.status(200).send({
      versions: [
        { id: 1, name: 'Обычная', image: 'https://main-cdn.sbermegamarket.ru/hlr-system/1721354726/100024752884b0.jpg' },
        { id: 2, name: 'Увеличенная', image: 'https://www.beatocaffe.ru/images/remont/Saeco-a.jpg' },
      ],
      beverages: [6, 8, 12]
    })
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: err })
  }
})

app.listen(PORT)
console.log(`Listening on port ${PORT}`)