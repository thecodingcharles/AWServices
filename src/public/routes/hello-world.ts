import express from "express";
import {handler} from "../../services/hello-world";

const router = express.Router();

/* GET Hello world demo. */
router.get('/', function (req: any, res: any, next: any) {
    handler(req).then((response: any) => {
        res.json(response);
    });
});

export default router;
