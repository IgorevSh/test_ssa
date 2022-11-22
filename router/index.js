const { Router } = require("express");
const {tableController} =require('../controllers/tableController')
const router=new Router();
router.post("/comments",tableController.getHook);
router.post("/create",tableController.createStockItem);
module.exports = router;
