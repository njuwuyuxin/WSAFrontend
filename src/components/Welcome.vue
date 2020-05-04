<template>
  <div class="welcome">
        <div class="bg"></div>
        <!-- <img src="https://s1.ax1x.com/2020/04/16/JAxW8A.jpg" alt="JAxW8A.jpg" border="0" /> -->
        <div class="main">
            <div v-bind:class="is_login||is_register?'header-login':'header'">
                <div class="title">WSA</div>
                <div class="intro">一个在线CPP静态分析平台</div>
            </div>
            <div class="fullscreen" style="background: url(&quot;https://images.unsplash.com/photo-1551844267-c078a893539b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExOTUwfQ?w=2200&quot;) 50% 50% / cover;"></div>
            <transition name="button">
                <div v-if="!is_login&&!is_register" class="go" v-on:click="is_login=true">现在体验</div>
            </transition>
            <transition name="login-box">
                <LoginBox v-if="is_login" @func="getFlagFromLoginBox"></LoginBox>
            </transition>
            <transition name="register-box">
                <RegisterBox v-if="is_register" @func="getFlagFromRegisterBox"></RegisterBox>
            </transition>
        </div>
        


        <div class="footerbox">
            <div class="github">Github</div>
            <div class="footer">SE lab 2020</div>
        </div>
        
  </div>
</template>

<script>
import LoginBox from './utils/LoginBox'
import RegisterBox from './utils/RegisterBox'
export default {
  name: 'Welcome',
  components:{
      LoginBox,
      RegisterBox,
  },
  data(){
      return {
          is_login:false,
          is_register:false,
      }
  },
  methods:{
      getFlagFromLoginBox:function(){
          this.is_login=false;
          this.is_register=true;
      },
      getFlagFromRegisterBox:function(){
          this.is_login=true;
          this.is_register=false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
    text-align: center;
    height:100%;
    width:100%;
    overflow: hidden;
    position: absolute;
}
.main{
    position:relative;
    height:100%;
    width:380px;
    left:50%;
    margin-left: -190px;
}
.bg{
    width:  100%;
    height: 100%;
    /* height: 1080px; */
    background-size: 100% 100%;
    /* background-image: url("https://s1.ax1x.com/2020/04/16/JAxW8A.jpg"); */
    background: url(https://images.unsplash.com/photo-1551844267-c078a893539b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExOTUwfQ?w=2200) 50% 50% / cover;
    position: fixed;
    z-index: -1;
    filter: brightness(0.8);
}
.title,.intro{
    font-weight: bold;
    letter-spacing: 6px;
    /* font-family:Verdana, Geneva, Tahoma, sans-serif; */
    color: white; 
}
.title{
    font-size: 45px;
    /* padding-top: 20%; */
}
.intro{
    padding-top: 10px;
    font-size: 25px;
}
a{
    text-decoration: none;
}
.go{
    position:absolute;
    left:50%;
    color: white;
    width:200px;
    height: 50px;
    background-color: #42b983;
    font-size: 22px;
    line-height: 50px;
    border-radius: 5px;
    margin:0 auto;
    margin-top: 40px;
    margin-left: -100px;
    transition: background-color .2s linear;
}
.go:hover{
    background-color:#2e9466 ;
}

/* 按钮渐变消失动画 */
.button-leave-active{
    transition: opacity 0.1s linear;
}
.button-leave-to{
    opacity: 0;
}

/* 登录框和注册框互相切换动画 */
.login-box-enter-active,.register-box-enter-active{
    transition: opacity 0.3s linear;
}

.login-box-enter,.register-box-enter{
    opacity: 0;
}

.github, .footer{
    text-align: left;
    margin-left: 40px;
    color: white;
    font-size: 18px;
    padding-top: 5px;
}
.footerbox{
    position: absolute;
    top:90%
}

/* 实现点击按钮后标题部分平滑上移 */
.header{
    padding-top: 70%;
}
.header-login{
    padding-top: 30%;
    animation: toLogin 1s;
}
@keyframes toLogin {
    from{padding-top: 70%;}
    to{padding-top: 30%;}
}

::-webkit-scrollbar {
    width: 0 !important;
}
::-webkit-scrollbar {
    width: 0 !important;height: 0;
}

</style>