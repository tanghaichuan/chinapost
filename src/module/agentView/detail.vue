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
			<div :class="[{'bg-warning h500': theme2 == 'ghost' }]">
				<t-menu  mode="horizontal" open-position="right"  ref="myMenu">
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
			<div class="viewContent">
				<div class="tab-title">{{defaultTitle}}</div>
				<t-tabs class="tab">
					<t-tab-panel v-for="(fourItem, fourth) in otherMenus" :key="fourth" :label="fourItem.catalogName" :name="`tab-${fourth}`">
						<div class="model-beg" v-if="fourItem.isLeaf"  v-for="(fiveItem,fifth) in fourItem.subChaSpecCataLog" :key="fifth">
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
										标签{{six}}内容
									</t-tab-panel>
								 </t-tabs>
							</t-modal>
						</div>
					</t-tab-panel>
				</t-tabs>
				<div class="container"></div>
			</div>
		</div>
	</div>
</template>
<script>
import './index.less';

export default {
	data() {
		return {
			customerId: this.$route.params.customerId,
			menuList: [],
			cataList: [],
			otherMenus: [],
			defaultTitle: '基础视图',
			defaultCata: 1,
			defaultId: null,
		}
	},
	methods: {
		fiveClick(fiveItem){
			fiveItem.modalShow=true
		},
		itemClickHandle({catalogName, chaSpecCatalogId, isLeaf}){
			// 点击上面的三级菜单展示五六级菜单或者展示指标
			this.defaultCata = isLeaf
			this.defaultTitle = catalogName
			if(isLeaf == 0){
				// 获取四五六级菜单
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
								chaSpecCatalogId
							]
						}]
					}
				}
				this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_MENUS, {...params})
				.then(({ data }) => {
					// console.log('otherMenus',data.businessParams.responseList)
					let otherMenus = data.businessParams.responseList
					for(let i =0; i<otherMenus.length; i++){
						for(let j=0; j<otherMenus[i].subChaSpecCataLog.length;j++){
							console.log('showshow',i,j)
							otherMenus[i].subChaSpecCataLog[j].modalShow = false
						}
					}
					console.log('otherMenus',otherMenus)
					this.otherMenus = otherMenus
				})
			}else{
				// 获取指标
				console.log('initCata')
				this.initGetCata(chaSpecCatalogId)
				.then((res)=>{
					console.log(res.data)
					this.cataList = res.data.businessParams.responseList
				})

				console.log('is the last one',isLeaf)
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
		this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_MENUS, {...params})
		.then(({ data }) => {
			console.log(data.businessParams.responseList)
			this.menuList = data.businessParams.responseList
		})
	},
	components: {
	}
}
</script>
<style lang="less" scoped>
.tab-content{
	padding: 20px;
}
</style>

