<template>
    <div class="FilePage">
        <Nav></Nav>
        <div class="code-box">
            <div class="code-box-header">
                <span>{{filename}}</span>
            </div>
            <NormalLine v-for="line in lines" v-bind:LineInfo="line" :key="line.lineNo"></NormalLine>
        </div>
    </div>
</template>

<script>
import Nav from './utils/Nav.vue'
import NormalLine from './utils/NormalLine'

export default {
    name: 'FilePage',
    components:{
        Nav,
        NormalLine,
    },
    methods:{
        sim:function(){
            this.getResultFlag=true;
        },
        getFile:function(){
            (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/checkFile",	//dev
                    {
                        analyzeID:_this.$route.params.analyzeID,
                        filename:_this.$route.params.filename
                    }
                )
                .then(function(response) {
                    var lines = response.data.lines;
                    for(var i=0;i<lines.length;i++){
                        var one_line = {
                            lineNo:i+1,
                            code:lines[i]
                        }
                        _this.lines.push(one_line);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
        },
    },
    mounted(){
        this.getFile();
        this.filename = this.$route.params.filename;
    },
    props: {
        msg: String
    },
    data(){
      return{
          lines:[],
          filename:"",
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
    margin-bottom: 50px;
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
</style>
