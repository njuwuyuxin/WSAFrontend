<template>
  <div class="FileErrors">
        <div class="code-box-header">
            <span class="file_name" v-on:click="checkFile">{{result.filename}}</span>
            <span class="err_count">发现 {{result.error_count}} 个缺陷</span>
        </div>
        <CodeError v-for="error in result.errors" v-bind:ErrorInfo="error" :key="error.start_line"></CodeError>
  </div>
</template>

<script>
import CodeError from './CodeError'
export default {
  name: 'FileErrors',
  components:{
      CodeError,
  },
  props:{
      result:Object,
      analyzeID:String,
  },
  data(){
      return {

      }
  },
  methods:{
      checkFile:function(){
            //组件从上级页面拿到AnalyzeID，将ID和filename通过路由传值传递给Filepage并跳转，FilePage在加载过程中使用该信息请求文件内容
            console.log(this.analyzeID);
            this.$router.push({
                name:'FilePage',
                params:{
                    analyzeID:this.analyzeID,
                    filename:this.result.filename
                }
            });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FileErrors{    
    border:solid #e1e4e8 1px;
    border-radius: 3px;
    margin-bottom: 30px;
}
.code-box-header{
    background-color: #fafbfc;
    border-bottom: 1px solid #e1e4e8;
    font-size: 12px;
    line-height: 32px;
    padding-left: 20px;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
}

.file_name:hover{
    text-decoration: underline;
    cursor: pointer;
}

.err_count{
    margin-left: 10px;
}
</style>
