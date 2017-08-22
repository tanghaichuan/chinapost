<template>
<div class="frozen-table">
	<!-- 固定表格 -->
	<p class="text">固定表格</p>
	<div class="table-frozen">
		<t-table border :columns="fixedColumns" :data="data"></t-table>	
	</div>
	<p class="text">加载表格</p>
	<div class="table-frozen">
		 <t-table border loading :columns="columns" :data="emptyData">
		</t-table>
	</div>	
	<p class="text">关联删除</p>
	<div class="table-frozen">
		<t-button @click="deleteParams">删除</t-button>
		<t-table border :columns="MultiSelectcolumns" :data="data1" @on-selection-change="selecAll">
		</t-table>
	</div>
	<p class="text">表单组合</p>
	<div>
	    <t-form ref="formValidate" :model="formValidate" label-position="right" :label-span="2" :rules="ruleValidate">
	        <t-form-item label="Switch开关">
		        <t-switch size="lg">
			      <span slot="open">开</span>
			      <span slot="close">关</span>
			    </t-switch>
	      	</t-form-item>
	        <t-form-item label="Slider滑动条">
				<t-slider :step="25" show-stops></t-slider>
			</t-form-item>
	        <t-form-item label="Select选择器" prop="select">
				 <t-select v-model="formValidate.select" size="sm" style="width:200px">
			      <t-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</t-option>
			    </t-select>
			</t-form-item> 
			<t-form-item label="DatePicker 日期选择器" prop="date">
				<t-date-picker style="width:250px" v-model="formValidate.date" type="dateRange" :size="lg" v-on:date-change="onChange" placeholder="范围选择"></t-date-picker>
			</t-form-item>
			<t-form-item label=" ">
		        <t-button type="primary" @click="handleSubmit('formValidate')">提交</t-button>
		        <t-button @click="handleReset('formValidate')" class="ml-2">重置</t-button>
	      </t-form-item>
	    </t-form>
	</div>
</div>	
</template>
<script>
export default{
	data(){
		return{
			fixedColumns: [
			    {
			      title: '姓名',
			      key: 'name',
			      width: 100,
			      fixed: 'left'
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
			      width: 150,
			      render: (h, params) => {
			        return h('div', [
			          h('t-button', {
			            props: {
			              type: 'primary',
			              size: 'sm'
			            },
			            style: {
			              marginRight: '5px'
			            },
			            on: {
			              click: () => {
			                this.show(params.index)
			              }
			            }
			          }, '查看'),
			          h('t-button', {
			            props: {
			              type: 'danger',
			              size: 'sm'
			            },
			            on: {
			              click: () => {
			                this.remove(params.index)
			              }
			            }
			          }, '删除')
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
			data1: [
			    {
			      name: '王小明',
			      age: 18,
			      address: '北京市朝阳区芍药居',
			      id: 0
			    },
			    {
			      name: '张小刚',
			      age: 25,
			      address: '北京市海淀区西二旗',
			      id: 1
			    },
			    {
			      name: '李小红',
			      age: 30,
			      address: '上海市浦东新区世纪大道',
			      id: 2
			    },
			    {
			      name: '周小伟',
			      age: 26,
			      address: '深圳市南山区深南大道',
			      id: 3
			    }
			],
			columns: [
				{
					title: '姓名',
					key: 'name'
				},
				{
					title: '年龄',
					key: 'age'
				},
				{
					title: '地址',
					key: 'address'
				}
			],
			emptyData: [],
			selecData: [],
			MultiSelectcolumns: [
		        {
		          type: 'selection',
		          width: 60,
		          align: 'center'
		        },
		        {
		          title: '姓名',
		          key: 'name'
		        },
		        {
		          title: '年龄',
		          key: 'age'
		        },
		        {
		          title: '地址',
		          key: 'address'
		        }
		    ],
			cityList: [
                {
                    value: 'beijing',
                    label: '北京市'
                },
                {
                    value: 'shanghai',
                    label: '上海市'
                },
                {
                    value: 'shenzhen',
                    label: '深圳市'
                },
                {
                    value: 'hangzhou',
                    label: '杭州市'
                },
                {
                    value: 'nanjing',
                    label: '南京市'
                },
                {
                    value: 'chongqing',
                    label: '重庆市'
                }
            ],
          	formValidate: {
                select: '',
                date: ''
            },
		    ruleValidate: {
                select: [
                    { required: true, message: '请选择', trigger: 'blur' }
                ],
                date: [
                    {required: true, type: 'array', message: '请选择日期时间', trigger: 'change'}
                ],
            }
		}
	},
	methods: {
		show (index) {
		  this.$Modal.info({
		    title: '用户信息',
		    content: `姓名：${this.data[index].name}<br>年龄：${this.data[index].age}<br>地址：${this.data[index].address}`
		  })
		},
		onChange (value) {
      		console.log('date change:' + value)
	    },
		selecAll(value) {
			this.selecData = value
		},
		handleSubmit(name) {
	        this.$refs[name].validate((valid) => {
	            if (valid) {
	                this.$Message.success('提交成功!');
	            } else {
	                this.$Message.danger('表单验证失败!');
	            }
	        })
        },
  		handleReset (name) {
            this.$refs[name].resetFields();
        },
        deleteParams() {
			for(let i=0;i<this.selecData.length;i++){
				for(let j=0;j<this.data1.length;j++){
					if(this.selecData[i].id == this.data1[j].id){
						this.data1.splice(j,1);
					}
				}
			}
		}
	}
}	
</script>
<style lang="less" scoped>
.frozen-table{
	width:60%;
	margin:0 auto;
	padding-bottom: 50px;
	.table-frozen{
		width:100%;
		.table-tbody{
			tr{
				td{
					height:48px;
				}
			}
		}
	}
	.text{
		padding:30px 0 0;
	}
	.btn {
		margin-bottom: 10px;
	}
}

</style>