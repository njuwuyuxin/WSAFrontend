<template>
    <div class="RegisterBox">
        <div class="frame">
            <div class="username-box">
                <input type="text" placeholder="用户名/手机号/邮箱" v-model="username" v-on:input="UsernameChange">
                <i v-bind:class="username_flag==1?'el-icon-circle-check':username_flag==2?'el-icon-circle-close':''"></i>
                <div class="err-info" v-if="username_flag==2">
                    <el-alert
                        class="error"
                        v-bind:title="username_err_info"
                        type="error"
                        v-bind:closable=false
                        show-icon>
                    </el-alert>
                </div>
            </div>
            <div class="password-box">
                <input type="password" placeholder="请输入密码" v-model="password" v-on:input="PasswordChange">
                <i v-bind:class="pwd_flag==1?'el-icon-circle-check':pwd_flag==2?'el-icon-circle-close':''"></i>
                <div class="err-info" v-if="pwd_flag==2">
                    <el-alert
                        class="error"
                        v-bind:title="pwd_err_info"
                        type="error"
                        v-bind:closable=false
                        show-icon>
                    </el-alert>
                </div>
            </div>
            <div class="pwdconfirm-box">
                <input type="password" placeholder="请再次确认密码" v-model="password_confirm" v-on:input="PwdconfirmChange">
                <i v-bind:class="pwd_confirm_flag==1?'el-icon-circle-check':pwd_confirm_flag==2?'el-icon-circle-close':''"></i>
                <div class="err-info" v-if="pwd_confirm_flag==2">
                    <el-alert
                        class="error"
                        v-bind:title="pwdconfirm_err_info"
                        type="error"
                        v-bind:closable=false
                        show-icon>
                    </el-alert>
                </div>     
            </div>
            
            
            <div class="buttons">
                <button v-on:click="SubmitInfo">注册</button>
                <button v-on:click="GoLogin">已有账号？点击登录</button>
                <router-link to="/FileAnalyse"><div class="visitor">游客登陆</div></router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
import {hex_sha1} from './sha1.js';
export default {
    name: 'RegisterBox',
    data(){
        return{
            username:"",
            password:"",
            password_confirm:"",
            username_flag:0,    //0 代表尚未填写username，1 代表username校验通过，2代表username校验不通过，以下同理
            pwd_flag:0,
            pwd_confirm_flag:0,
            username_err_info:"",
            pwd_err_info:"",
            pwdconfirm_err_info:"",
        }
    },
    methods:{
        SubmitInfo:function(){
            if(this.username_flag==1&&this.pwd_flag==1&&this.pwd_confirm_flag==1){
                console.log("submit");
                var hex_pwd = hex_sha1(this.password);
                console.log(hex_pwd);
                (function(_this){
                    _this.$axios
                    .post(
                        "http://118.89.104.33:8888/api/register",	//dev
                        {
                            username:_this.username,
                            password:hex_pwd
                        }
                    )
                    .then(function(response) {
                        var data=response.data;
                        _this.result=data; 
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                })(this);
            }
            else{
                this.$message({
                    message:"填写信息不符合格式",
                    type:"error",
                    duration:2000,
                    offset:160
                });
            }
            
        },
        GoLogin:function(){
            this.$emit('func');
        },
        UsernameChange(){
            function check_other_char(str)
            {
                var check = /[^a-zA-Z0-9@.]/; 
                if(check.test(str)){
                    return true;
                }
                else
                    return false;
            }

            if(this.username.length==0){
                this.username_flag=0;
            }
            else if(this.username.length<8){
                this.username_flag=2;
                this.username_err_info="用户名长度需在8个字符及以上";
            }
            else if(check_other_char(this.username)){
                this.username_flag=2;
                this.username_err_info="用户名不能包含特殊字符";
            }
            else{
                this.username_flag=1;
            }
        },
        PasswordChange(){
            if(this.password.length==0){
                this.pwd_flag=0;
            }
            else if(this.password.length<8){
                this.pwd_flag=2;
                this.pwd_err_info="密码长度需在8个字符及以上";
            }
            else if(this.password_confirm!=this.password&&this.pwd_confirm_flag!=0){
                this.pwd_flag=1;
                this.pwd_confirm_flag=2;
                this.pwdconfirm_err_info="两次输入的密码不一致";
            }
            else{
                this.pwd_flag=1;
                if(this.pwd_confirm_flag!=0){
                    this.pwd_confirm_flag=1;
                }
            }
        },
        PwdconfirmChange(){
            if(this.password_confirm.length==0){
                this.pwd_confirm_flag=0;
            }
            else if(this.password_confirm!=this.password){
                this.pwd_confirm_flag=2;
                this.pwdconfirm_err_info="两次输入的密码不一致";
            }
            else{
                this.pwd_confirm_flag=1;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    position:relative;
    width:380px;
    height:430px;
    left: 50%;
    margin-left: -190px;
    margin-top: 20px;
    padding-top: 20px;
    /* border:solid white 2px; */
}
input{
    display: block;
    float:left;
    width:290px;
    height:40px;
    margin-left: 40px;
    padding-left: 10px;
    border:solid white 0px;
    border-radius: 5px;
    margin-bottom: 5px;
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

.username-box,.password-box,.pwdconfirm-box{
    height:85px;
}

/* 错误提示信息样式 */
.error{
    margin-left: 45px;
}
.err-info{
    width:290px;
    height: 30px;
    /* border:solid white 1px; */
}

/* 验证成功或失败的Icon样式 */
.el-icon-circle-check,.el-icon-circle-close{
    margin-top: 7px;
    margin-right: 5px;
    font-size: 24px;
    float:right;
}
.el-icon-circle-check{
    color:#67C23A;

}
.el-icon-circle-close{
    color:#F56C6C;
}

.visitor{
    color:white;
    font-size: 14px;
    text-decoration: underline;
    text-align: right;
    margin-top: -10px;
    margin-right: 40px;
}
</style>
