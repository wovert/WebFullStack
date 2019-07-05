import Vue from 'vue/dist/vue.esm';

let vm=new Vue({
  el: '#div1',
  data: {
    name: '',
    age: 0
  },
  async created(){
    let res=await fetch('data/user.json');
    let data=await res.json();

    this.name=data.name;
    this.age=data.age;
  },
  template: `
  <div>
    姓名：{{name}}<br/>
    年龄：{{age}}
  </div>
  `
})
