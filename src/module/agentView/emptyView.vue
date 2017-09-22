<template>
<div class="view-empty">
		<p class="empty-img">
			<img src="../../asset/image/empty.png" />
		</p>
		<p class="notice-txt">当前没有查询任何客户，赶紧查询吧</p>
		<p class="query-btn">
			<t-button type="primary" @click="showModal"><i class="iconfont">&#xe62c;</i>查询客户</t-button>
		</p>	
		<div class="query-dialog">
				<t-modal v-model="modal" width="476">
						<p slot="header">
							<span>客户查询</span>
						</p>
						<div>
								<client-query @hide-dialog ="hide" @show-dialog ="show"></client-query>
						</div>
						<div slot="footer">
							<t-button type="outline" class="sub-btn" @click="cancel">取消</t-button>
							<t-button type="primary">查询</t-button>
						</div>
				</t-modal>
		</div>
</div>	
</template>
<script>
import clientQuery from './components/clientquery.vue'
export default{
	components:{
		clientQuery
	},
	data(){
		return{
			modal:false
		}
	},
	methods:{
		showModal(){
			this.modal = true
		},
		cancel(){
			this.modal = false
		},
		hide(){
			this.modal = false
		},
		show(){
			this.modal = true
		}
	}
}	
</script>
<style lang="less" >
.view-empty{
	margin:0 20px 0 20px;
	min-height:1204px;
	background:#fff;
	p{
		margin:0;
	}
	.empty-img{
		padding-top:204px;
		text-align:center;
		img{
			width:112px;
		}
	}

	.notice-txt{
		padding:12px 0;
		font-size:12px;
		color:#000;
		text-align:center;
		line-height:26px;
	}

	.query-btn{
		text-align:center;
		i{
			font-size:10px;
			color:#F7FBF9;
			margin-right:8px;
		}
	}
	
}	
</style>