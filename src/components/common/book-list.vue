<template>
  <div>
      推荐书单列表
  </div>
</template>
<script>

  import {mapActions,mapState} from 'vuex';

export default {
  components:{

  },
  computed:{
    ...mapState({
      booklist:state=>state.common.bookList
    })
  },
  methods:{
    ...mapActions(['querbookList']),
    requestData(){
      this.querbookList({
      major:this.params.major,
      tag:this.params.tag.toString(),
      start:'0',
      gender:this.params.gender.toString(),
      limit:'4',
      type:'hot'
      }).then(()=>{
        this.booDatae = this.booklist.books;
      })
    }
  },
  name:'Book-list',
  props:['payload'],
  data(){
      return {
        params:this.payload,
        booDatae:[]
      }
    },
  created(){ //创建前
    this.requestData();
  }
}
</script>
<style lang="less">

</style>
