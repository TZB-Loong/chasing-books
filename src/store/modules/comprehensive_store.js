
import {queryComprehensive} from '../../services/api';

export default{
  state:{
    list:[]
  },
  mutations:{
    listSave(state,payload){
      Object.assign(state,{
        lsit:payload
      })
    }
  },
  actions:{
    async queryComprehensive({commit,dispatch},payload){
      let response = await queryComprehensive(payload);
      if(response.status==200){
        commit('listSave',response.data)
      }
    }
  }
}
