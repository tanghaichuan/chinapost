<template>
<t-modal v-model="modals" width="440">
	<p slot="close" @click="closeTree"><span>×</span></p>
	<p slot="header">
		<span>选择组织机构</span>
	</p>
	<div>
		<div class="select-organize">
			<p class="tit"><span>已选择：</span>
				 <span class="select-close" v-if="show">{{result}}<i class="iconfont" @click="handleClose">&#xe60a;</i></span>
			</p>
			<div class="organize">
				<div class="left">
		     	<h3>组织机构</h3>
		     	<div class="left-orginize">
		     			<t-tree :data="data" :props="defaultProps" is-select @on-select="handleNodeClick"></t-tree>
		     	</div>
		    </div>
	    	<div class="right">
	       	<h3>机构层级</h3>
	       	<ul>
	          <li v-for="(item,index) in list" :key="index" @click="compulete(item)" :class="{bactive:item.isSelect}">
	          	{{item.name}}
	          	<span v-if="item.isSelect"><t-icon type="check" size="18"></t-icon></span>
	          </li>
	        </ul>
	    	</div>
			</div>
		</div>
	</div>
	<div slot="footer">
		<t-button type="outline" class="sub-btn" @click="cancels">取消</t-button>
		<t-button type="primary"  @click="oks">确定</t-button>
	</div>
</t-modal>
</template>
<script>
export default{
	props:{
		modals:{
			type:Boolean,
			default:false
		},
		data:{
			type:Array,
			default:[]
		},
		defaultProps:{
			type:Object,
			default:{}
		}
	},
	data(){
		return{
			labels:'',
			show:false,
      list:[],
      result1:'',
      result2:'',
      code:''
		}
	},
	methods: {
    handleNodeClick(data) {
      this.result = '';
      this.list = [];
      let obj = [];
      if(data.value){
        obj = data.value;
        for(let i=0;i<obj.length;i++){
          let label = obj[i].name;
          let code = obj[i].code;
          this.list.push({name:label,isSelect:false,code:code})
        }
      }
      this.result1 = data.label
      this.result2 = ''
      this.labels = data.label
    },
    compulete(item){
    	this.show = true;
      for(let i=0;i<this.list.length;i++){
        this.list[i].isSelect = false;
      }
      item.isSelect = !item.isSelect
      this.code = item.code
      this.result2 = '('+item.name+')'
      this.result1 = this.labels
    },
    handleClose(){
    	for(let i=0;i<this.list.length;i++){
        this.list[i].isSelect = false;
      }
     	this.show = false;
     	this.result1 = '';
     	this.result2 = '';
      this.code='';
    },
    closeTree(){
    	this.modals = false
    	this.$emit('close-tree')
    },
    oks(){
    	this.$emit('show-data',this.result1 +'  ' +this.result2,this.code)
    	this.$emit('close-tree')
    },
    cancels(){
    	this.$emit('show-data','')
    	this.$emit('close-tree')
    }
  },
  computed:{
  	result(){
  		return (this.result1 +'  ' +this.result2)
  	}
  }
}	
</script>
<style lang="less" scoped>
.select-organize{
  padding:0 6px;
  p{
    margin:0;
  }
  .tit{
    padding:0 0 10px;
    line-height:20px;
    font-size:12px;
    color:#000;
    opacity:0.8;
    filter:alpha(opacity=80);
  }
  .organize{
    padding-bottom:2px;
    border:1px solid #e4ebea;
    border-radius:4px;
    h3{
      font-size:12px;
      color:#000;
      opacity:0.8;
      filter:alpha(opacity=80);
      background:#f7f7f7;
      line-height:40px;
      text-indent:40px;
    }
    .left{
      width:50%;
      float:left;
      height:340px;
      overflow-y:auto;
      border-right:1px solid #e4ebea;
      .left-orginize{
        margin-top:10px;
        .tree{
          &>li{
            padding-left:14px;
          }
        }
      }
    }
    .right{
      width:50%;
      float:left;
      height:340px;
      overflow-y:auto;
      ul{
        list-style:none;
        margin:10px 0 0 0;
        padding:0;
        li{
          line-height:28px;
          text-indent:12px;
          font-size:12px;
          color:#455155;
          cursor:pointer;
          &:hover{
            background:#eefff4;
          }
          &:after{
            content:" ";
            height:0;
            clear:both;
            display:block;
          }
          &.bactive{
            background:#eefff4;
          }
        }
        span{
          padding-right:10px;
          float:right;
          i{
            color:#009241;
          }
        }
      }
    }
    &:after{
      content:" ";
      height:0;
      clear:both;
      display:block;
    }
  }
  .select-close{
    padding:2px 8px;
    background:#f3f3f3;
    line-height:22px;
    border-radius:4px;
    i{
      margin-left:10px;
      font-size:20px;
      color:#999;
      vertical-align:top;
      cursor:pointer;
    }
  }
}
</style>