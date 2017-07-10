export default {
  //数据
  data: function() {
    return {

    }
  },
  //方法
  methods: {
      clickButton(){
          console.log(1);
          this.$http.post('/user/login').then(function(data){
              console.log(data);
          });
      }
  },
  //监听
  watch: {}
}
