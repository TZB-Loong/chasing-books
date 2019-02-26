<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  Cell,
  CellBox,
  Flexbox
} from 'vux';
export default {
  components:{
    Cell,
    CellBox,
    Flexbox
  },
  name: 'HelloWorld',
  data () { //定义在这个组件当中使用的 变量(类似于react  中的state)
    return {
      msg: 'Welcome to Your Vue.js App',
      bookData:[]
    }
  },
  beforeCreate(){ //创建之前

  },
  created(){ //创建
    this.$fetch('cats/lv2/statistics').then(res =>{
      console.log(res,'rres')
    })
    this.$fetch('ranking/gender').then(res =>{
      console.log('res',res)
    })
  },
  beforeMount(){ //挂载之前

  },
  mounted(){ //挂载完成 (进行数据请求)
    // this.axios.get(url,parmas:{a:1,b:2})
  },
  beforeUpdate(){ //更新之前

  },
  updated(){ //更新完成

  },
  beforeDestroy(){ //销毁之前

  },
  destroyed(){ //销毁完成

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
