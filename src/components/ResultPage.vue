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
        }
    },
    mounted(){
        // (function(_this){
        //     _this.$axios
        //     .post(
        //         "https://www.easy-mock.com/mock/5ea3bed549aac7135eb43e53/wsa/analyze_result",	//dev
        //         // {fileID:_this.$route.params.fileID}
        //     )
        //     .then(function(response) {
        //         var data=response.data;
        //         _this.result=data; 
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
        // })(this);
        setTimeout(this.sim,2000);
    },
    props: {
        msg: String
    },
    data(){
      return{
          getResultFlag:false,
          result:{
                "filename":"main.cpp",
                "error_count":3,
                "errors":[
                    {
                        "start_line":4,
                        "end_line":6,
                        "lines_before_error":[
                            {
                                "lineNo":1,
                                "code":"int main(){"
                            },
                            {
                                "lineNo":2,
                                "code":"    cout<<\"hello world\"<<endl;"
                            },
                            {
                                "lineNo":3,
                                "code":"    cout<<\"xxx\"<<endl;"
                            }
                        ],
                        "error_lines":[
                            {
                                "lineNo":4,
                                "code":"    for(int i=0;i<100;i++){"
                            },
                            {
                                "lineNo":5,
                                "code":"        i--;"
                            },
                            {
                                "lineNo":6,
                                "code":"    }"
                            }
                        ],
                        "lines_after_error":[
                            {
                                "lineNo":7,
                                "code":"    cout<<\"loop finished\"<<endl;"
                            },
                            {
                                "lineNo":8,
                                "code":"    return 0;"
                            },
                            {
                                "lineNo":9,
                                "code":"}"
                            }
                        ],
                        "error_info":"检测到死循环缺陷，该循环可能无法在有限时间内退出"
                    },
                    {
                        "start_line":9,
                        "end_line":12,
                        "lines_before_error":[
                            {
                                "lineNo":1,
                                "code":"int main(){"
                            },
                            {
                                "lineNo":2,
                                "code":"    cout<<\"hello world\"<<endl;"
                            },
                            {
                                "lineNo":3,
                                "code":"    cout<<\"xxx\"<<endl;"
                            }
                        ],
                        "error_lines":[
                            {
                                "lineNo":4,
                                "code":"    for(int i=0;i<100;i++){"
                            },
                            {
                                "lineNo":5,
                                "code":"        i--;"
                            },
                            {
                                "lineNo":6,
                                "code":"    }"
                            }
                        ],
                        "lines_after_error":[
                            {
                                "lineNo":7,
                                "code":"    cout<<\"loop finished\"<<endl;"
                            },
                            {
                                "lineNo":8,
                                "code":"    return 0;"
                            },
                            {
                                "lineNo":9,
                                "code":"}"
                            }
                        ],
                        "error_info":"检测到死循环缺陷，该循环可能无法在有限时间内退出"
                    },
                    {
                        "start_line":18,
                        "end_line":20,
                        "lines_before_error":[
                            {
                                "lineNo":15,
                                "code":"int main(){"
                            },
                            {
                                "lineNo":16,
                                "code":"    cout<<\"hello world\"<<endl;"
                            },
                            {
                                "lineNo":17,
                                "code":"    cout<<\"xxx\"<<endl;"
                            }
                        ],
                        "error_lines":[
                            {
                                "lineNo":18,
                                "code":"    for(int i=0;i<100;i++){"
                            },
                            {
                                "lineNo":19,
                                "code":"        i--;"
                            },
                            {
                                "lineNo":20,
                                "code":"    }"
                            }
                        ],
                        "lines_after_error":[
                            {
                                "lineNo":21,
                                "code":"    cout<<\"loop finished\"<<endl;"
                            },
                            {
                                "lineNo":22,
                                "code":"    return 0;"
                            },
                            {
                                "lineNo":23,
                                "code":"}"
                            }
                        ],
                        "error_info":"检测到死循环缺陷，该循环可能无法在有限时间内退出"
                    }
                ]
            },
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
