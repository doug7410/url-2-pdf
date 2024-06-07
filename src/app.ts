import express, { Request, Response, Application } from 'express';
import {url2pdf} from "./url2pdf";

const app: Application = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {
    const url = req.query.url as string;
    console.log(url)
    const pdf = await url2pdf(url)
    res.sendFile(pdf);
  } catch (e: any){
    console.error(e.message)
  }

});

export default app;