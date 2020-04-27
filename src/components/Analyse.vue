<template>
  <div class="analyse">
        <Nav></Nav>
        <!-- <div>请输入请求体(文件名)</div>
        <input type="text" v-model="reqBody">
        <button v-on:click="SendGet">测试Get请求</button>
        <button v-on:click="SendPost">测试Post请求</button>
        <div>请求返回结果如下：</div>
        <div>{{result}}</div>
        <button v-on:click="sim_result">模拟生成返回结果</button> -->
        
        <div class="title">上传文件，马上开始静态分析之旅</div>
        <el-upload
            class="upload-box"
            drag
            action="http://118.89.104.33:8888/api/testFile"
            :on-success="uploadSuccess"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传cpp文件，且不超过500kb</div>
        </el-upload>

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
        
        uploadSuccess(response){
            console.log(response.content);
            this.$router.push({path:'/ResultPage',params:{fileID:'12345'}});
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
    margin-top: 50px;
}

.upload-box{
    width:360px;
    margin:0 auto;
    margin-top: 20px;
}

</style>