<template>
	<div class="test">
		<h5>按钮类</h5>
		<t-button type="primary" class="actives" :disabled="true">disabled</t-button>
	    <t-button type="primary">主按钮</t-button>
	    <br><br>
	    <t-button type="outline" class="sub-btn" :disabled="true">次按钮</t-button>
		<t-button type="outline" class="sub-btn">次按钮</t-button>
	    <br><br>
		<t-button type="outline" icon="content-save" class="sub-btn" :disabled="true">次按钮</t-button>
		<t-button type="outline" icon="content-save" class="sub-btn">次按钮</t-button>
	    <br><br>
	    <t-button type="outline-primary" class="nature-btn">中性按钮</t-button>
	    <t-button type="outline-primary" class="dashed-btn">虚框按钮</t-button>
	    <t-button type="outline-primary" class="dashed-btn" disabled>虚框按钮</t-button>
	    <br><br>
	    <t-button type="outline-info">幽灵按钮</t-button>
	    <t-button type="outline-success">幽灵按钮</t-button>
	    <br><br>
	    <t-button type="primary" size="sm">小按钮</t-button>
	    <t-button type="primary">普通按钮</t-button>
		<t-button type="primary" size="lg">大按钮</t-button>
	    <br><br>
		<t-button-group>
			<t-button type="outline" class="sub-btn">次按钮</t-button>
			<t-button type="outline" class="sub-btn">次按钮</t-button>
		</t-button-group>
		<t-button-group>
	      <t-button icon="chevron-left">前进</t-button>
	      <t-button>后退
	        <t-icon type="chevron-right"></t-icon>
	      </t-button>
	    </t-button-group>
	    <t-button-group>
	      <t-button icon="chevron-left">前进</t-button>
	      <t-button>
	        <t-icon type="chevron-right"></t-icon>
	      </t-button>
	    </t-button-group>
	    <br><br>
	    <h5>下拉菜单</h5>
	    <t-dropdown trigger="click" style="width:100px !important">
		    <t-button type="outline-primary">
		        下拉菜单
		        <t-icon type="chevron-down"></t-icon>
		    </t-button>
		    <t-dropdown-menu slot="list">
		      <t-dropdown-item>选项一</t-dropdown-item>
		      <t-dropdown-item>选项二</t-dropdown-item>
		      <t-dropdown-item>选项三</t-dropdown-item>
		    </t-dropdown-menu>
		</t-dropdown>
    	<t-dropdown trigger="click" style="margin-left: 20px">
		    <a href="javascript:void(0)">
		      更多操作
		      <t-icon type="arrow-down-drop"></t-icon>
		    </a>
		    <t-dropdown-menu slot="list">
		      <t-dropdown-item>全部</t-dropdown-item>
				<t-dropdown placement="right-start">
					<t-dropdown-item>
						选择一
						<t-icon type="chevron-right"></t-icon>
					</t-dropdown-item>
					<t-dropdown-menu slot="list">
			            <t-dropdown-item>选择一</t-dropdown-item>
			            <t-dropdown-item>选择二</t-dropdown-item>
			        </t-dropdown-menu>
				</t-dropdown>
		      <t-dropdown-item>选择二</t-dropdown-item>
		      <t-dropdown-item>选择三</t-dropdown-item>
		      <t-dropdown-item>选择四</t-dropdown-item>
		    </t-dropdown-menu>
		</t-dropdown>
	    <br><br>
	    <h5>导航</h5>
		<t-breadcrumb>
	        <t-breadcrumb-item href="/">Home</t-breadcrumb-item>
	        <t-breadcrumb-item href="/components">Components</t-breadcrumb-item>
	        <t-breadcrumb-item>Breadcrumb</t-breadcrumb-item>
	    </t-breadcrumb>
	    <t-breadcrumb>
		    <t-breadcrumb-item href="/">
		      <t-icon type="home-outline"></t-icon> Home
		    </t-breadcrumb-item>
		    <t-breadcrumb-item href="/components/breadcrumb">
		      <t-icon type="buffer"></t-icon> Components
		    </t-breadcrumb-item>
		    <t-breadcrumb-item>
		      <t-icon type="pound"></t-icon> Breadcrumb
		    </t-breadcrumb-item>
		  </t-breadcrumb>
		<br><br>
		<h5>分页</h5>
		<t-pager :total="100"></t-pager>
		<t-pager :total="100" :show-elevator="true"></t-pager>
		<br><br>
		<h5>步骤条</h5>
		<t-steps :current="1">
	      <t-step title="提交完成" desc="This is a description"></t-step>
	      <t-step title="正在处理" desc="This is a description"></t-step>
	      <t-step title="审核通过" desc="This is a description"></t-step>
	    </t-steps>		
	    <t-steps :current="1">
	      <t-step title="提交完成" desc="This is a description" class="wrong"></t-step>
	      <t-step title="正在处理" desc="This is a description" icon="window-close"></t-step>
	      <t-step title="审核通过" desc="This is a description"></t-step>
	    </t-steps>
	    <t-steps :current="1" direction="vertical">
			<t-step title="提交完成"></t-step>
			<t-step title="正在处理"></t-step>
			<t-step title="审核通过"></t-step>
	    </t-steps>
	    <br><br>
	    <h5>tabs选项卡</h5>
	    <t-tabs :threshold="3">
	        <t-tab-panel label="选中文字" name="tab-1">标签一内容</t-tab-panel>
	        <t-tab-panel label="可选文字" name="tab-2">标签二内容</t-tab-panel>
	        <t-tab-panel label="可选文字" name="tab-3">标签三内容</t-tab-panel>
	        <t-tab-panel label="可选文字" name="tab-4">标签四内容</t-tab-panel>
	        <t-tab-panel label="可选文字" name="tab-5">标签五内容</t-tab-panel>
	    </t-tabs>  
	    <br><br>
	    <h5>日期选择</h5>
	    <div style="margin-bottom: 15px">
	    	<t-date-picker  placeholder="please select date"></t-date-picker>
	    </div>
	    <br><br>
	    <h5>表单相关</h5>
	    <t-form :model="formTop"  label-position="top">
	        <t-form-item label="活动名称" prop="input1">
	            <t-input v-model="formTop.input1" placeholder="表单尺寸大 && 标题顶对齐"></t-input>
	        </t-form-item>
	        <t-form-item label="选择器" >
	            <t-select v-model="formTop.select" placeholder="请选择" class="w-100">
	                <t-option value="beijing">北京市</t-option>
	                <t-option value="shanghai">上海市</t-option>
	            	<t-option value="shenzhen">深圳市</t-option>
	            </t-select>
	        </t-form-item>
	        <t-form-item label="选择器">
				<t-dropdown trigger="click" style="width: 200px">
				    <t-input v-model="value" placeholder="请输入..."></t-input>
				    <t-dropdown-menu slot="list">
				      <t-dropdown-item>全部</t-dropdown-item>
						<t-dropdown placement="right-start">
							<t-dropdown-item>
								选择一
								<t-icon type="chevron-right"></t-icon>
							</t-dropdown-item>
							<t-dropdown-menu slot="list">
					            <t-dropdown-item>选择一</t-dropdown-item>
					            <t-dropdown-item>选择二</t-dropdown-item>
					        </t-dropdown-menu>
						</t-dropdown>
				      <t-dropdown-item>选择二</t-dropdown-item>
				      <t-dropdown-item>选择三</t-dropdown-item>
				      <t-dropdown-item>选择四</t-dropdown-item>
				    </t-dropdown-menu>
				</t-dropdown>
	        </t-form-item>
	        <t-form-item label="是否订阅" prop="subscription">
		        <t-switch>
			      <span slot="open">开</span>
			      <span slot="close">关</span>
			    </t-switch>
	      	</t-form-item>
	        <t-form-item label="Radio" >
				<t-radio-group v-model="formTop.radio">
			      <t-radio label="radio1"></t-radio>
			      <t-radio label="radio2"></t-radio>
			    </t-radio-group>
	        </t-form-item>
	        <t-form-item label="Checkbox" >
		        <t-checkbox >Checkbox</t-checkbox>
		        <t-checkbox disabled>Checkbox</t-checkbox>
	        </t-form-item>
	    </t-form>
	    <h5>滑块</h5>	    
	    <t-slider v-model="value1"></t-slider>
	    <t-slider v-model="value2" range></t-slider>
	    <t-slider v-model="value3" range disabled></t-slider>
	    <t-slider v-model="value8" :step="10" show-stops data-unit="Number"></t-slider>
	    <br><br>
	    <h5>标签</h5>
	    <t-badge count="10" state='success' class="badge-circle">
	    </t-badge>
	    <br><br>
	    <h5>上传</h5>
	    <t-upload action="//jsonplaceholder.typicode.com/posts/" style="width: 300px;">
        <t-button type="outline-secondary" icon="aid aid-upload" size="sm">
            上传文件
        </t-button>
        <div class="text-sm mt-2 text-gray" slot="tip">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
        </t-upload>
	    <br><br>
        <h5>基础警告提示</h5>
        <t-alert type="success" show-icon closable>success提示信息</t-alert>
        <t-alert type="danger" show-icon closable>danger提示信息</t-alert>
		<t-alert type="warning" show-icon closable>warning提示信息</t-alert>
        <t-alert type="info" show-icon closable>info提示信息</t-alert>
        <h5>自定义关闭提示</h5>
        <t-alert type="success" show-icon closable>success提示信息<span class="text-primary" slot="close">不再提示</span></t-alert>
        <t-alert type="danger" show-icon closable>danger提示信息<span class="text-primary" slot="close">不再提示</span></t-alert>
		<t-alert type="warning" show-icon closable>warning提示信息<span class="text-primary" slot="close">不再提示</span></t-alert>
        <t-alert type="info" show-icon closable>info提示信息<span class="text-primary" slot="close">不再提示</span></t-alert>	    
        <br><br>
	    <h5>表格</h5>
	    
	<br><br>
	<t-table :columns="columns" :data="expandData">
  	</t-table>
	<t-back-top></t-back-top>
		<t-back-top :height="100" :bottom="200" :duration="300">
        	<span class="top">
        		<t-icon type="account-box-outline" :size="36"></t-icon>
        	</span>
    	</t-back-top>
		<br><br>
	</div>
