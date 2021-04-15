import * as express from "express"
import {Request, Response, Router} from "express"

const router: Router = express.Router()

router.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ status: "v1 healthy" })
})

module.exports = router