import axios from 'axios';

const headers = { 
    Accept: "application/json",    
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials":false,
    "Accept-Language":"it"
}

export const LOCAL_STORAGE_TOKEN_PROPS = "token";

const injectToken = (config) => {
    try{
        const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_PROPS);
        if (token !=  null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }catch(error) {
        console.log(error);
        return config;
    }
}


class Http {
    instance = null;
    constructor() {
        return this.instance != null ? this.instance : this.initHttp();
    } 
    
    initHttp() {
        const http = axios.create({
            baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001" , //Nota il fallback
            headers,
            withCredentials :false    //true
        });

        http.interceptors.request.use (
            (config) => {
                // Fa qualcosa prima che la request venga inviata
                //config.headers.Authorization = 'Bearer 12345'
                return injectToken(config);
                
                //return config
            }, 
            (error) => {
                 // Do something with request error
                const {response} = error; //destrutturazione oggetto error
                return Promise.reject(response);
            }
        );
        
        http.interceptors.response.use (
            (response) => {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Fai qualcosa coi dati della risposta
                /* //example:
                if(response.status === 401) {
                    alert("You are not authorized");
                }
                */

                return response;
            },
            (error) => {
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                
                const {response} = error; //destrutturazione oggetto error
                this.handleError(response);
                return Promise.reject(response);
            }
        );

        //non necessario ma lo metto per completezza
        this.instance =  http;
        return http;
    } 

    request(config) {
        return this.http.request(config);
    };

    get(url,config) {
        return this.http.get(url,config);
    };

    post(url,data,config) {
        return this.http.post(url,data,config);
    };

    put(url,data,config) {
        return this.http.put(url,data,config);
    };

    patch(url,data,config) {
        return this.http.patch(url,data,config);
    };

    delete(url,config) {
        return this.http.delete(url,config);
    };

    handleError(error) {
        console.log("handleError");
        if (error) {
          const { status } = error;
    
          switch (status) {
            case 500: {
              // Handle InternalServerError
              break;
            }
            case 403: {
              // Handle Forbidden
              break;
            }
            case 401: {
              // Handle Unauthorized
              break;
            }
            case 429: {
              // Handle TooManyRequests
              break;
            }
          }
        } else {
          console.warn(
            "No internet connection found. App is running in offline mode."
          );
        }
    } 

}
export const http = new Http();