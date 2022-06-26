import express, { Request, Response } from "express";
import { router } from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("Servidor online no likn: http://localhost:3333");
  console.log("API Docs no likn: http://localhost:3333/api-docs");
});


app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Servidor On-line!!!"
  })
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);


