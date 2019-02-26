import axios from 'axios'
import router from '../router';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';

axios.interceptors.response.use(
  response =>{ //请求数据拦截跳转
    if(response.data.errCode ==2 ){
      router.push({
        path:"/index",
      })
    }
    return response;
  },
  error=>{
    return Promise.reject(error.response.data)
  }
);

export  function fetch(url,params = {}){

  return new Promise((resolve,reject)=>{
    axios.get(url,{
      params:params
    }).then(response=>{
      resolve(response.data)
    }).catch(err =>{
      reject(err)
    })
  })
}

export function post(url,data = { }){
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(response=>{
      resolve(response.data);
    },err=>{
      reject(err)
    })
  })
}

export function patch(url,data={}){
  return new Promise((resolve,reject)=>{
    axios.patch(url,data).then(response=>{
      resolve(response.data);
    },err=>{
      reject(err);
    })
  })
}

export function put(url,data ={}) {
    return Promise((resolve,reject)=>{
      axios.put(url,data).then(response=>{
        resolve(response.data)
      },err=>{
        reject(err);
      })
    })
}

