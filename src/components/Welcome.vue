<template>
  <div class="welcome">
        <div class="bg"></div>
        <!-- <img src="https://s1.ax1x.com/2020/04/16/JAxW8A.jpg" alt="JAxW8A.jpg" border="0" /> -->
        <div class="title">WSA</div>
        <div class="intro">一个在线CPP静态分析平台</div>
        <div class="fullscreen" style="background: url(&quot;https://images.unsplash.com/photo-1551844267-c078a893539b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExOTUwfQ?w=2200&quot;) 50% 50% / cover;"></div>
        <router-link to="/Analyse"><div class="go">现在体验</div></router-link>
        <div class="footerbox">
            <div class="github">Github</div>
            <div class="footer">SE lab 2020</div>
        </div>
        
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
    text-align: center;
}
.bg{
    width:  100%;
    height: 100%;
    /* height: 1080px; */
    background-size: 100% 100%;
    /* background-image: url("https://s1.ax1x.com/2020/04/16/JAxW8A.jpg"); */
    background: url(https://images.unsplash.com/photo-1551844267-c078a893539b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExOTUwfQ?w=2200) 50% 50% / cover;
    position: fixed;
    z-index: -1;
    filter: brightness(0.8);
}
.title,.intro{
    font-weight: bold;
    letter-spacing: 6px;
    /* font-family:Verdana, Geneva, Tahoma, sans-serif; */
    color: white; 
}
.title{
    font-size: 45px;
    padding-top: 20%;
}
.intro{
    padding-top: 10px;
    font-size: 25px;
}
a{
    text-decoration: none;
}
.go{
    color: white;
    width:200px;
    height: 50px;
    background-color: #42b983;
    font-size: 22px;
    line-height: 50px;
    border-radius: 5px;
    margin:0 auto;
    margin-top: 40px;
    transition: background-color .2s linear;
    
    
    /* border:solid white 1px; */
}
.go:hover{
    background-color:#2e9466 ;
}
.github, .footer{
    text-align: left;
    margin-left: 40px;
    color: white;
    font-size: 18px;
    padding-top: 5px;
}
.footerbox{
    position: absolute;
    top:90%
}

</style>