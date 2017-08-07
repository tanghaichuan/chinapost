<template>
	<div class="test">
		<h1>按钮类</h1>
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
	    <br><br>
	     <t-dropdown trigger="click">
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
	    <br><br>
		<t-breadcrumb>
	        <t-breadcrumb-item href="/">Home</t-breadcrumb-item>
	        <t-breadcrumb-item href="/components">Components</t-breadcrumb-item>
	        <t-breadcrumb-item>Breadcrumb</t-breadcrumb-item>
	    </t-breadcrumb>
	    <br><br>
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
		<t-back-top></t-back-top>
		<t-back-top :height="100" :bottom="200" :duration="300">
        	<span class="top">
        		<t-icon type="account-box-outline" size="36"></t-icon>
        	</span>
    	</t-back-top>
    	<br><br>

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
		<t-pager :total="100"></t-pager>
		<t-pager :total="100" :show-elevator="true"></t-pager>
		<br><br>
		<t-steps :current="1" size="sm">
	      <t-step title="提交完成" desc="This is a description" class="wrong"></t-step>

	      <t-step title="正在处理" desc="This is a description" icon="window-close"></t-step>

	      <t-step title="审核通过" desc="This is a description"></t-step>
	    </t-steps>
	    <br><br>
	    <t-tabs>
	        <t-tab-panel label="标签一" name="tab-1" icon="window-close">标签一内容</t-tab-panel>
	        <t-tab-panel label="标签二" name="tab-2">标签二内容</t-tab-panel>
	        <t-tab-panel label="标签三" name="tab-3">标签三内容</t-tab-panel>
	    </t-tabs>
	    <br><br>
	    <t-checkbox >Checkbox</t-checkbox>
	    <t-checkbox disabled>Checkbox</t-checkbox>
	    <br><br>
	    <div style="margin-bottom: 15px">
	    	<h6>日期选择</h6>
	    	<t-date-picker v-model="singleDateVal" v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
	  </div>
	  <br><br>
	  <t-form :model="formTop" :rules="ruleFormLabel" label-position="top">
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
	      <t-form-item label="是否订阅" prop="subscription">
	        <t-switch>
		      <span slot="open">开</span>
		      <span slot="close">关</span>
		    </t-switch>
	      </t-form-item>
	      <t-form-item label="选择器" >
			<t-radio-group v-model="formTop.radio">
		      <t-radio label="radio1"></t-radio>
		      <t-radio label="radio2"></t-radio>
		    </t-radio-group>
	      </t-form-item>
	    </t-form>
	    <br><br>
	    <t-slider v-model="value1"></t-slider>
	    <t-slider v-model="value2" range></t-slider>
	    <t-slider v-model="value3" range disabled></t-slider>
	    <t-slider v-model="value8" :step="10" show-stops data-unit="Number"></t-slider>
	    <br><br>
	    <t-badge count="10" state='success' class="badge-circle">
	    </t-badge>
	    <br><br>
	    <t-table border :columns="customColumns" :data="data">
  	</t-table>
	<br><br>
	</div>
</template>
<script>
export default {
	name: 'test',
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
		        customColumns: [
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
		          },
		          {
		            title: '操作',
		            key: 'action',
		            width: 120,
		            align: 'center',
		            render: (h, params) => {
		              if (params.row.age > 18) {
		                return h('div', [
		                  h('a', {
		                    props: {
		                      type: 'danger',
		                      size: 'sm'
		                    },
		                    style: {
		                    	cursor: 'pointer',
		                      	color: '#108EEA'
		                    }
		                  }, '删除')
		                ])
		              } else {
		                return h('div', [
		                  h('a', {
		                    props: {
		                      type: 'primary',
		                      size: 'sm'
		                    },
		                    style: {
		                    	cursor: 'pointer',
		                      	color: '#108EEA'
		                    },
		                    show: params.row.age > 18
		                  }, '查看'),
		                  h('a', {
		                    props: {
		                      	type: 'danger',
		                      	size: 'sm'
		                    },
		                    style: {
		                    	cursor: 'pointer',
		                      	marginLeft: '5px',	
		                      	color: '#108EEA'
		                    }
		                  }, '删除')
		                ])
		              }
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
		        }
		      ]
            }
	}
}
</script>
<style scoped lang="scss">
	.test{
		height: 2500px;;
		margin-top: 100px;
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