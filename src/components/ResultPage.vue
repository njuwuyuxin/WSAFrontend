<template>
    <div class="ResultPage">
        <Nav></Nav>
        <div class="code-box" v-if="getResultFlag">
            <FileErrors v-for="file in results" v-bind:result="file" :key="file.filename"> </FileErrors>
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
// import CodeError from './utils/CodeError'
import FileErrors from './utils/FileErrors'
export default {
    name: 'ResultPage',
    components:{
        Nav,
        FileErrors,
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
                    {analyzeID:_this.$route.params.analyzeID}
                )
                .then(function(response) {
                    var data=response.data;
                    _this.results=data; 
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
            
        },
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
          results:[],
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
    /* border:solid #e1e4e8 1px; */
    /* border-radius: 3px; */
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
