import {queryranking} from '../../services/api';
export default{
  state:{
    rankingList:[],
  },

  mutations:{
    rankingListSave(state,payload){
      Object.assign(state,{
        rankingList:payload
      })
    }
  },
  actions:{
    async queryranking ({dispatch,commit},payload){
      var response = await queryranking(payload);
      if(response.status){
        commit('rankingListSave',response.data)
      }
    }
  }
}