</template>
<script>
import tableTest from './table1.vue'
export default {
	name: 'test',
	components:{
		tableTest
	},
	data() {
		return {
                formTop: {
                    input1: '',
                    input2: '',
                    input3: '',
                    subscription: true,
                    select: '',
                    radio: "radio1"
                },
                value1: 25,
		        value2: [20, 50],
		        value3: [20, 50],
		        value8: 30,
		       	columns: [
		       	{
		            type: 'expand',
		            width: 50,
		            render: (h, params) => {
		              return h(tableTest, {
		                props: {
		                  row: params.row
		                }
		              })
		            }
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
		      expandData: [
	          {
	            name: '王小明',
	            age: 18,
	            address: '北京市朝阳区芍药居',
	            job: '数据工程师',
	            interest: '羽毛球',
	            birthday: '1991-05-14',
	            book: '乔布斯传',
	            movie: '致命魔术',
	            music: 'I Cry',
	            _isExpanded: true
	          },
	          {
	            name: '张小刚',
	            age: 25,
	            address: '北京市海淀区西二旗',
	            job: '数据科学家',
	            interest: '排球',
	            birthday: '1989-03-18',
	            book: '我的奋斗',
	            movie: '罗马假日',
	            music: 'My Heart Will Go On',
	            _disableExpand: true
	          },
	          {
	            name: '李小红',
	            age: 30,
	            address: '上海市浦东新区世纪大道',
	            job: '数据产品经理',
	            interest: '网球',
	            birthday: '1992-01-31',
	            book: '赢',
	            movie: '乔布斯',
	            music: 'Don’t Cry'
	          },
	          {
	            name: '周小伟',
	            age: 26,
	            address: '深圳市南山区深南大道',
	            job: '数据分析师',
	            interest: '桌球，跑步',
	            birthday: '1988-7-25',
	            book: '红楼梦',
	            movie: '倩女幽魂',
	            music: '演员'
	          }
	        ]
            }
	},
	mounted(){
		//console.log(this.expandData)
		
	}
}
</script>
<style scoped lang="scss">
	h5{margin-bottom: 10px;}
	.test{
		height: 2500px;;
		margin-top: 50px;
		padding: 0 50px;
		background-color:transparent;
	}
	.floatr{
		.aid-chevron-down{
			float: right;
		}
	}
	.test-btn{
		width: 100px;
	}
	.test-btn:hover{
		background-color: red;
	}
	.test-btn:active{
		background-color:#000;
	}
</style>