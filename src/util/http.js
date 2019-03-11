import axios from 'axios'
import router from '../router';
import Vue from 'vue';
/*
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';

axios.interceptors.response.use( //拦截跳转页面
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
); */


export let ajax = axios.create({ //定义一个axios 实例
  // baseURL: '/api',
  timeout: 30000,
  withCredentials: false,
  // headers:{},
  // proxy:{} 代理
})
let s = new Vue(); //调用Vue错误模块
ajax.interceptors.response.use(  //设置axios 实例的错误拦截及跳转
  response=>{
    if(response.data.errCode ==2 ){ //拦截跳转的条件
      router.push({
        path:"/index",
      })
    }
    return response;
  },error=>{
    s.$Modal.error({
      content:'网络请求失败,请检查您的网络设置!'
    })
    return Promise.reject(error)
  }
)



/* export  function fetch(url,params = {}){ //get请求
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

export function post(url,data = { }){ //post 请求
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(response=>{
      resolve(response.data);
    },err=>{
      reject(err)
    })
  })
}

export function patch(url,data={}){ //patch 请求
  return new Promise((resolve,reject)=>{
    axios.patch(url,data).then(response=>{
      resolve(response.data);
    },err=>{
      reject(err);
    })
  })
}

export function put(url,data ={}) { //put 请求
    return Promise((resolve,reject)=>{
      axios.put(url,data).then(response=>{
        resolve(response.data)
      },err=>{
        reject(err);
      })
    })
} */

