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

    async post(path = "",body = {},headers = {'Content-Type': ''},mode = 'no-cors'){
        return fetch(config.baseURL+path,{
            method: 'POST',
            headers,
            body,
            mode
        })
        .catch((error) => {
            throw new Error(error);
        })
    }

    async put(path = "",body = {},headers = {'Content-Type':''}){
        return fetch(config.baseURL+path,{
            method: 'PUT',
            // headers,
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