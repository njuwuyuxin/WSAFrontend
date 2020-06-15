<template>
  <div class="Nav">
      <div class="frame">
          <router-link to="/"><div class="logo">WSA</div></router-link>
          <div class="intro">C++在线分析平台</div>
          <div class="item-box">
                <router-link to="/FileAnalyse"><div class="item">文件上传</div></router-link>
                <router-link to="/OnlineAnalyse"><div class="item">在线分析</div></router-link>
                <router-link to="/AnalyseHistory"><div class="item">分析记录</div></router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    width:100%;
    height:64px;
    /* background-color: #42b983; */
    border-bottom: solid #eaecef 1px;
}
.logo{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;;
    font-size: 30px;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    height: 64px;
    width:100px;
    line-height: 64px;
    float: left;
    margin-left: 30px;
}
.intro{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;;
    font-size: 20px;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    height: 64px;
    width:200px;
    line-height: 70px;
    float: left;
    margin-left: 10px;
}
.item-box{
    float:right;
    margin-right: 50px;
}
.item{
    float:left;
    height: 50px;
    width: 100px;
    font-size: 20px;
    font-weight: 500px;
    line-height: 64px;
    text-align: center;
    margin-right: 10px;
}
.item:hover{
    border-bottom: solid #42b983 3px;
}
</style>
