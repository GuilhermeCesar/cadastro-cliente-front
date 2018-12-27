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

    async post(path = "",body = {},headers = {'Content-Type': 'application/json'},mode = 'no-cors'){
        return fetch(config.baseURL+path,{
            method: 'POST',
            headers,
            mode,
            body
        })
        .catch((error) => {
            throw new Error(error);
        })
    }

    async delete(path){
        return fetch(config.baseURL+path,{
            method: 'DELETE',
        })
        .catch((error) => {
            throw new Error(error);
        })
    }
}
export default HttpService;