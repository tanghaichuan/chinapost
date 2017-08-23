<template>
<div class="edit-table">
	<!-- 这是一个查询结果的div -->
	<div class="query-result">
		<h2 class="query-tit">查询结果</h2>
		<ul class="query-list">
			<li v-for="(items,index) in queryList" :key="index">
				<p v-for="(item,index) in items.list" :key="index">
					<t-avatar :img-src="item.src" v-if="item.flag"></t-avatar>
					{{item.label}}
				</p>
			</li>
		</ul>
	</div>
	<!-- 查询结果结束 -->
	<p class="text">行内编辑</p>
	<div class="table-edit">
		<t-table border :columns="columns" :data="data"></t-table>
	</div>
	<p class="text">按钮状态</p>
	<div class="textarea">
		<div class="area">
			<t-input type="textarea" placeholder="请输入描述" v-model="textValue" :autosize="true"></t-input>
		</div>
		<p class="area-txt">
			<span class="fl">{{numText}}</span><span class="fr">{{textValue.length}}/10</span>
		</p>
		<div class="area-btn">
			<t-button type="primary" :disabled="numLength">提交</t-button>
		</div>
	</div>
	<p class="text">输入提示</p>
	<div>
		<t-poptip content="我是提示语句" placement="right">
          <input class="form-control"  placeholder="我是输入框">
        </t-poptip>
	</div>
	<!-- 这下面是一个可以展开收起的 -->
	<p class="text">高级搜索-简易搜索切换</p>
  	<div class="tab-search">
  		<div class="search" v-if="showSearch">
  			<t-input v-model="values" icon="magnify" icon-placement="right" placeholder="请输入..." class="search-input"></t-input>
  			<span class="text" @click="tabShow">高级搜索</span>
  		</div>
  		<div class="search-panel" v-else>
  			<div class="search-row row">
  				<div class="col-4">
  					<label class="label">应用名称:</label>
  					<div class="content">
  						<t-input v-model="value" placeholder="请输入名称..." class="search-input"></t-input>
  					</div>
  				</div>
  				<div class="col-4">
  					<label class="label">应用类型:</label>
  					<div class="content">
  						<t-select v-model="selectCity">
							<t-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{item.label}}</t-option>
						</t-select>
  					</div>
  				</div>
  				<div class="col-4">
  					<label class="label">应用分组:</label>
  					<div class="content">
  						<t-select v-model="selectCity1">
							<t-option v-for="(item,index) in cityList1" :value="item.value" :key="index">{{item.label}}</t-option>
						</t-select>
  					</div>
  				</div>
  			</div>
  			<div class="search-row row">
  				<div class="col-4">
  					<label class="label">应用创建者:</label>
  					<div class="content">
  						<t-select v-model="selectCity2">
							<t-option v-for="(item,index) in cityList2" :value="item.value" :key="index">{{item.label}}</t-option>
						</t-select>
  					</div>
  				</div>
  			</div>
  			<div class="button-group">
  				<span class="search-text" @click="tabShow">简易搜索</span>
  				<t-button type="outline-primary" class="btn" @click="clear">清空</t-button>
  				<t-button type="primary" class="btn">搜索</t-button>
  			</div>
  		</div>
  	</div>
