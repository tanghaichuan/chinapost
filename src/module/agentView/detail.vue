<template>
<div class="agent">
	<!-- 面包屑导航 -->
	<t-breadcrumb class="breadcrumb">
		<t-breadcrumb-item href="">首页</t-breadcrumb-item>
		<t-breadcrumb-item href="">悬停</t-breadcrumb-item>
		<t-breadcrumb-item>三级</t-breadcrumb-item>
		<t-breadcrumb-item>四级</t-breadcrumb-item>
		<t-breadcrumb-item>当前页</t-breadcrumb-item>
	</t-breadcrumb>
	<!-- 创建客户/客户选择 tab -->
	<div class="customers clearfix">
		<div class="new-customer float-left">
			<button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center" @click="showModal">
				<i class="iconfont" style="font-size: 30px; color: #00A854">&#xe632;</i>查询新客户
			</button>
		</div>
		<div class="carousel">
			<div class="institutional-clients float-left"> <button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center">
						<i class="iconfont close">&#xe790;</i>
						<i class="iconfont c-icon">&#xe7ab;</i>机构客户
				</button>
			</div>
			<div class="institutional-clients float-left">
				<button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center">
						<i class="iconfont c-icon person">&#xe7ac;</i>个人客户
				</button>
			</div>
			<div class="institutional-clients float-left">
				<button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center">
					<i class="iconfont c-icon">&#xe7ab;</i>机构客户
				</button>
			</div>
			<t-button type="outline-primary" class="p-left">&lt;</t-button>
			<t-button type="outline-primary" class="p-right">&gt;</t-button>
		</div>
		<div class="customer-share d-flex flex-column">
			<t-button type="outline" class="t-button">
				<i class="iconfont memory" style="font-size: 12px;">&#xe624;</i>跨业务线信息共享
			</t-button>
			<label for="" class="service-line">该客户其他业务线：邮务、证券、速递</label>
		</div>
	</div>
	<!-- 视图指标 -->
	<div class="views-menu" style="margin-top: 10px">
		<div class="xxxx">
			<t-menu mode="horizontal" open-position="right">
				<t-submenu v-for="(topItem, topIndex) in menuList" :name="topIndex" :key="topIndex">
					<template slot="title">
						<i class="aid aid-home"></i>{{topItem.catalogName}}
					</template>
					<t-menu open-position="right">
						<t-submenu v-if="firstItem.subChaSpecCataLog" v-for="(firstItem, first) in topItem.subChaSpecCataLog" :name="`${topIndex}-${first}`" :key="first">
							<template slot="title">
								<div  @click="itemClickHandle(firstItem)">
									{{firstItem.catalogName}}111
								</div>
							</template>
							<t-submenu v-if="secondItem.subChaSpecCataLog" v-for="(secondItem, second) in firstItem.subChaSpecCataLog" :name="`${first}-${second}`" :key="second">
								<template slot="title">
									<div @click="itemClickHandle(secondItem)">
										{{secondItem.catalogName}}222
									</div>
								</template>
								<t-menu-item v-for="(thirdItem, third) in secondItem.subChaSpecCataLog" :key="third" @click.native="itemClickHandle(thirdItem)"> {{thirdItem.catalogName}} </t-menu-item>
							</t-submenu>
							<t-menu-item @click.native="itemClickHandle(secondItem)" v-else :name="`${first}-${second}`">{{secondItem.catalogName}}</t-menu-item>
						</t-submenu>
						<t-menu-item v-else @click.native="itemClickHandle(firstItem)" :name="`${topIndex}-${first}`">{{firstItem.catalogName}}</t-menu-item>
					</t-menu>
				</t-submenu>
			</t-menu>
		</div>
		<!--视图内容-->
		<div class="view-content">
			<div class="tab-title">{{defaultTitle}}</div>
			<div class="cata-list">
				<div class="view-tree-right">
					<div class="form-container">
						<div class="form-item-container">
							<div class="row border">
								<div class="col-4 " v-for="(catas, cataIndex) in cataList">
									<div class="form-group row"> <label class="form-group__label text-right col-5">{{catas.chaSpecVal.displayValue}}:</label>
										<div class="form-group__content col"><span>{{catas.chaSpecVal.value}}</span></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<t-modal v-model="isShowModal" width="476">
		<p slot="header">
			<span>客户查询</span>
		</p>
		<div>
			<div class="query-tab">
				<t-tabs @input="selectTab">
					<t-tab-panel label="个人客户" name="tab-1">
						<div class="content">
							<t-form :model="personal" label-position="left" :label-span="3">
								<t-form-item label="证件类型:">
									<t-select v-model="personal.type" placeholder="请选择">
										<t-option v-for="(item,index) in personal.cardType" :value="item.value" :key="index">
											{{item.label}}
										</t-option>
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
							<t-form :model="construction" label-position="left" :label-span="3">
								<t-form-item label="统一社会信用代码:">
									<t-input v-model="construction.code" placeholder="请输入"></t-input>
								</t-form-item>
								<t-form-item label="客户名称:">
									<t-input v-model="construction.name" placeholder="请输入"></t-input>
								</t-form-item>
								<t-form-item label="客户简称:">
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
								<div @click="showTree">
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
										<t-option v-for="(item,index) in organise.managerPerson" :value="item.value" :key="index">{{item.label}}</t-option>
									</t-select>
								</t-form-item>
							</t-form>
						</div>
					</t-tab-panel>
				</t-tabs>
			</div>
		</div>
		<div slot="footer">
			<t-button type="outline" class="sub-btn" @click="cancel">取消</t-button>
			<t-button type="primary" @click="queryDataList">查询</t-button>
		</div>
	</t-modal>
