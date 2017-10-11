<template>
<div>
	<!-- http://localhost:8088/uspa/pc/iframe.html?menuName=operatorAuthorManager -->
	<iframe frameborder=0 width=100% height=1200 :src="rode"></iframe>
</div>	
</template>
<script>
export default{
	data(){
		return{
			rode:''
		}
	},
	methods:{
		
	},
	watch:{
		'$route'(to,from){
			var urlStrr = this.$route.path.split('/');
			this.rode = urlStrr[urlStrr.length - 1];
			var pth = 'http://10.1.45.21:8088/uspa/pc/iframe.html?menuName=';
			this.rode = pth + this.rode;
		}
	}
	
}	
</script>
<style lang="less" scoped>
//按照以下样式行数名字修改系统内部样式
//common.css 2
.aifiui-demo-content{
	padding:0 24px 0;
}

//common.css 6
.aifui-case-top{
	display:none;
}
//common.css 132
.aifui-case-side{
	display:none;
}
//common.css 202
.aifui-case-content{
	margin-left:0!important;
	padding:0 0 52px;
}

//iframe.html 12行 style="background:#f2f6f7;"

//uspa.css 296
.organization-content{
	margin:0 20px 24px;
}
//uspa.css 1686
.entity-and-fn{
	padding:0 24px 24px;
}

//aifui.css 339
.desk {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background:#f2f6f7
}
</style>