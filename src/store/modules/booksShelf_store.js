
import {queryBookshelf} from '../../services/api';

export default {
    state:{
      show:false,
      boyBooks:[]
    },
    getters:{ //对上面的state的进一步处理(不能直接修改,只是基于state的修改再次修改)
      not_show(state){
        return !state.show //返回出来的就是请求的结果
      },
      boyBooks(state){
        return state.boyBooks;
      }
    },
    mutations:{ //mutations 里面的操作是同步的(不推荐使用异步,但是如果使用异步的话也是可以获取到数据)
      booksChage(state,payload){
        Object.assign(state,{
          boyBooks:payload
        })
        console.log(state.boyBooks,'909')
      }
    },
    actions:{ //使用actions 来执行多个,mutatiaons (actions 异步(调用Api))
      async booksChage(context,payload){ //context 与在页面中使用的this.$store对象的参数是一样的
        let response = await queryBookshelf();

        console.log(response.status)
          if(response.status==200){
            console.log(response,'response')
            context.commit('booksChage',response.data)
          }
      }
    }
}

//mutatiaons 调用时 使用 this.$store.commit('booksChage'); //同步
//actions 调用时 使用 this.$store.dispatch('booksChage'); 异步
//getters 调用 使用 this.$store.getters.not_show
