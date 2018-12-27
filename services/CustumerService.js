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
        const headers = {'Content-Type': ''};

        try{
            await this._httpService.post("/customers",data,headers)
                                        .catch(error => console.error(error));
        }catch (e) {
            throw "Erro ao cadastrar cliente";
        }
    }

    async deleteCustomer(customerId){
        await this._httpService.delete(`/customers/${customerId}`)
            .catch(error => console.error(error))
    }
}

export default CustumerService;
