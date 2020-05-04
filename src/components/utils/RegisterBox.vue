<template>
    <div class="RegisterBox">
        <div class="frame">
            <input type="text" placeholder="用户名/手机号/邮箱" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <input type="password" placeholder="请再次确认密码" v-model="password_confirm">
            <div class="buttons">
                <button v-on:click="SubmitInfo">注册</button>
                <button v-on:click="GoLogin">已有账号？点击登录</button>
                <router-link to="/FileAnalyse"><div class="visitor">游客登陆</div></router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterBox',
    data(){
        return{
            username:"",
            password:"",
            password_confirm:"",
        }
    },
    methods:{
        SubmitInfo:function(){

        },
        GoLogin:function(){
            this.$emit('func');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    position:relative;
    width:350px;
    height:430px;
    left: 50%;
    margin-left: -175px;
    margin-top: 20px;
    padding-top: 20px;
    /* border:solid white 2px; */

}
input{
    display: block;
    width:290px;
    height:40px;
    margin-left: 25px;
    padding-left: 10px;
    border:solid white 0px;
    border-radius: 5px;
    margin-bottom: 40px;
    outline: none;
    /* opacity: 80%; */
}
button{
    display: inline-block;
    outline: none;
    width:300px;
    height:40px;
    border:0px;
    background-color: #42b983;
    /* border:solid #1989FA 1px; */
    border-radius: 5px;
    color:white;
    font-size: 14px;
    margin-bottom: 40px;
    transition: background-color .2s linear;
}
button:hover{
    background-color:#2e9466 ;
}
.buttons{
    margin-top: 80px;
}
.visitor{
    color:white;
    font-size: 14px;
    text-decoration: underline;
    text-align: right;
    margin-right: 25px;
}
</style>
