import {queryDetail} from '../../services/api';
export default{
  state:{
    detail:[],
  },
  mutations:{
    detailSave(state,payload){
      Object.assign(state,{
        detail:payload
      })
    }
  },
  actions:{
    async queryDetail ({dispatch,commit},payload){
      var response = await queryDetail(payload);
      if(response.status){
        commit('detailSave',response.data)
      }
    }
  }
}
