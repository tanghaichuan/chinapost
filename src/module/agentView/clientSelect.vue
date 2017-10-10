<template>
<div class="client-wrapper">
  <p class="btn-icon"><t-button type="outline" class="sub-btn">
    <i class="iconfont">&#xe639;</i>返回</t-button>
  </p>
	<div class="client-select">
		<h3 class="tit">多客户选择</h3>
		<div class="query-list">
				<ul class="list-tit">
						<li>客户名称</li><li>企业代码</li><li>机构代码</li><li>客户状态</li>
				</ul>
				<ul class="list-result">
		      <li v-for="(items,index) in list" :key="index" @click="linkDetail(items)">
		       	<p><i class="iconfont iconClient" v-if="items.partyType ==1001">&#xe7ab;</i>
		       		 <i class="iconfont iconPerson" v-if="items.partyType ==1002">&#xe7ac;</i>
		       		 <span>{{items.name}}</span></p>
		       	<p><span>{{items.customerCode}}</span></p>
		       	<p><span>{{items.idenNr}}</span></p>
		       	<p><span>{{items.custmerStatusName}}</span></p>
		      </li>
	    	</ul>
		</div>
	</div>
	<div class="client-pager">
		<t-pager :total="100" :show-elevator="true" :show-sizer="true"></t-pager>
	</div>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default{
	data(){
		return{
			list: []
		}
	},
  methods:{
  	linkDetail({customerId}){

  		this.$router.push({
        path:`/agentview/detail/${customerId}`
      })
  	}
  },
  computed: {
    ...mapGetters([
      'getQueryCustomerList'
    ])
  },
  mounted(){
    let vm =this
    let queryList  = this.getQueryCustomerList
    for(let i=0;i<queryList.length;i++){
      this.list.push(queryList[i])
    }
    // console.log(queryList)
    // console.log(this.list)
  }
}
</script>
<style lang="less" scoped>
.client-wrapper{
  margin:0 20px;
  position:relative;
}
.btn-icon {
  margin: 0;
  text-align:right;
  position:absolute;
  top:-35px;
  right:0;
  i {
    margin-right: 6px;
    font-size: 14px;
    color: #666;
  }
  .sub-btn {
    color: #666;
    &:hover {
        color: #3DAC6E;
        i {
            color: #3DAC6E;
        }
    }
  }
}
.client-select{
	background:#fff;
	border:1px solid #d9d9d9;
	border-radius:4px;
	p{
		margin:0;
	}
	ul{
		list-style:none;
		margin:0;
		padding:0;
	}
	.tit{
		padding-left:25px;
		line-height:40px;
		font-size:14px;
		font-weight:normal;
		color:#000;
	}
	.query-list{
		.list-tit{
			line-height:40px;
			background:#f7f7f7;
			li{
				width:25%;
				font-size:12px;
				color:#000;
				text-align:left;
				text-indent:25px;
				float:left;
			}
			&:after{
				content:" ";
				height:0;
				clear:both;
				display:block;
			}
		}
		.list-result{
  		li{
  			line-height:40px;
  			border-bottom:1px solid #e9e9e9;
  			cursor:pointer;
  			&:after{
  				content:" ";
  				height:0;
  				clear:both;
  				display:block;
  			}
  			p{
  				width:25%;
  				font-size:12px;
  				color:#000;
  				float:left;
  				text-indent:25px;
  				span{
  					opacity:0.8;
	  				filter:alpha(opacity=80);
  				}
  				i{
	  				font-size:20px;
	  				vertical-align:top;
	  				margin-right:2px;
	  				&.iconClient{
	  					color:#007f3b;
	  				}
	  				&.iconPerson{
	  					color:#ffbb37;
	  				}
	  			}
  			}
  			&:last-child{
  				border-bottom:0;
  			}
        &:hover{
          background:#eefff4;
        }
  		}
    }
	}
}
.client-pager{
	padding-top:13px;
	.pagination{
		float:right;
	}
	&:after{
		content:" ";
		height:0;
		clear:both;
		display:block;
	}
}
</style>