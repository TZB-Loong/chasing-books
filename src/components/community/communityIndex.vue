<template>
  <div>
    <group gutter='0'>
      <cell is-link>
        <span slot="icon"><img src='../../assets/taolun.png' class="img-box" /></span>
        <span slot="title">综合讨论社区</span>
      </cell>
      <cell is-link>
         <span slot="icon"><img src='../../assets/pl.png' class="img-box"/></span>
        <span slot="title">书评区</span>
      </cell>
      <cell is-link>
         <span slot="icon"><img src='../../assets/huzhu.png' class="img-box"/></span>
        <span slot="title">书荒互助区</span>
      </cell>
    </group>
  </div>
</template>
<script>
  import {Cell,Group} from 'vux';
export default {
  components:{
    Cell,
    Group
  },
  computed :{

  },
  methods:{

  },
  created(){

  },
  data(){
    return {
        callData:[]
    }
  }
}
</script>
<style lang="less">
  .img-box{
    width: 20px;
    margin-right: 10px;
    // margin-top: 2px;
  }
</style>
