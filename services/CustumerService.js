import HttpService from './HttpService';

class CustumerService{
    constructor() {
        this._httpService = new HttpService();
    }

    async getAllCustumers(){
        try{
            const customer =  await this._httpService.get("/customers");
            return await customer.json();
        }catch (e) {
            throw new Error("Erro ao consultar as propostas")
        }
    }

    async saveCostumer(data){
        try{
            if(data.get("id")){
                await this._httpService.put("/customers",data)
                    .catch(error => console.error(error));
                return;
            }
            await this._httpService.post("/customers",data)
                .catch(error => console.error(error));
        }catch (e) {
            throw "Erro ao cadastrar cliente";
        }
    }

    async updateCustumer(data){

    }

    async deleteCustomer(customerId){
        await this._httpService.delete(`/customers/${customerId}`)
            .catch(error => console.error(error))
    }
}

export default CustumerService;
