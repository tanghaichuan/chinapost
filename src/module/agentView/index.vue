<template>
<div class="agent">
	<t-breadcrumb>
		<t-breadcrumb-item href="/">Home</t-breadcrumb-item>
		<t-breadcrumb-item href="#">Components</t-breadcrumb-item>
		<t-breadcrumb-item>Breadcrumb</t-breadcrumb-item>
	</t-breadcrumb>
	<div class="customers">
		<div class="new-customer float-left">
			<button class="btn btn-new-customer"><i class="iconfont">&#xe632;</i>查询新客户</button>
		</div>
		<div class="customer-tabs float-left">
			<t-tabs mode="pills" :closeable="true" :threshold="3">
				<t-tab-panel label="标签一" name="tab-1">标签一内容</t-tab-panel>
				<t-tab-panel label="标签二" name="tab-2">标签二内容</t-tab-panel>
				<t-tab-panel label="标签三" name="tab-3">标签三内容</t-tab-panel>
				<t-tab-panel label="标签四" name="tab-4">标签四内容</t-tab-panel>
				<t-tab-panel label="标签五" name="tab-5">标签五内容
				</t-tab-panel>
			</t-tabs>
		</div>
		<div class="customer-share">
			<t-button type="outline">默认按钮（幽灵）</t-button>
			<label for="">该客户其他业务线：邮务、证券、速递</label>
			<div class="ll"></div>
		</div>
	</div>
</div>
</template>
<script>
// import './index.less';
export default {
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
