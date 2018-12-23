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

    async saveCostumer(costumer){
        try{
            await this._httpService.post("/customers",costumer);
            return "Cliente cadastrado com sucesso"
        }catch (e) {
            throw "Erro ao cadastrar cliente";
        }
    }
}

export default CustumerService;
