<template>
<div class="comment">
	<!-- 省份下拉 -->
	<p class="text-tit tit1">下拉和日期</p>
	<div class="comment-con row">
		<div class="comment-form col-4">
			<label class="label">省份：</label>
			<div class="select">
			<t-select v-model="selectCity">
				<t-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{item.label}}</t-option>
			</t-select>
			</div>
		</div>
		<div class="comment-form col-4">
			<label class="label">省份：</label>
			<div class="select">
			<t-select v-model="selectCity1">
				<t-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{item.label}}</t-option>
			</t-select>
			</div>
		</div>
		<div class="comment-form col-4">
			<label class="label">省份：</label>
			<div class="select">
			<t-select v-model="selectCity1">
				<t-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{item.label}}</t-option>
			</t-select>
			</div>
		</div>
	</div>
	<!-- 时间选择 -->
	<div class="comment-con con1 row">
		<div class="comment-form col-4">
			<label class="label">日期：</label>
			<div class="date">
				<t-date-picker type="date" v-model="formatDateValue" format="YYYY/MM/DD" @date-change="onChange" ></t-date-picker>
			</div>
		</div>
		<div class="comment-form col-4">
			<label class="label">年月：</label>
			<div class="date">
			 <t-date-picker type="month" v-model="formatMonthValue" format="YYYY/MM" v-on:date-change="onChange" placeholder="please select date"></t-date-picker></div>
		</div>
		<div class="comment-form col-4">
			<label class="label">输入：</label>
			<div class="date">
				<t-input v-model="value" placeholder="请输入11..."></t-input>
			</div>
		</div>
	</div>
	<!-- 新增和删除 -->
	<p class="text-tit">新增和删除</p>
	<div class="add-user">
		<div class="add-div">
			<!-- 这个下面要不断的添加 -->
			<div class="add" v-for="(item,index) in newList" :key="index">
				<div class="opt">
					<t-select v-model="item.select">
						<t-option v-for="(items,index) in item.list" :value="items.value" :key="index">{{items.label}}</t-option>
					</t-select>
				</div>
				<div class="opt">
					<t-date-picker type="date" v-model="item.date" format="YYYY/MM/DD" ></t-date-picker>
				</div>
				<div class="opt">
					<t-input v-model="item.value" placeholder="请输入..."></t-input>
				</div>
				<div class="opt">
					<t-button type="outline-primary" size="sm" @click="del(index)" class="out-btn">删除一个</t-button>
				</div>
			</div>
		</div>
		<t-button type="primary" size="sm" @click="add">增加一个</t-button>
	</div>
	<!-- 表格 -->
	<p class="text-tit">表格</p>
	<div class="table-frozen">
		<t-table border :columns="fixedColumns" :data="data"></t-table>
		<div style="float:right;margin-top:10px;">
			<t-pager :total="20" :current="1"></t-pager>	
		</div>
	</div>
	<p class="text-tit">合并表格</p>
	<div class="order-list-table">
		<table>
	        <thead>
	        	<tr v-for="(item,index) in tableHeads" :key="index">
	        		<th v-for ="(items,index) in item.list" :rowspan="items.value" :key="index">{{items.label}}</th>
	        	</tr>
	        </thead>
	        <tbody>
	        	<tr v-for="(item,index) in tableData" :key="index">
	        		<td v-for="(items,index) in item.list" :rowspan="items.value1" :colspan="items.value2" :key="index">
	        			<template v-if="items.flag">
	        				<p v-for="(itm,index) in items.label" :key="index">{{itm.lab}}</p>
	        			</template>
	        			<template v-else>{{items.label}}</template>
	        		</td>
	        	</tr>
	        </tbody>
		</table>
	</div>
