import {TIMEOUT_DELAY} from '../_constants';
import axios from 'axios';

export const authenticationService = {
    login,
    register
}


async function login (login,password) {
    let timeout = null;
    try{
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        timeout = setTimeout(()=>{source.cancel()},TIMEOUT_DELAY);
        const response = await axios({
            url: `http://woocommerce.maktabsharif.ir/wp-json/wc/v3/customers?consumer_key=ck_d528799984e8f3327a7aaf45500bb6e14234e691&consumer_secret=export const cs_c7440e65098e8adf3a7550e07b52ebb062afa3b7
            &email=ma@gmail.com`,
            
            method: "post",
            headers: { "content-type": "application/json" },
            cancelToken: source.token,
            data: {
                login,
                password
            }
        });
        
        if (response.status === 200) {
            if (timeout) clearTimeout(timeout);
            return response.data;
        } else {
            if (timeout) clearTimeout(timeout);
            return Promise.reject({isTimeout:false,error: response.data});
        }
    } catch (error) {
        if (timeout) clearTimeout(timeout);
        if (axios.isCancel(error)) {
          return Promise.reject({isTimeout:true});
        } else {
          return Promise.reject({isTimeout:false,error});
        }
    }
}

async function register (email,firstname,lastname) {
    let timeout = null;
    try{
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        timeout = setTimeout(()=>{source.cancel()},TIMEOUT_DELAY);
            const response = await axios({
                method: 'post',
                url: `http://woocommerce.maktabsharif.ir/wp-json/wc/v3/customers?consumer_key=ck_d528799984e8f3327a7aaf45500bb6e14234e691&consumer_secret=export const cs_c7440e65098e8adf3a7550e07b52ebb062afa3b7
                &email=bah@gmail.com`,
               
                headers: {
                  'Content-Type': 'application/json',
                },
                data: {
                    email,
                    firstname,
                    lastname
                }
            });
            console.log(response);
            if (response.status === 200) {
                if (timeout) clearTimeout(timeout);
                return response.data;
            } else {
                if (timeout) clearTimeout(timeout);
                return Promise.reject({isTimeout:false,error: response.data});
            }
        } catch (error) {
            if (timeout) clearTimeout(timeout);
            if (axios.isCancel(error)) {
              return Promise.reject({isTimeout:true});
            } else {
              return Promise.reject({isTimeout:false,error});
            }
        }
            
}