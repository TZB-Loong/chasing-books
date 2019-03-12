
import {querychapterList} from '../../services/api';

export default{
  state:{
    chapterList:{}
  },
  mutations:{
    chapterListSave(state,payload){
      Object.assign(state,{
        chapterList:payload
      })
    }
  },
  actions:{
    async querychapterList({commit,dispatch},payload){
      let response = await querychapterList(payload);
      if(response.status==200){
        console.log(response,'response')
        commit('chapterListSave',response.data)
      }
    }
  }
}
