<template>
  <div class="CodeError">
      <div class="frame">
          <div>
              <div class="ellipse">
                  <span class="part1">...</span>
                  <span class="part2">...</span>
              </div>
              <NormalLine v-for="line in ErrorInfo.lines_before_error" v-bind:LineInfo="line" :key="line.lineNo"></NormalLine>
              <ErrorLine v-on:mouseenter.native="showErrorTips" v-on:mouseout.native="closeErrorTips" v-for="line in ErrorInfo.error_lines" v-bind:LineInfo="line" :key="line.lineNo"></ErrorLine>
              <NormalLine v-for="line in ErrorInfo.lines_after_error" v-bind:LineInfo="line" :key="line.lineNo"></NormalLine>
              <el-alert
              class="errorTips"
                v-if="ErrorTipsFlag"
                v-bind:title="ErrorInfo.error_info"
                type="error"
                v-bind:style="{top:ErrorTipsPosY + 'px'}"
                show-icon>
              </el-alert>
              <!-- <div class="errorTips" v-if="ErrorTipsFlag" v-bind:style="{top:ErrorTipsPosY + 'px'}">{{ErrorInfo.error_info}}</div> -->
              <div class="ellipse">
                  <span class="part1">...</span>
                  <span class="part2">...</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import NormalLine from './NormalLine'
import ErrorLine from './ErrorLine'
export default {
  name: 'CodeError',
  components:{
      NormalLine,
      ErrorLine,
  },
  props:{
      ErrorInfo:Object,
  },
  data(){
      return {
          ErrorTipsFlag:false,
          ErrorTipsPosY:0,
      }
  },
  methods:{
      showErrorTips:function(event) {
          this.ErrorTipsFlag=true;
        //   console.log(event.screenX);
        this.ErrorTipsPosY=event.screenY-70;
      },
      closeErrorTips:function() {
          this.ErrorTipsFlag=false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    width:100%;
}
.ellipse{
    width:100%;
    height:24px;
    line-height: 12px;
}

.part1,.part2{
    display: inline-block;
    text-align: center;
    height:24px;
}
.part1{
    width:8%;
    background-color: #dbedff;
}
.part2{
    width:92%;
    background-color: #f1f8ff;
}
.errorTips{
    position:fixed;
    /* border:solid rgb(245, 239, 126) 1px; */
    /* border-radius: 5px; */
    /* background-color: rgb(248, 246, 211); */
    border:solid rgb(247, 111, 111) 1px;
    width:500px;
    height:100px;
    left:500px;
    padding: 10px 20px;
    font-size: 14px;
}

</style>
