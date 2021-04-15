import * as express from "express"
import {Request, Response} from "express"
import * as helmet from "helmet"

const app = express()
const v1prefix = "v1"
const {
  PORT = 3000,
} = process.env
const healthCheckV1 = require("./routes/v1/health-check")

app.use(helmet());
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});
app.use(`/${v1prefix}/health-check`, healthCheckV1)

if (require.main === module) { // true if file is executed
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
}
export default app;