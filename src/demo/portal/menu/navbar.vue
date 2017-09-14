<template>
	<nav class="navbar  navbar-expand-lg bg-white layout-nav--top">
		<a href="javascript:;" class="mr-auto">
			<i class="iconfont iconfont-fold" @click="openOrClose">&#xe609;</i>
		</a>
		<div class="d-inline">
		  <t-input icon="magnify" size="sm" placeholder="搜索..."></t-input>
		</div>
		<t-dropdown trigger="click" placement="bottom-end">
		  <a href="javascript:void(0)" class="text-muted ml-4">
		    <t-icon type="help-circle-outline" size="20" class="text-white"></t-icon>
		  </a>
		  <t-dropdown-menu slot="list">
		    <t-dropdown-item>联络我们</t-dropdown-item>
		    <t-dropdown-item>帮助中心</t-dropdown-item>
		    <t-dropdown-item>更新日志</t-dropdown-item>
		    <t-dropdown-item>新手引导</t-dropdown-item>
		  </t-dropdown-menu>
		</t-dropdown>
		<t-dropdown trigger="click" placement="bottom-end">
		  <t-badge class="ml-4">
		    <t-avatar :img-src="adminImg" class="admin-img"></t-avatar>
		    <t-icon type="arrow-down-drop" size="20" class="text-white"></t-icon>
		  </t-badge>
		  <t-dropdown-menu slot="list">
		    <t-dropdown-item>个人中心</t-dropdown-item>
		    <t-dropdown-item>账号设置</t-dropdown-item>
		    <t-dropdown-item>意见反馈</t-dropdown-item>
		    <t-dropdown-item>退出</t-dropdown-item>
		  </t-dropdown-menu>
		</t-dropdown>
		<t-dropdown trigger="click" placement="bottom-end" class="mr-2">
		  <t-badge count="3" state='warning' class="ml-4">
		    <a href="javascript:void(0)" class="text-muted">
		      <t-icon type="bell" size="20" class="text-white"></t-icon>
		    </a>
		  </t-badge>
		  <t-dropdown-menu slot="list">
		    <t-dropdown-item>
		      <div class="d-flex align-items-center">
		        <t-avatar img-src="http://flatfull.com/themes/angulr/angular/img/a0.jpg"></t-avatar>
		        <div class="ml-3">
		          <p class="text-gray mb-0 text-truncate">我是标题文字标题</p>
		          <small class="text-muted text-sm text-truncate">2017年7月16日 09:15</small>
		        </div>
		      </div>
		    </t-dropdown-item>
		  </t-dropdown-menu>
		</t-dropdown>
	</nav>
</template>
<script>
export default{
	props:{
		isOpen:{
			type:Boolean,
			default:true
		},
		openPosition:{
			type:String,
			default:'down'
		}
	},
	data(){
		return{
			adminImg: require('../../../asset/image/admin.png')
		}
	},
	methods:{
		 openOrClose() {
      this.$emit('toggleSideBar')
    }
	}
}	
</script>
<style lang="less" scoped>
.navbar.bg-white {
  background-color: #3ca358!important;
}
.iconfont-fold {
  font-size: 15px;
  color: #fff;
}
.admin-img {
  width: 35px;
  background-color: transparent;
  cursor: pointer;
  .avatar__dot {
      display: none;
  }
}
</style>