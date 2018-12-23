import fetch from 'isomorphic-unfetch'
import config from '../cadastro-cliente.config'

class HttpService {
    async get(path="", headers = {'Content-Type': 'application/json'}){
        return fetch(config.baseURL+path,{
            method: 'GET',
            headers: headers,
        })
        .then(result=>{
             switch(result.status) {
                 case 404:
                     throw new Error("Página não encontrada")
            }

            return result;
        })
        .catch(error=>{
            throw new Error(error)
        })
    }

    async post(path="",body={},headers = {'Content-Type': 'application/json;charset=UTF-8'}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
        .then(result => {
            switch (result.status) {
                case 500:
                    throw new Error();
            }
            return result;
        })
        .catch(() => {
            throw new Error("Erro ao salvar Cliente");
        })
    }
}
export default HttpService;