<template>
<div>
	<div class="query-tab">
		<t-tabs>
			<t-tab-panel label="个人客户" name="tab-1">
				<div class="content">
						<t-form :model="personal" label-position="left" :label-span="3">
								<t-form-item label="证件类型:">
									<t-select v-model="personal.type" placeholder="请选择">
											<t-option value="身份证">身份证</t-option>
                      <t-option value="护照">护照</t-option>
                      <t-option value="军官证">军官证</t-option>
									</t-select>
								</t-form-item>
								<t-form-item label="身份证号:">
										<t-input v-model="personal.personNum" placeholder="请输入"></t-input>
								</t-form-item>
								<t-form-item label="姓名:">
										<t-input v-model="personal.personName" placeholder="请输入"></t-input>
								</t-form-item>
						</t-form>
				</div>
			</t-tab-panel>
			<t-tab-panel label="机构客户" name="tab-2">
				<div class="content">
					<t-form :model="construction" label-position="left" :label-span="3">	 <t-form-item label="统一社会信用代码:">
									<t-input v-model="construction.code" placeholder="请输入"></t-input>
							</t-form-item>
							<t-form-item label="机构名称:">
									<t-input v-model="construction.name" placeholder="请输入"></t-input>
							</t-form-item>
							<t-form-item label="机构简称:">
									<t-input v-model="construction.simpleName" placeholder="请输入"></t-input>
							</t-form-item>
					</t-form>
				</div>	
			</t-tab-panel>
			<t-tab-panel label="业务属性" name="tab-3">
				<div class="content con">
					<t-form :model="business" label-position="left" :label-span="3">
							<t-form-item label="单号:">
								<t-input v-model="business.ticket" placeholder="请输入"></t-input>
								<t-tooltip placement="top">
									<i class="iconfont icon-text">&#xe634;</i>
									<ul class="list-unstyled" slot="content">
										<li>根据不同版块，展示不一样，邮务包括</li>
										<li>单号，保险包括保单号</li>
									</ul>
								</t-tooltip>
							</t-form-item>
					</t-form>
				</div>
			</t-tab-panel>
			<t-tab-panel label="客户组织" name="tab-4">
				<div class="content cons">
					<t-form :model="organise" label-position="left" :label-span="3">
						<div @click="hide">
							<t-form-item label="组织机构:">
								<t-input v-model="organise.organiseName" placeholder="请输入">
									<span slot="append">
					            <i class="iconfont icon-search">&#xe62c;</i>
					        </span>
								</t-input>
							</t-form-item>
						</div>
						<t-form-item label="客户经理:">
							<t-select v-model="organise.organiseManager" placeholder="请选择客户经理">
									<t-option value="无">无</t-option>
							</t-select>
						</t-form-item>
					</t-form>
				</div>
			</t-tab-panel>
		</t-tabs>
		<t-modal v-model="modals" width="440">
			<p slot="header">
				<span>选择组织机构</span>
			</p>
			<div>
					<select-organize @show-data="showData"></select-organize>
			</div>
			<div slot="footer">
				<t-button type="outline" class="sub-btn" @click="cancels">取消</t-button>
				<t-button type="primary"  @click="oks">确定</t-button>
			</div>
		</t-modal>
	</div>
</div>	
</template>
<script>
import selectOrganize from './selectOrganize.vue'
export default{
	components:{
		selectOrganize
	},
	data(){
		return{
			personal:{
				type:'',
				personNum:'',
				personName:''
			},
			construction:{
				code:'',
				name:'',
				simpleName:''
			},
			business:{
				ticket:''
			},
			organise:{
				organiseName:'',
				organiseManager:''
			},
			modals:false,
			oData:''
		}
	},
	methods:{
		cancels(){
			this.organise.organiseName = ''
			this.modals = false
			this.$emit('show-dialog')
		},
		oks(){
			this.organise.organiseName = this.oData
			this.modals = false
			this.$emit('show-dialog')
		},
		hide(){
			this.$emit('hide-dialog')
			this.modals = true
		},
		showData(data){
			this.oData = data
			this.organise.organiseName = data
		}
	}
}	
</script>
<style lang="less" scoped>
.query-tab{
	padding:0 38px;
	
	.form-group{
		margin-bottom:18px;
	}
	.form--label-left{
		.form-group__label{
			padding-left:0;
			min-width:118px;
			font-size:14px;
			color:#000;
			opacity:0.65;
			filter:alpha(opacity=65);
		}
	}
	.tabs{
		 .nav-tabs{
		 		.nav-link{
		 			margin-right:0;
		 			padding:0 16px;
		 			font-size:14px;
		 			color:#455155;
		 		}
		 }
	}
	.content{
		min-height:208px;
		padding-top:38px;
		.icon-text{
			cursor:pointer;
			color:#007F3B;
		}
		.icon-search{
			font-size:12px;
			color:#999;
		}
		.tooltip{
			.tooltip-inner{
				max-width:224px;
				background-color:rgba(31,45,61,0.85);
				border-radius:2px;
			}
			.list-unstyled{
				margin:0;
				li{
					font-size:12px;
					line-height:16px;
					color:#fff;
				}
			}
		}
		.input-group-addon{
			line-height:26px;
			position:relative;
			top:-0.5px;
			left:-6px;
			border:1px solid #d9d9d9;
			border-left:0;
			cursor:pointer;
			background:#f7f7f7;
			padding:0 10px 0 15px;
			z-index:0;
		}
		&.con{
			padding-top:65px;
			.col{
				position:relative;
				.input-wrapper{
					width:240px;
				}
				.tooltip-wrap{
					position:absolute;
					top:1px;
					right:11px;
					.tooltip{
						top:-65px!important;
						left:-170px!important;
						.tooltip-arrow{
							left:79%;
						}
					}
				}
			}
			.form--label-left{
				.form-group__label{
					min-width:105px;
				}
			}
		}
		&.cons{
			.select{
				width:246px!important;
			}
		}
	}
}	
</style>