<template>
    <div class="ResultPage">
        <Nav></Nav>
        <div class="code-box" v-if="getResultFlag">
            <FileErrors v-for="file in results" v-bind:result="file" v-bind:analyzeID="analyzeID" :key="file.filename"> </FileErrors>
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
import FileErrors from './utils/FileErrors'
import Nav from './utils/Nav';
export default {
    name: 'ResultPage',
    components:{
        FileErrors,
        Nav,
    },
    methods:{
        sim:function(){
            this.getResultFlag=true;
        },
        getResult:async function(){
            //自定义sleep函数
            function sleep(d){
                for(var t = Date.now();Date.now() - t <= d;);
            }

            //axios为异步请求，这里使用async函数实现同步效果
            async function tryGetResult(_this){
                var response = await _this.$axios.post(
                    "http://118.89.104.33:8888/api/getResult",
                    {analyzeID:_this.$route.params.analyzeID}
                );
                var data = response.data;
                console.log("try to get result");
                console.log(data);
                //后端分析完成，若未完成，statusCode=-1
                if(data.statusCode==0){
                    _this.getResultFlag=true;
                    _this.results=data.results;
                }
            }

            //轮询请求分析结果，每隔1秒请求一次，超过10次未得到结果视为超时
            var try_count=0;
            while(this.getResultFlag==false){
                if(try_count>=10){
                    this.$message({
                        message:"分析超时，请稍后重试",
                        type:"error",
                        duration:2000,
                        offset:160
                    });
                    this.$router.push({name:'FileAnalyse'});
                    break;
                }
                //等待每次axios请求返回
                await tryGetResult(this);
                if(this.getResultFlag==true)
                    break;
                try_count+=1;
                //每隔1秒请求一次
                sleep(1000);
            }
        },
    },
    mounted(){
        this.getResult();
        setTimeout(this.sim,2000);
        this.analyzeID=this.$route.params.analyzeID;
    },
    props: {
        msg: String
    },
    data(){
      return{
          getResultFlag:false,
          results:[],
          analyzeID:"",
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
