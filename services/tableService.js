const axios = require('axios')
let buff=new Buffer.from('tayakes173@nubotel.com:Kolobok228!');
let base64data = buff.toString('base64');
let header={
    "content-type":"application/json",
        "Authorization":' Basic '+base64data
};
class TableService {
    async getHook() {

        const response = await axios.get('https://test.bpium.ru/api/webrequest/request');
        await axios({
            method: 'patch',
            headers:header,
            url: `https://test_ssa.bpium.ru/api/v1/catalogs/12/records/1`,
            data: {
                values: {
                    "3":response.data.value
                },
            }
        });
        console.log(response.data)
        return response.data
    }
    async createStockItem(data) {
       let result= await axios({
            method: 'post',
            headers:header,
            url: 'https://test_ssa.bpium.ru/api/v1/catalogs/13/records',
            data: {
                values: {
                    "3": [{
                        "catalogId": data.payload.catalogId,
                        "recordId": data.payload.recordId
                    }],
                    "4":data.payload.values["3"]
                },
            }
        });
        return result.data;
    }
}
module.exports = { tableService: new TableService() };
