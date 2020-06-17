<template>
  <div class="Nav">
      <div class="frame">
          <router-link to="/"><div class="logo">WSA</div></router-link>
          <div class="intro">C++在线分析平台</div>
          <div class="item-box">
                <router-link to="/FileAnalyse"><div class="item">文件上传</div></router-link>
                <router-link to="/OnlineAnalyse"><div class="item">在线分析</div></router-link>
                <router-link to="/AnalyseHistory"><div class="item">分析记录</div></router-link>
                <div class="user-box">
                    <i v-bind:class="[userType ? 'is_user':'is_guest','el-icon-user-solid']"></i>
                    <span class="user-info">欢迎，{{username}}</span>
                     <el-link type="warning" class="logout" v-on:click="logout">退出登录</el-link>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Nav',
    data(){
            return{
                username:"",
                userType:1,  //true 代表注册用户, false代表游客用户
            }
        },
    methods:{
        getUserInfo:function(){
            console.log("get user info");
            (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/whoIam"
                )
                .then(function(response) {
                    var data = response.data;
                    console.log(data);
                    if(data.statusCode==0){
                        _this.userType=1;
                        _this.username=data.username;
                    }
                    else{
                        _this.userType=0;
                        _this.username="游客";
                    }
                    console.log(_this.userType);
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
        },
        logout:function(){
             (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/logoff"
                )
                .then(function(response) {
                    var data = response.data;
                    console.log(data);
                    _this.$router.push({name:'Welcome'});
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
        }
    },
    mounted(){
        this.getUserInfo();
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    width:100%;
    height:64px;
    /* background-color: #42b983; */
    border-bottom: solid #eaecef 1px;
}
.logo{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;;
    font-size: 30px;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    height: 64px;
    width:100px;
    line-height: 64px;
    float: left;
    margin-left: 30px;
}
.intro{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;;
    font-size: 20px;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    height: 64px;
    width:200px;
    line-height: 70px;
    float: left;
    margin-left: 10px;
}
.item-box{
    float:right;
    margin-right: 50px;
}
.item,.user-box{
    float:left;
    height: 50px;
    width: 100px;
    font-size: 20px;
    font-weight: 500px;
    line-height: 64px;
    text-align: center;
    margin-right: 10px;
}
.item:hover{
    border-bottom: solid #42b983 3px;
}
/* 用户信息框 */
.user-box{
    margin-top: 3px;
    font-size: 16px;
    text-align: left;
    width: 265px;
}


.el-icon-user-solid{
    font-size: 20px;
}
.user-info{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 175px;
    height:20px;
    line-height: 25px;
    margin-top: -3px;
    margin-left: 5px;
}
.logout{
    height:20px;
    line-height: 25px;
    margin-top: -5px;
    margin-left: 5px;
}
.is_user{
    color: #67C23A;
}
.is_guest{
    color:#E6A23C;
}
</style>
