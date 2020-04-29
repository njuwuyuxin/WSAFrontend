<template>
    <div class="ResultPage">
        <Nav></Nav>
        <div class="code-box" v-if="getResultFlag">
            <div class="code-box-header">
                <span>{{result.filename}}</span>
                <span class="err_count">发现 {{result.error_count}} 个缺陷</span>
            </div>
            <CodeError v-for="error in result.errors" v-bind:ErrorInfo="error" :key="error.start_line"></CodeError>
        </div>
        <div class="waiting" v-else>
            <div class="waiting_info">正在分析 请稍等...</div>
            <div class="container">
                <div class="wave"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Nav from './utils/Nav.vue'
import CodeError from './utils/CodeError'
export default {
    name: 'ResultPage',
    components:{
        Nav,
        CodeError,
    },
    methods:{
        sim:function(){
            this.getResultFlag=true;
        },
        getResult:function(){
            (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/getResult",	//dev
                    {filename:_this.$route.params.filename}
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
    },
    mounted(){
        this.getResult();
        setTimeout(this.sim,2000);
    },
    props: {
        msg: String
    },
    data(){
      return{
          getResultFlag:false,
          result:{},
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.code-box{
    position: absolute;
    left: 50%;
    margin-top: 30px;
    margin-left: -460px;
    width:920px;
    border:solid #e1e4e8 1px;
    border-radius: 3px;
}

.code-box-header{
    background-color: #fafbfc;
    border-bottom: 1px solid #e1e4e8;
    font-size: 12px;
    line-height: 32px;
    padding-left: 20px;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
}

.err_count{
    margin-left: 10px;
}

.correct-line,.error-line{
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    font-size: 12px;
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
    line-height: 20px;
}
.correct-line{
    background-color: #e6ffed;
    
}
.error-line{
    background-color: #ffeef0;
    /* background-color: #ffdce0; */
}

.waiting_info{
    width:170px;
    font-family: Microsoft YaHei;
    font-size: 20px;
    margin:0 auto;
    margin-top: 150px;
}
/* 实现一个波浪式的等待动画 */
.wave {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #76daff;
  border-radius: 50%;
}
.wave::before, .wave::after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  top: 0;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 45%;
  -webkit-transform: translate(-50%, -70%) rotate(0);
          transform: translate(-50%, -70%) rotate(0);
  -webkit-animation: rotate 6s linear infinite;
          animation: rotate 6s linear infinite;
  z-index: 10;
}
.wave::after {
  border-radius: 47%;
  background-color: rgba(255, 255, 255, 0.9);
  -webkit-transform: translate(-50%, -70%) rotate(0);
          transform: translate(-50%, -70%) rotate(0);
  -webkit-animation: rotate 10s linear -5s infinite;
          animation: rotate 10s linear -5s infinite;
  z-index: 20;
}

@-webkit-keyframes rotate {
  50% {
    -webkit-transform: translate(-50%, -73%) rotate(180deg);
            transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    -webkit-transform: translate(-50%, -70%) rotate(360deg);
            transform: translate(-50%, -70%) rotate(360deg);
  }
}

@keyframes rotate {
  50% {
    -webkit-transform: translate(-50%, -73%) rotate(180deg);
            transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    -webkit-transform: translate(-50%, -70%) rotate(360deg);
            transform: translate(-50%, -70%) rotate(360deg);
  }
}
.container {
    position: absolute;
    width: 200px;
    height: 200px;
    padding: 5px;
    border: 5px solid rgb(118, 218, 255);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    overflow: hidden;
}
.container {
  position: absolute;
  width: 200px;
  height: 200px;
  padding: 5px;
  border: 5px solid #76daff;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
}
</style>
