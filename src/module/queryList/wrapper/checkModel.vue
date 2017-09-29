<template>
<t-modal v-model="modal" width="476">
	<p slot="header">
		<span>客户唯一性校验</span>
	</p>
	<div>
	
	</div>
	<div slot="footer">
		<t-button type="outline" class="sub-btn" @click="cancel">取消</t-button>
		<t-button type="primary" @click="confirm">查询</t-button>
	</div>
</t-modal>
</template>
<script>
export default{
	data(){
		return{

        }
    },
    props: {
		modal: {
            type: Boolean,
            default: false
        }
    },
	methods:{
		cancel() {
			this.modal = false
		},
		confirm() {
			this.modal = false
		}
	},
	mounted: function () {
		//console.log(this.model)
	}
}	
</script>
<style lang="less" >

</style>