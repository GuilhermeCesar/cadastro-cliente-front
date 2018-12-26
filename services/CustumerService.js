import HttpService from './HttpService';

class CustumerService{
    constructor() {
        this._httpService = new HttpService();
    }

    async getAllCustumers(){
        try{
            const proposta =  await this._httpService.get("/customers");
            return await proposta.json();
        }catch (e) {
            throw new Error("Erro ao consultar as propostas")
        }
    }

    async saveCostumer(data){
        const headers = {'Content-Type': ''};

        try{
            let customer = await this._httpService.post("/customers",data,headers)
                                        .catch(error => console.error(error));

            return await customer;
        }catch (e) {
            throw "Erro ao cadastrar cliente";
        }
    }
}

export default CustumerService;
