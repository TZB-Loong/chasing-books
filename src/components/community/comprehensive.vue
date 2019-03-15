<template>
  <div>
    <flexbox :gutter='0'>
      <flexbox-item>
            <group :gutter='0'>
                <cell title='全部' is-link arrow-direction='down' class="cell-box" @click.native="cellClick('category')"></cell>
            </group>
      </flexbox-item>
      <flexbox-item>
            <group :gutter='0'>
                <cell title='默认排序' is-link arrow-direction='down' class="cell-box" @click.native="cellClick('sort')"></cell>
            </group>
      </flexbox-item>
    </flexbox>
    <popup v-model="show">
        <popup-header
        left-text="取消"
        right-text="确定"
        :title="radioValue.value"
        :show-bottom-border="false"
        @on-click-left="cancel"
        @on-click-right="okClick"></popup-header>
        <group gutter="0">
          <radio :options="options" @on-change="radioChange" :value='radioValue.value'></radio>
        </group>
      </popup>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import {showLoading} from '../../util/utli.js';
import {PopupHeader,Popup,Flexbox,FlexboxItem,Group,Cell,Radio} from 'vux';
export default {
  components:{
    PopupHeader,
    Popup,
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    Radio
  },
  computed:{
    ...mapState({
      list:state=> state.comprehensive.list
    })
  },
  methods:{
    ...mapActions(['queryComprehensive']),
    queryData(params){
      this.queryComprehensive(params).then(()=>{
        this.listData = this.list;
        console.log(this.listData,'909');
        this.$vux.loading.hide();
      })
    },
    cellClick(type){
      this.options= type== 'category'?this.options:this.sortOptions;
      this.radioValue = type== 'category'?this.radioValue:this.sortRadioValue;
      this.show=true;
    },
    radioChange(value,label){
      // console.log(value,label,'90')
      this.radioValue = {key:value,value:label};
    },
    cancel(){ //取消
      this.show=false;
    },
    okClick(){ //确定
      this.show = false
    }

  },
  created(){
    showLoading(this.$vux);
    this.queryData(this.params)
  },
  data(){
    return {
      listData:null,
      show:false,
      radioValue:{key:'false',value:'全部'},
      sortRadioValue:{key:'updated',value:'默认排序'},
      options:[{
        key:'false',
        value:'全部'
      },{
        key:'true',
        value:"精品"
      }],
      sortOptions:[{
        key:'updated',
        value:'默认排序'
      },{
        key:'created',
        value:'最新发布'
      },{
        key:'comment-count',
        value:'最多评论'
      }],
      params:{
        block:'ramble',
        duration:'all',
        start:0,
        limit:20,
        sort:'updated',
        type:'all',
        distillate:false
      }
    }
  }

}
</script>
<style lang="less">
  .cell-box{
    text-align: center;
  }
</style>