</div>
</template>
<script>
export default {
	data() {
		return {
			customerId: this.$route.params.customerId,
			menuList: [],
			cataList: [],
			defaultTitle: '基础视图',
			defaultCata: 1,
			tabValue: 0,
			isShowModal: false,
			personal: {
				type: '',
				personNum: '',
				personName: '',
				cardType: [
					{
						value: 'IDCard',
						label: '身份证'
					},
					{
						value: 'passport',
						label: '护照'
					},
					{
						value: 'USCI',
						label: '军官证'
					}
				]
			},
			construction: {
				code: '',
				name: '',
				simpleName: ''
			},
			business: {
				ticket: ''
			},
			organise: {
				organiseName: '',
				organiseCode: '',
				organiseManager: '',
				managerPerson: [
					{
						value: '208789',
						label: '经理'
					}
				]
			},
			treeData: [
				{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1',
							value: [
								{
									code: '10002020',
									name: '市场组'
                },
								{
									code: '10002021',
									name: '调研组'
                }
              ]
            }]
          }]
        },
				{
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1',
							value: [
								{
									code: '10002022',
									name: '开发组'
                },
								{
									code: '10002023',
									name: '测试组'
                }
              ]
            }]
          }, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1',
							value: [
								{
									code: '10002024',
									name: '无领导小组'
                },
								{
									code: '10002025',
									name: '评估风险组'
                }
              ]
            }]
          }]
        }
      ],
			defaultProps: {
				children: 'children',
				label: 'label'
			},
		}
	},
	methods: {
		selectTab(value) {
			this.tabValue = value
		},
		showModal() {
			this.isShowModal = true
		},
		itemClickHandle({
			catalogName,
			chaSpecCatalogId
		}) {
			// 保存用来获取指标的 id 以及展示的 title
			this.defaultCata = chaSpecCatalogId
			this.defaultTitle = catalogName
			// 获取当前菜单的指标
			this.initGetCata(chaSpecCatalogId).then((res) => {
				this.cataList = res.data.businessParams.responseList
			})
		},
		initGetCata(chaSpecCatalogId) {
			// 初始化菜单下指标
			return this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_CATA, {
				"systemParams": {
					"pageInfo": {
						"CURRENT_PAGE": "1",
						"PAGE_SIZE": "10"
					}
				},
				"businessParams": {
					"queryCondition": [
						{
							"condType": "chaSpecCatalogId",
							"condValue": [
										chaSpecCatalogId
								]
							}
						]
				}
			})
		}
	},
	created() {
		// 初始化加载菜单
		let params = {
			"systemParams": {
				"pageInfo": {
					"CURRENT_PAGE": "1",
					"PAGE_SIZE": "10"
				}
			},
			"businessParams": {
				"queryCondition": [{
					"condType": "chaSpecCatalogId",
					"condValue": [
						"0"
					]
				}]
			}
		}
		// 初始化三级菜单
		this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_MENUS, { ...params
		}).then(({
			data
		}) => {
			// 获取菜单数组
			this.menuList = data.businessParams.responseList
			console.log(this.menuList)
			// 获取第一级菜单第一个末级 id
			let firstViewChild = this.menuList[0].subChaSpecCataLog[0]
			let initCataId;
			if (firstViewChild.subChaSpecCataLog) {
				firstViewChild.subChaSpecCataLog[0].subChaSpecCataLog[0] ? initCataId = firstViewChild.subChaSpecCataLog[0].subChaSpecCataLog[0].chaSpecCatalogId : initCataId = firstViewChild.subChaSpecCataLog[0].chaSpecCatalogId
			} else {
				initCataId = firstViewChild.chaSpecCatalogId
			}
			// 初始化第一次加载的指标项
			this.$Loading.start();
			this.initGetCata(initCataId).then(({
				data
			}) => {
				this.$Loading.finish();
				this.cataList = data.businessParams.responseList
			})
		})
	},
	components: {}
}
</script>
<style lang="less" scoped>
.tab-content {
    padding: 20px;
}
</style>
