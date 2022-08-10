<template>
  <div class="Performance">
    <div class="Phead">
    <div id="front">
        <div id="s1">
        <select v-model="s1">
           <option value="Td">今天</option>
           <option value="m60">近60分钟</option>
           <option value="h4">近4小时</option>
           <option value="h6">近6小时</option>
           <option value="h12">近12小时</option>
           <option value="h24">近24小时</option>
           <option value="d2">近2天</option>
           <option value="d3">近3天</option>
           <option value="d7">近7天</option>
           <option value="d15">近15天</option>
        </select>
      </div>
    </div>
    
    <div id="behind">
      <div id="i1">
         <input v-model="i1" placeholder="输入关键字信息查找"/>
      </div>
	  
	    <div id="s2">
		    <select v-model="s2">
			     <option value="s30">30s</option>
			     <option value="s60">60s</option>
			     <option value="s90">90s</option>
			     <option value="s120">120s</option>
			     <option value="m3">3m</option>
			     <option value="m5">5m</option>
			     <option value="m10">10m</option>
		    </select>
      </div>
    </div>

  </div>
    
    <div class="Pbody">
	      <div id="p1" v-if="flag">
          <p>无数据</p>
        </div>
	      <table class="t1" v-else>
		       <thead>
			       <tr id="tr1">
               <td>标签</td>
				       <th>数量</th>
				       <th>Apdex</th>
				       <th>用户数量</th>
				       <th>FP</th>
               <th>FCP</th>
               <th>DOM Ready</th>
               <th>DNS</th>
			       </tr>
		       </thead>
		     <tbody>
			      <tr border:5px v-for="(item,index) in flist" :key="index">
				    <td>{{item.Tag}}</td>
            <td>{{item.Nums}}</td>
				    <td>{{item.Apdex}}</td>
				    <td>{{item.Users}}</td>
				    <td>{{item.FP}}</td>
            <td>{{item.FCP}}</td>
            <td>{{item.DOM_Ready}}</td>
            <td>{{item.DNS}}</td>
			      </tr>
		     </tbody>
	      </table>
    </div>
  </div>
  
</template>

<script>
import TrendChart from '../components/TrendChart.vue'
export default {
  name: 'Performance',
  data() {
    return{
     s1: 'h4',
     i1: '',
     s2: 'm3',
	 flag: false,
	 list:[
		{
        "Tag":"牛逼",
        "Nums":40,
		    "Apdex":'sb',
		    "Users":78,
		    "FP":"",
        "FCP":"",
        "DON_Ready":"",
        "DNS":"",
        "Time":'4h',
        "Periods":'s30'
	    },
	    { "Tag":'哇哈哈',
        "Nums":40,
		    "Apdex":'sb',
		    "Users":78,
		    "FP":'',
        "FCP":'',
        "DON_Ready":'',
        "DNS":"",
        "Time":"60m",
        "Periods":'s60'
	    }
	 ]
	}
  },
  computed:{
    flist(){   //筛选：时间范围、关键字、时间长度
         newList=this.list.filter(item=>item.Time==this.s1)
         if(newList==undefined||newList==null||JSON.stringify(newList)===('[]'))
         {
          this.flag=true
         }
         else
         {
          this.flag=false
         }
         return newList
    }
  }
}
</script>

<style lang='less' scoped>
.Phead{
  display:flex;
  flex-flow: row,wrap;
  justify-content:space-between;
  width: 100%;
  height: 1.1111rem;
  padding:auto,0;
}

#s1 {
  width: 150%;
}

#behind {
  display: flex;
  flex-flow: row, wrap;
  justify-content: space-between;
}
#i1 {
  display: block;
  box-sizing: border-box;
  padding-right: 1.1111rem;
}

#s2 {
  display: block;
  box-sizing: border-box;
}

.Pbody {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding-top: 1.4111rem;
}

#p1 {
  text-align: center;
  padding-top: 6.1111rem;
}

#tr1 {
  background: #f1f3f7;
}
tr {
  display: block;
  border: 1px solid #f1f3f7;
}

th,
td {
  text-align: left;
  font-size: 0.7111rem;
  width: 10.4111rem;
  height: 1.4111rem;
}
</style>
