import Vue from 'vue/dist/vue.esm';

let vm=new Vue({
  el: '#div1',
  data: {
    result: 0
  },
  methods: {
    async fn_submit(){
      let form=this.$refs['form1'];
      let formdata=new FormData(form);

      let res=await fetch(form.action, {
        method: form.method,
        body: formdata
      });
      let result=await res.json();

      this.result=result;
    }
  },
  template: `
  <div>
    <form ref="form1" @click.prevent="fn_submit()" action="data/sum.php" method="post">
      <input type="text" name="a" value="0" />
      <input type="text" name="b" value="0" />
      <input type="submit" value="计算" />
    </form>
    {{result}}
  </div>
  `
})
