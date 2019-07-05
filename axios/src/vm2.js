import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';
import {stringify} from 'querystring';

const axios=Axios.create({
  transformRequest: [
    function (data){
      return stringify(data);
    }
  ]
});

let vm=new Vue({
  el: '#div1',
  data: {
    result: 0
  },
  async created(){
    let {data}=await axios({
      url: './data/sum.php',
      method: 'post',
      data: {a: 55, b: 99}
    });

    this.result=data;
  },
  template: `
  <div>
    {{result}}
  </div>
  `
})
