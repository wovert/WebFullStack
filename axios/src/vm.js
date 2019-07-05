import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';

let vm=new Vue({
  el: '#div1',
  data: {
    name: '',
    age: 0,
    loaded: false
  },
  async created(){
    try{
      let {data}=await Axios.get('./data/user.json');

      this.name=data.name;
      this.age=data.age;

      this.loaded=true;
    }catch(e){
      alert('加载数据失败，请刷新页面');
    }
  },
  template: `
  <div v-if="loaded">
    <label>名字：</label><span>{{name}}</span><br/>
    <label>年龄：</label><span>{{age}}</span>
  </div>
  `
})
