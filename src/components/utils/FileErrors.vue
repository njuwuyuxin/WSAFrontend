<template>
  <div class="FileErrors">
        <div class="code-box-header">
            <span>{{result.filename}}</span>
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
  },
  data(){
      return {

      }
  },
  methods:{
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

</style>
