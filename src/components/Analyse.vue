<template>
  <div class="analyse">
        <Nav></Nav>      
        <div class="title">上传文件，马上开始静态分析之旅</div>
        <el-upload
            class="upload-box"
            drag
            action="http://118.89.104.33:8888/api/testFile"
            :before-upload="uploadCheck"
            :on-success="uploadSuccess"
            :on-error="uploadFailed"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传c cpp文件，且不超过1MB</div>
        </el-upload>
        <el-alert
            class="alert"
            v-if="hasError"
            v-bind:title="alertInfo"
            type="error"
            show-icon>
        </el-alert>
        <!-- <button v-on:click="SendPost">test</button> -->
        <!-- <div class="container">
            <div class="wave"></div>
        </div> -->

        <!-- <button v-on:click="GetResult">开始分析</button> -->
        
  </div>
</template>

<script>
import Nav from './utils/Nav.vue'
export default {
  name: 'Analyse',
  components:{
      Nav,
  },
  data(){
        return {
            reqBody:"",
            fileList: [],
            result:{},
            alertInfo:"文件上传失败",
            hasError:false,
        }  
  },
  methods:{
        SendGet:function(){
            (function(_this){
                _this.$axios
                .get(
                    "http://118.89.104.33:8888/api/testGet?filename="+_this.reqBody
                )
                .then(function(response) {
                    var data=response.data;
                    _this.result=data;      
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
        },

        SendPost:function(){
            (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/testPost",	//dev
                    {filename:_this.reqBody}
                )
                .then(function(response) {
                    var data=response.data;
                    _this.result=data; 
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
        },

        GetResult:function(){
            (function(_this){
                _this.$axios
                .post(
                    " https://www.easy-mock.com/mock/5ea3bed549aac7135eb43e53/wsa/analyze_result",	//dev
                    // {filename:_this.reqBody}
                )
                .then(function(response) {
                    var data=response.data;
                    console.log(data); 
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
        },

        sim_result:function () {
            this.result="这是模拟的返回结果";
        },
        
        alertCancel:function(){
            this.hasError=false;
        },

        uploadCheck(file){
            var testmsg=file.name.substring(file.name.lastIndexOf('.')+1);            
            const extension = testmsg === 'c';
            const extension2 = testmsg === 'cpp';
            const isLt1M = file.size / 1024 / 1024 < 1;
            if(!extension && !extension2) {
                this.alertInfo = "上传文件只能是 .c或.cpp格式！";
                this.hasError=true;
                setTimeout(this.alertCancel,2000);
            }
            if(!isLt1M){
                this.alertInfo = "上传文件不能超过1MB！";
                this.hasError=true;
                setTimeout(this.alertCancel,2000);
            }
            return extension || extension2 && isLt1M;
        },

        uploadSuccess(response){
            console.log(response.stateCode);
            if(response.stateCode==0){
                console.log(response.filename);
                this.$router.push({path:'/ResultPage',params:{filename:response.filename}});
            }
            else if(response.stateCode==-1){
                alert(response.errorInfo);
            }
            
        },

        uploadFailed(err){
            console.log(err);
            alert("上传失败，可能文件大小超出限制，请联系后端管理员");
        }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.title{
    width:300px;
    font-family: Microsoft YaHei;
    font-size: 20px;
    margin:0 auto;
    margin-top: 160px;
}

.upload-box{
    width:360px;
    margin:0 auto;
    margin-top: 20px;
}

.alert{
    position: fixed;
    width:400px;
    /* margin:20px auto; */
    left:50%;
    top:170px;
    margin-left: -200px;
    opacity: 100%;
}

</style>