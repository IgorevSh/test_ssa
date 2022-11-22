const { tableService } = require("../services/tableService");

class TableController {
    async getHook(req, res, next) {
        console.log(req.body)
      const form=await tableService.getHook(req.body);
        return res.json(form);
    }
    async createStockItem(req, res, next) {
        const form=await tableService.createStockItem(req.body);
        return res.json(form);
    }
}
module.exports = { tableController: new TableController() };
