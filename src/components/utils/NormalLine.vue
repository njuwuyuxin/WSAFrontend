<template>
  <div class="NormalLine">
      <div class="frame">
          <span class="lineNo">{{LineInfo.lineNo}}</span>
          <span class="codeBox"><span class="code">{{LineInfo.code}}</span></span>

      </div>
  </div>
</template>

<script>
export default {
  name: 'NormalLine',
  props:{
      LineInfo:Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    width:100%;
    height:20px;
    font-size: 12px;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;
    /* height:64px; */
    /* background-color: #42b983; */
    /* border-bottom: solid #eaecef 1px; */
}
.lineNo{
    display: inline-block;
    width:8%;
    background-color: rgb(245, 244, 244);
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color:rgba(27,31,35,.3);
}
.codeBox{
    display: inline-block;
    width:92%;
    background-color: #fff;
    line-height: 20px;
}
.code{
    margin-left: 20px;
}
</style>
