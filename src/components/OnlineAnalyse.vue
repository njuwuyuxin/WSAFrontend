<template>
  <div class="OnlineAnalyse">
        <Nav></Nav>      
        <div class="title">在线编辑，马上开始静态分析之旅</div>
        <div class="container">
            <el-input
                class="code-box"
                type="textarea"
                :rows="23"
                resize="none"
                placeholder="请输入需要分析的代码"
                v-model="textarea">
            </el-input>
        </div>
        
        <button class="upload-button" v-on:click="upload">开始分析</button>
  </div>
</template>

<script>
import Nav from './utils/Nav.vue'
export default {
  name: 'OnlineAnalyse',
  components:{
      Nav,
  },
  data(){
        return {
            textarea:"",
        }  
  },
  methods:{
        upload:function(){
            (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/uploadString",	//dev
                    {codeline:_this.textarea}
                )
                .then(function(response) {
                    var data=response.data;
                    console.log("aaaaaaa");
                    if(data.stateCode==0){
                        console.log(data.filename);
                        _this.$router.push({
                            name:'ResultPage',
                            params:{
                                filename:data.filename
                            }
                        });
                    }
                    else if(data.stateCode==-1){
                        alert(data.errorInfo);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    alert("提交代码失败，请联系后台管理员");
                });
            })(this);
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


.alert{
    position: fixed;
    width:400px;
    /* margin:20px auto; */
    left:50%;
    top:170px;
    margin-left: -200px;
    opacity: 100%;
}

.container{
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;

}

.code-box{
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    position: relative;
    left: 50%;
    margin-top: 20px;
    width:800px;
    margin-left: -400px;
}

.upload-button{
    position:relative;
    border: none;
    outline: none;
    color: white;
    width:150px;
    height: 40px;
    background-color: #42b983;
    font-size: 18px;
    line-height: 40px;
    border-radius: 5px;
    left: 50%;
    margin-top: 30px;
    margin-left: -75px;
    transition: background-color .2s linear;
}
.upload-button:hover{
    background-color:#2e9466 ;
}
</style>