</div>	
</template>
<script>
export default{
	data(){
		return{
			selectCity:'1',
			selectCity1:'2',
			selectCity2:'3',
			value:'您好啊',
			formatDateValue:'2017/08/04',
			formatMonthValue:'2017/08',
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
			newList:[
				{
					select:'',
					list:[
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
					],
					date:'',
					value:''
				},
				{
					select:'',
					list:[
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
					],
					date:'',
					value:''
				}
			],
			fixedColumns: [
			    {
			      title: '姓名',
			      key: 'name',
			      width: 100,
			    },
			    {
			      title: '年龄',
			      key: 'age',
			      width: 100
			    },
			    {
			      title: '省份',
			      key: 'province',
			      width: 200
			    },
			    {
			      title: '市区',
			      key: 'city',
			      width: 200
			    },
			    {
			      title: '地址',
			      key: 'address',
			      width: 200
			    },
			    {
			      title: '邮编',
			      key: 'zip',
			      width: 100
			    },
			    {
			      title: '操作',
			      key: 'action',
			      fixed: 'right',
			      width: 80,
			      render: (h, params) => {
			        return h('div', [
			          h('div',{
						style:{
							'text-align':'center'	
							}
						},[
						h('span', {
				            style: {
				             	'cursor':'pointer',
				             	'color':'rgba(16,142,234,1)',
				             	'font-size':'12px'
				            }
				          }, '更多')
						]),
			        ])
			      }
			    }
			],
			data: [
			    {
			      name: '王小明',
			      age: 18,
			      address: '北京市朝阳区芍药居'
			    },
			    {
			      name: '张小刚',
			      age: 25,
			      address: '北京市海淀区西二旗'
			    },
			    {
			      name: '李小红',
			      age: 30,
			      address: '上海市浦东新区世纪大道'
			    },
			    {
			      name: '周小伟',
			      age: 26,
			      address: '深圳市南山区深南大道'
			    }
			],
			tableHeads: [
	        {
	        	list:[
	        		{
	        			label:'资费',
	        			value:0
	        		},
	        		{
	        			label:'套餐内语音',
	        			value:2
	        		},
	        		{
	        			label:'赠送业务',
	        			value:2
	        		},
	        		{
	        			label:'套餐外资费',
	        			value:2
	        		}
	        	]
	        },
	        {
	        	list:[
	        		{
	        			label:'月费',
	        			value:0
	        		}
	        	]
	        }
	    ],
    	tableData:[
    	  {
    	  	list:[
    	  		{
    	  			label:'2',
    	  			value1:0,
    	  			value2:0
    	  		},
    	  		{
    	  			label:'0',
    	  			value1:2,
    	  			value2:0
    	  		},
    	  		{
    	  			label:'国内语音0.14元',
    	  			value1:0,
    	  			value2:0
    	  		},
    	  		{
    	  			label:'无',
    	  			value1:2,
    	  			value2:0
    	  		}
    	  	]
    	  },
    	  {
    	  	list:[
    	  		{
    	  			label:'5',
    	  			value1:0,
    	  			value2:0
    	  		},
    	  		{
    	  			label:'国外语音0.16元',
    	  			value1:0,
    	  			value2:0
    	  		}
    	  	]
    	  },
    	  {
    	  	list:[
    	  		{
    	  			label:'产品规则',
    	  			value1:0,
    	  			value2:0
    	  		},
    	  		{
    	  			flag:true,
    	  			label:[
    	  				{
    	  					lab:'1.我不知道'
    	  				},
    	  				{
    	  					lab:'2.我不知道'
    	  				},
    	  				{
    	  					lab:'3.我不知道'
    	  				}
    	  			],
    	  			value1:0,
    	  			value2:3
    	  		}
    	  	]
    	  }
    	]
		}
	},
	methods:{
		onChange(value){
			console.log('data is:'+value)
			console.log(this.formatDateValue)
		},
		add(){
			let obj={
				select:'',
				list:[
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
				],
				date:'',
				value:''
			}
			if(this.newList.length<3){
				this.newList.push(obj)
			}else{
				alert('已达到上限！')
			}
		},
		del(index){
			if(this.newList.length>1){
				this.newList.splice(index,1)
			}else{
				alert('不能再继续删除！')
			}
		}
	}
}	
</script>
<style lang="less" scoped>
*{
	margin:0;
	padding:0;
}
.comment{
	.comment-con{
		margin-bottom:20px;
		.comment-form{
			height:40px;
			*zoom:1;
			&:after{
				content:" ";
				height:0;
				clear:both;
				display:block;
			}
			.label{
				line-height:28px;
				padding-right:4%;
				float:left;
				margin:0;

			}
			.select{
				width:60%;
				float:left;
				.dropdown{
					width:100%;
				}
			}
			.date{
				.date-picker{
					width:100%;
				}
				width:60%;
				float:left;
			}
		}
		&.con1{
			margin-bottom:0;
		}
	}
	.add-user{
		margin-top:10px;
		.add-div{
			width:70%;
			margin-bottom:10px;
			padding:15px 10px 5px;
			border:1px solid #ddd;
			border-radius:4px;
			.add{
				margin-bottom:10px;
				*zoom:1;
				&:after{
					content:" ";
					height:0;
					clear:both;
					display:block;
				}
				.opt{
					margin-right:10px;
					float:left;
					.out-btn{
						margin-top:3px;
					}
				}
			}
		}
	}
	.table-frozen{
		*zoom:1;
		width:80%;
		.table-fixed__header{
			thead{
				tr{
					th{
						text-align:center;
					}
				}
			}
		}
		.table-tbody{
			tr{
				td{
					line-height:40px;
					.btn {
						margin-bottom: 0;
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
	.text-tit{
		padding:20px 0 10px;
		line-height:22px;
		font-size:16px;
		&.tit1{
			padding:0 0 10px;
		}
	}
	.order-list-table{
		width:80%;
		table{
			border-collapse: collapse;
			width: 100%;
	  		background: #fff;
	  		td{
				border: 1px solid #e3e3e3;
				text-align: center;
				padding: 5px 0;
				color: rgba(0,0,0,1);
			}
			th{
				line-height:25px;
				text-align: center;
				background: rgba(247,247,247,1);
	  			color: rgba(0,0,0,1);
	  			border: 1px solid #ddd;
	  			cursor: pointer;
			}
			th.active{
				background: #35495e;
			}
		}
	}
}	
</style>