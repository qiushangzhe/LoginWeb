export default {
  //数据
  data: function() {
    return {
        userlist:[]
    }
  },
  //方法
  methods: {
      clickButton(){
          this.$http.post('/manage/getUser').then(function(data){
              this.userlist = data.body.data;
          });
      }
  },
  //监听
  watch: {}
}
