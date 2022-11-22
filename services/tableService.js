const axios = require("axios");
let buff = new Buffer.from("tayakes173@nubotel.com:Kolobok228!");
let base64data = buff.toString("base64");
let header = {
  "content-type": "application/json",
  Authorization: " Basic " + base64data,
};
class TableService {
  async getHook(data) {
    try {
      const response = await axios.get(
        "https://test.bpium.ru/api/webrequest/request"
      );
      await axios({
        method: "patch",
        headers: header,
        url: `https://test_ssa.bpium.ru/api/v1/catalogs/${data.payload.catalogId}/records/${data.payload.recordId}`,
        data: {
          values: {
            3: response.data.value,
          },
        },
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
  async createStockItem(data) {
    try {
      let result = await axios({
        method: "post",
        headers: header,
        url: "https://test_ssa.bpium.ru/api/v1/catalogs/13/records",
        data: {
          values: {
            3: [
              {
                catalogId: data.payload.catalogId,
                recordId: data.payload.recordId,
              },
            ],
            4: data.payload.values["3"],
          },
        },
      });
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = { tableService: new TableService() };
