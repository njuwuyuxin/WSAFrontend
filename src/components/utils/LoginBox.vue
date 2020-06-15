<template>
    <div class="LoginBox">
        <div class="frame">
            <input type="text" placeholder="用户名/手机号/邮箱" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
            <div class="buttons">
                <button v-on:click="SubmitInfo">登录</button>
                <button v-on:click="GoRegister">还没有账号？点击注册</button>
                <router-link to="/FileAnalyse"><div class="visitor">游客登陆</div></router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginBox',
    data(){
        return{
            username:"",
            password:"",
        }
    },
    methods:{
        SubmitInfo:function(){
            console.log(document.cookie);
            (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/login",	//dev
                    {
                        username:_this.username,
                        password:_this.password
                    }
                )
                .then(function(response) {
                    var data=response.data;
                    if(data.statusCode==0){
                        _this.$router.push({name:'FileAnalyse'});
                    }
                    else{
                        _this.$message({
                            message:data.info,
                            type:"error",
                            duration:2000,
                            offset:160
                        });
                    }
                    console.log(data);
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
            console.log(document.cookie);
        },
        GoRegister:function(){
            this.$emit('func');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    position:absolute;
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
