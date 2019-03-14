
import {querychapterList,querychaperDetail} from '../../services/api';

export default{
  state:{
    chapterList:{},
    chapterDetail:{}
  },
  mutations:{
    chapterListSave(state,payload){
      Object.assign(state,{
        chapterList:payload
      })
    },
    chapterDetailSave(state,payload){
      Object.assign(state,{
        chapterDetail:payload
      })
    }
  },
  actions:{
    async querychapterList({commit,dispatch},payload){
      let response = await querychapterList(payload);
      if(response.status==200){
        // console.log(response,'response')
        commit('chapterListSave',response.data)
      }
    },
    async querychaperDetail({commit,dispatch},payload){
      let response = await querychaperDetail(payload);
      if(response.status==200){

        commit('chapterDetailSave',response.data)
      }
    }
  }
}
