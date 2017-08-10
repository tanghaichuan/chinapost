<template>
	<div>
    	<t-table stripe :columns="columns" :data="data">
    	</t-table>
  	</div>
</template>
<script>
export default {
	name: 'table1',
	data() {
		return {
			columns: [
		        {
		          title: '书籍',
		          key: 'book'
		        },
		        {
		          title: '工作',
		          key: 'job'
		        }
		    ],
		    data: [],
		    newArr:[1,2,3,]
		}
	},
	props: {
		row: Object
	},
	mounted(){
		this.data.push(this.row);
	}
} 
</script>
<style scoped>
	
</style>