</div>	
</template>
<script>
export default{
	data(){
		return{
			values:'',
			value:'',
			selectCity:'',
			selectCity1:'',
			selectCity2:'',
			showSearch:true,
			numText:'请至少输入3个字符',
			queryList:[
				{
					list:[
						{
							label:'Axxx',
							flag:true,
							src:require('../../../asset/image/avastar.jpg')
						},
						{
							label:'编号235412636',
							flag:false
						},
						{	
							label:'客户洞察相关属性',
							flag:false
						},
						{
							label:'客户洞察相关属性',
							flag:false
						}
					]
				},
				{
					list:[
						{
							label:'Axxx',
							flag:true,
							src:require('../../../asset/image/avastar.jpg')
						},
						{
							label:'编号235412636',
							flag:false
						},
						{	
							label:'客户洞察相关属性',
							flag:false
						},
						{
							label:'客户洞察相关属性',
							flag:false
						}
					]
				},
				{
					list:[
						{
							label:'Axxx',
							flag:true,
							src:require('../../../asset/image/avastar.jpg')
						},
						{
							label:'编号235412636',
							flag:false
						},
						{	
							label:'客户洞察相关属性',
							flag:false
						},
						{
							label:'客户洞察相关属性',
							flag:false
						}
					]
				},
				{
					list:[
						{
							label:'Axxx',
							flag:true,
							src:require('../../../asset/image/avastar.jpg')
						},
						{
							label:'编号235412636',
							flag:false
						},
						{	
							label:'客户洞察相关属性',
							flag:false
						},
						{
							label:'客户洞察相关属性',
							flag:false
						}
					]
				}
			],
			textValue:'',
			columns:[
				{
					title:'姓名',
					key:'name',
					render:(h,params)=>{
						let vm = this
						let inx = params.index
						return h('div',[
							h('div',{
								'class':{
									'hidden':(vm.data[inx].isEdit)
								},
								style:{
									'height':'40px'	
								},
								on:{
									click:function(){	
										
										vm.data[inx].isEdit = true
									}
								}
							},[
								h('span',params.row.name),
							]),

							h('div',{
								'class':{
									'hidden':!(vm.data[inx].isEdit)
								}
							},[
								h('t-input',{
									props:{
										placeholder:'请输入编辑内容',
										value:params.row.name

									},
									style:{
										width:'145px',
										display:'inline-block',
										'margin-right':'15px'
									},
									on:{
										input:function(value){
											params.row.name = value
											
										}
									}
								}),
								h('t-icon',{
									props:{
										type:'check',
										gradient:'primary',
										size:20
									},
									style:{
										'cursor':'pointer'	
									},
									nativeOn:{
										click:function(){
											vm.$set(vm.data,inx,params.row)
											vm.data[inx].isEdit = false
											console.log(vm.data[inx])
										}
									}
								})
							])
						])
					}
				},
				{
					title:'年龄',
					key:'age',
					render:(h,params)=>{
						let vm = this
						let inx = params.index
						return h('div',[
							h('div',{
								'class':{
									'hidden':(vm.data[inx].isAge)
								},
								style:{
									'height':'40px'	
								},
								on:{
									click:function(){
										vm.data[inx].isAge = true
									}
								}
							},[
								h('span',params.row.age),
							]),

							h('div',{
								'class':{
									'hidden':!(vm.data[inx].isAge)
								}
							},[
								h('t-input',{
									props:{
										placeholder:'请输入编辑内容',
										value:params.row.age
									},
									style:{
										width:'145px',
										display:'inline-block',
										'margin-right':'15px'
									},
									on:{
										input:function(value){
											params.row.age = value
											
										}
									}
								}),
								h('t-icon',{
									props:{
										type:'check',
										gradient:'primary',
										size:20
									},
									style:{
										'cursor':'pointer'	
									},
									nativeOn:{
										click:function(){
											vm.$set(vm.data,inx,params.row)
											vm.data[inx].isAge = false
											console.log(vm.data[inx])
										}
									}
								})
							])
						])
					}
				},
				{
					title:'地址',
					key:'address'
					
				},
				{
					title:'手机',
					key:'tel'
				},
				{
					title:'邮编',
					key:'mailcode'
				}
			],
			data:[
				{
					name:'王小明',
					age:24,
					address:'北京市朝阳区芍药居',
					tel:'+86 13139230841',
					mailcode:'1000',
					isEdit:false,
					isAge:false
					
				},
				{
					name:'张小刚',
					age:53,
					address:'北京市海淀区',
					tel:'+86 13579660238',
					mailcode:'1000',
					isEdit:false,
					isAge:false
					
				},
				{
					name:'李小红',
					age:37,
					address:'上海市浦东新区世纪大道',
					tel:'+86 18623985237',
					mailcode:'1000',
					isEdit:false,
					isAge:false
					
				},
				{
					name:'周小伟',
					age:21,
					address:'深圳市浦东新区世纪大道',
					tel:'+86 15873243996',
					mailcode:'1000',
					isEdit:false,
					isAge:false
				}
			],
			cityList:[
				{
					value:'1',
					label:'北京市'
				},
				{
					value:'2',
					label:'上海市'
				},
				{
					value:'3',
					label:'杭州市'
				},
				{
					value:'4',
					label:'南京市'
				},
				{
					value:'5',
					label:'重庆市'
				}
			],
			cityList1:[
				{
					value:'1',
					label:'北京市'
				},
				{
					value:'2',
					label:'上海市'
				},
				{
					value:'3',
					label:'杭州市'
				},
				{
					value:'4',
					label:'南京市'
				},
				{
					value:'5',
					label:'重庆市'
				}
			],
			cityList2:[
				{
					value:'1',
					label:'北京市'
				},
				{
					value:'2',
					label:'上海市'
				},
				{
					value:'3',
					label:'杭州市'
				},
				{
					value:'4',
					label:'南京市'
				},
				{
					value:'5',
					label:'重庆市'
				}
			]
		}
	},
	methods:{
		tabShow(){
			this.showSearch = !this.showSearch
		},
		clear(){
			this.value = ''
			this.selectCity = ''
			this.selectCity1 = ''
			this.selectCity2 = ''
		}
	},
	mounted(){

	},
	computed:{
		numLength(){
			if(this.textValue.length >= 3 && this.textValue.length <= 10){
				this.numText='请至少输入3个字符'
				return false
			}else{
				if(this.textValue.length > 10){
					this.numText='请控制10个以内'
				}else{
					this.numText='请至少输入3个字符'
				}
				return true
			}
		}
	}
}	
</script>
<style lang="less" scoped>
.query-result{
	// width:80%;
	margin-top:20px;
	padding:0 10px 20px;
	background:#f4f8f9;
	.query-tit{
		margin:0;
		padding:18px 0;
		line-height:20px;
		color:#009241;
		font-size:16px;
	}
	.query-list{
		list-style: none;
		margin:0;
		padding:0;
		li{
			background:#fff;
			border-radius:8px;
			padding:10px 15px;
			margin-bottom:12px;
			*zoom:1;
			&:after{
				content:" ";
				height:0;
				clear:both;
				display:block;
			}
			p{
				margin:0;
				width:25%;
				float:left;
				line-height:40px;
				color:#333;
				.avatar{	
					margin-right:10px;
				}
				&:last-child{
					text-align:center;
				}
			}
		}
	}
}
.edit-table{
	width:95%;
	margin:0 auto;
	padding-bottom:60px;
	p{
		margin:0;
	}
	.table-edit{
		max-width:100%;
		.table-tbody{
			tr{
				td{

					height:auto;
					line-height:40px;
					cursor:pointer;
				}
			}
		}
	}
	.text{
		padding:30px 0 10px;
	}
	.textarea{
		.area{
			width:500px;
			textarea{
				min-height:100px;
			}
		}
		.area-txt{
			width:500px;
			*zoom:1
			span{
				line-height:22px;
				color:#deddd9;
				font-size:12px;
			}
			.fl{
				float:left;
			}
			.fr{
				float:right
			}
			&:after{
				content:" ";
				height:0;
				clear:both;
				display:block;
			}
		}
		.area-btn{
			padding-top:10px;
			.btn{
				border:1px solid #009241;
			}
			.btn:disabled{
				border:1px solid #D9D9D9;
			}
		}
	}
	.hidden{
		display:none;
	}
}
.tab-search{
	.search{
		line-height:28px;
		*zoom:1;
		&:after{
			content:" ";
			height:0;
			clear:both;
			display:block;
		}
		.search-input{
			width:200px;
			float:left;
			cursor:pointer;
		}
		.text{
			margin-left:10px;
			padding:0;
			font-size:12px;
			color:#2db7f5;
			float:left;
			cursor:pointer;
		}
	}
	.search-panel{
		padding:25px 0;
		background:#fbfbfb;
		border:1px solid #d9d9d9;
		border-radius:8px;
		.search-row{
			padding-bottom:20px;
			*zoom:1;
			.label{
				margin:0;
				padding-right:3%;
				width:30%;
				float:left;
				line-height:28px;
				text-align:right;
			}
			.content{
				width:70%;
				float:left;
				.search-input{
					width:70%;
				}
			}
			&:after{
				content:" ";
				height:0;
				clear:both;
				disolay:block;
			}
		}
		.button-group{
			padding-right:20px;
			*zoom:1;
			&:after{
				content:" ";
				height:0;
				clear:both;
				display:block;
			}
			.btn{
				margin-left:10px;
				float:right;
			}
			.search-text{
				margin-left:10px;
				float:right;
				line-height:28px;
				font-size:12px;
				color:#2db7f5;
				cursor:pointer;
			}
		}
	}
}
</style>