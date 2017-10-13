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
				<div class="institutional-clients float-left">
					<button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center">
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
				<t-button type="outline-primary" class="p-left">
					<</t-button>
						<t-button type="outline-primary" class="p-right"> ></t-button>
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
				<t-menu  mode="horizontal" open-position="right">
					<t-submenu
						v-for="(topItem, topIndex) in menuList"  :name="topIndex" :key="topIndex">
						<template slot="title">
							<i class="aid aid-home"></i>{{topItem.catalogName}}
						</template>
						<t-menu open-position="right">
							<t-submenu
								v-if="firstItem.subChaSpecCataLog"
								v-for="(firstItem, first) in topItem.subChaSpecCataLog"
								:name="`${topIndex}-${first}`" :key="first">
								<template slot="title">{{firstItem.catalogName}}</template>
								<t-submenu
									v-if="secondItem.subChaSpecCataLog"
									v-for="(secondItem, second) in firstItem.subChaSpecCataLog"
									:name="`${first}-${second}`" :key="second">
									<template slot="title">{{secondItem.catalogName}}</template>
									<t-menu-item v-for="(thirdItem, third) in secondItem.subChaSpecCataLog" :key="third"  @click.native="itemClickHandle(thirdItem)" >
										{{thirdItem.catalogName}}
									</t-menu-item>
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
				<!-- <t-tabs class="tab">
					<t-tab-panel v-for="(fourItem, fourth) in otherMenus" :key="fourth" :label="fourItem.catalogName" :name="`tab-${fourth}`">
						<div class="model-beg col" v-if="fourItem.isLeaf"  v-for="(fiveItem,fifth) in fourItem.subChaSpecCataLog" :key="fifth">
							<span @click="fiveClick(fiveItem)">
								 五级菜单: <span class="fivemenu">{{fiveItem.catalogName}}</span>
							</span>
							<t-modal v-model="fiveItem.modalShow" title="电视的发">
								 <t-tabs v-if="fiveItem.subChaSpecCataLog">
									 <t-tab-panel 
										v-for="(sixItem, six) in fiveItem.subChaSpecCataLog"
										:label="sixItem.catalogName" 
										:name="`tab-${six}`"
										:key="six">
										<t-form inline="true" :model="formRight" :rules="ruleFormLabel" label-position="left" :label-span="4">
											<t-form-item label="标题:">
												<span>222</span>
											</t-form-item>
											<t-form-item label="标题">
												<span>222</span>
											</t-form-item>
										</t-form>
									</t-tab-panel>
								 </t-tabs>
							</t-modal>
						</div>
					</t-tab-panel>
				</t-tabs>

						<t-form inline="true" :model="formRight" :rules="ruleFormLabel" label-position="left" :label-span="4" label-width="210">
											<t-form-item label="标题:" class="col-4">
												<span class="text-left">222</span>
											</t-form-item>
											<t-form-item label="标题:" class="col-4">
												<span class="text-center">222</span>
											</t-form-item>
											<t-form-item label="标题:" class="col-4">
												<span class="text-center">222</span>
											</t-form-item>
											<t-form-item label="标题:" class="col-4">
												<span class="text-center">222</span>
											</t-form-item>
										</t-form> -->
				<div class="menutrees">
					<div class="view-tree">
						<div class="view-tree-left" v-if="otherMenus.length">
							<t-tree :data="otherMenus"  is-select :props="defaultProps" @on-click="handleNodeClick"></t-tree>
						</div>
						<div :class="[ { full: !otherMenus.length }, 'view-tree-right']">
							<div class="form-container">
							<div class="form-item-container">
							<div class="row border">
								<div class="col-4 " v-for="(catas, cataIndex) in cataList">
									<div class="form-group row">
									  <label class="form-group__label text-right col-5">{{catas.chaSpecVal.displayValue}}:</label> 
									  <div class="form-group__content col"><span>{{catas.chaSpecVal.value}}</span></div>
									</div>
								</div>
							</div>
							</div></div>
						</div>
					</div>
				</div>
				<!-- <div class="container"></div> -->
			</div>
		</div>
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
			defaultId: null,
			otherMenus: [],
      defaultProps: {
        children: 'subChaSpecCataLog',
        label: 'catalogName'
      }
		}
	},
	methods: {
		handleNodeClick(obj, node, self){
			console.log(obj, node, self)
		},
		itemClickHandle({catalogName, chaSpecCatalogId, isLeaf}){
			// 点击上面的三级菜单展示五六级菜单或者展示指标
			this.defaultCata = chaSpecCatalogId
			this.defaultTitle = catalogName
			if(isLeaf == 0){
				// 获取四五六级菜单
				let menuParams = {
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
								chaSpecCatalogId
							]
						}]
					}
				}
				// 获取四级以下菜单
				this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_MENUS, {...menuParams})
				.then(({ data }) => {
					// console.log('otherMenus',data.businessParams.responseList)
					let otherMenus = data.businessParams.responseList
					
					console.log('otherMenus',otherMenus)
					this.otherMenus = otherMenus
				})

				// 获取当前菜单的指标
				this.initGetCata(chaSpecCatalogId)
				.then((res)=>{
					console.log(res.data)
				})
			}else{
				// 获取指标
				console.log('initCata')
				this.initGetCata(chaSpecCatalogId)
				.then((res)=>{
					console.log(res.data)
					this.cataList = res.data.businessParams.responseList
				})

			}
		},
		initGetCata(chaSpecCatalogId){
			// 初始化菜单下指标
			return this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_CATA,{
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
		this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_MENUS, {...params})
		.then(({ data }) => {
			// 获取菜单数组
			this.menuList = data.businessParams.responseList
			
			// 获取第一级菜单第一个末级 id
      let firstViewChild = this.menuList[0].subChaSpecCataLog[0]
			let initCataId;
			if(firstViewChild.subChaSpecCataLog){
				firstViewChild.subChaSpecCataLog[0].subChaSpecCataLog[0] ? initCataId = firstViewChild.subChaSpecCataLog[0].subChaSpecCataLog[0].chaSpecCatalogId : initCataId = firstViewChild.subChaSpecCataLog[0].chaSpecCatalogId
			}else{
				initCataId = firstViewChild.chaSpecCatalogId
			}
			// 初始化第一次加载的指标项 
			this.$Loading.start();
			this.initGetCata(initCataId)
			.then(({data})=>{
				this.$Loading.finish();
				this.cataList = data.businessParams.responseList
			})
		})
	},
	components: {
	}
}
</script>
<style lang="less" scoped>

@import './index.less';
.tab-content{
	padding: 20px;
}
</style>

