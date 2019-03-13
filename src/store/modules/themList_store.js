
import {querythemList,querythemDetail} from '../../services/api';
export default {
  state:{
    themList:[], //书单列表
    themDetail:{}, //单个书单详情
  },
  mutations:{
    themListSave(state,payload){
      Object.assign(state,{
        themList:payload
      })
    },
    themDetailSave(state,payload){
      Object.assign(state,{
        themDetail:payload
      })
    }
  },
  actions:{
    async querythemList({commit,dispatch},payload){ //书单列表
      let response = await querythemList(payload)
      if(response.status == 200){
        // console.log(response,'response')
        commit('themListSave',response.data)
      }
    },
    async querythemDetail({commit,dispatch},payload){
      let response = await querythemDetail(payload)
      if(response.status==200){
        commit('themDetailSave',response.data.bookList)
      }
    }

  }
}
