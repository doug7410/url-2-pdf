import express, { Request, Response, Application } from 'express';
import {url2pdf} from "./url2pdf";

const app: Application = express();

app.use(express.json());

/**
 * Healthcheck
 */
app.get('/', async (req: Request, res: Response) => {
  res.send('healthy')
})

/**
 * URL to PDF
 */
app.post('/', async (req: Request, res: Response) => {
  try {
    const url = req.body?.url as string;

    if(!url){
      res.status(400)
      res.json({error: 'the url is missing'})
      return;
    }

    const pdf = await url2pdf(url)
    res.contentType("application/pdf");
    res.send(pdf);
  } catch (e: any){
    console.error(e.message)
    res.status(400)
    res.json({error: `Error creating PDF ${e.message}`})
  }

});

export default app;