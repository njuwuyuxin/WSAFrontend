<template>
    <div class="AnalyseHistory">
        <Nav></Nav>
        <div class="box">
            <el-table
                :data="historyResults"
                @row-click="getOneResult"
                stripe
                style="width: 100%">
                <el-table-column
                prop="analyzeId"
                label="分析ID"
                width="350"
                >
                </el-table-column>
                <el-table-column
                prop="filename"
                label="文件名"
                width="200"
                sortable>
                </el-table-column>
                <el-table-column
                prop="errorcount"
                label="缺陷数"
                width="100"
                sortable>
                </el-table-column>
                <el-table-column
                prop="filecount"
                label="文件数"
                width="100"
                sortable>
                </el-table-column>
                <el-table-column
                prop="timestamp"
                label="提交时间"
                width="200"
                sortable>
                </el-table-column>
            </el-table>
        </div>
        
    </div>
</template>

<script>
import Nav from './utils/Nav';
export default {
    name: 'AnalyseHistory',
    components:{
        Nav,
    },
    methods:{
       getHistory:function(){
           (function(_this){
                _this.$axios
                .post(
                    "http://118.89.104.33:8888/api/checkHistory",	//dev
                )
                .then(function(response) {
                    var data=response.data;
                    console.log(data);

                    //游客身份查询历史记录
                    if(data.statusCode==0){
                        _this.historyResults=data.histories;
                    }
                    else{
                         _this.$message({
                            message:"游客无法查询历史纪录哦",
                            type:"error",
                            duration:2000,
                            offset:160
                        });
                        _this.$router.push({name:'FileAnalyse'}); 
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
            })(this);
       },
       getOneResult(row){
           var analyzeID = row.analyzeId;
           this.$router.push({
                name:'ResultPage',
                params:{
                    analyzeID:analyzeID
                }
            });
           console.log(row);
        //    console.log(column);
       }
    },
    mounted(){
        this.getHistory();
    },
    props: {
        msg: String
    },
    data(){
      return{
          historyResults:[],
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    position:relative;
    left: 50%;
    width:950px;
    margin-left: -475px;
    margin-top: 30px;
    border-top: solid #e1e4e8 1px;
    border-left: solid #e1e4e8 1px;
    border-right: solid #e1e4e8 1px;
    border-radius: 3px;
}
</style>
