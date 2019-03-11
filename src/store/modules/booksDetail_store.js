import {queryDetail,queryReview} from '../../services/api';
export default{
  state:{
    detail:[],
    review:[]
  },
  mutations:{
    detailSave(state,payload){
      Object.assign(state,{
        detail:payload
      })
    },
    reviewSave(state,payload){
      Object.assign(state,{
        review:payload
      })
    }
  },
  actions:{
    async queryDetail ({dispatch,commit},payload){
      let response = await queryDetail(payload);
      if(response.status==200){
        commit('detailSave',response.data)
      }
    },
    async queryReview ({dispatch,commit},payload){
      let response = await queryReview(payload);
      if(response.status == 200){
        commit('reviewSave',response.data);
      }
    }
  }
}
