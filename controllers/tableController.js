const { tableService } = require("../services/tableService");

class TableController {
  async getHook(req, res, next) {
    try {
      const form = await tableService.getHook(req.body);
      return res.json(form);
    } catch (e) {
      console.error(e);
    }
  }
  async createStockItem(req, res, next) {
    try {
      const form = await tableService.createStockItem(req.body);
      return res.json(form);
    } catch (e) {
      console.error(e);
    }
  }
}
module.exports = { tableController: new TableController() };
