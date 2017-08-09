<template>
    <t-table border :columns="customColumns" :data="data">
    </t-table>
</template>
<script>
    export default {
        data () {
            return {
                customColumns: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                        return h('div', [
                            h('div',{
                                'class': {
                                    'hidden': params.row.isEdit
                                }
                            },[
                                h('span',params.row.name),
                                h('t-icon', {
                                    props: {
                                        type: 'lead-pencil'
                                    },
                                    style: {
                                        'margin-left': '15px',
                                        'cursor': 'pointer'
                                    },
                                    nativeOn: {
                                        click: function () {
                                            params.row.isEdit = true
                                        }
                                    }
                                }),
                            ]),
                            h('div',{
                                'class': {
                                    'hidden': !params.row.isEdit
                                }
                            },[
                                h('t-input',{
                                    props: {
                                        placeholder: '请输入..',
                                        value:params.row.name
                                    },
                                    style: {
                                        width:'150px',
                                        display: 'inline-block',
                                        'margin-right': '15px'
                                    },
                                    on: {
                                        input: function (value) {
                                            params.row.name = value
                                        }
                                    }
                                }),
                                h('t-icon', {
                                    props: {
                                        type: 'check',
                                        gradient: 'primary',
                                        size: 20
                                    },
                                    style: {
                                        'cursor': 'pointer'
                                    },
                                    nativeOn: {
                                        click: function () {
                                            params.row.isEdit = false
                                        }
                                    }
                                }),
                            ])

                        ])
                    }
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
                width: 150,
                align: 'center',
                render: (h, params) => {
                if (params.row.age > 18) {
                return h('div', [
                    h('t-button', {
                        props: {
                            type: 'danger',
                            size: 'sm'
                        },
                        on: {
                            click: () => {
                            this.remove(params.index)
                    }
            }
            }, '删除')
            ])
            } else {
                return h('div', [
                    h('t-button', {
                        props: {
                            type: 'primary',
                            size: 'sm'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                            this.show(params.index)
                    }
            },
                show: params.row.age > 18
            }, '查看'),
                h('t-button', {
                    props: {
                        type: 'danger',
                        size: 'sm'
                    },
                    on: {
                        click: () => {
                        this.remove(params.index)
                }
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
                    address: '北京市朝阳区芍药居',
                    isEdit: false
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗',
                    isEdit: false
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道',
                    isEdit: false
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道',
                    isEdit: false
                }
            ]
        }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data[index].name}<br>年龄：${this.data[index].age}<br>地址：${this.data[index].address}`
                })
            },
            remove (index) {
                this.data.splice(index, 1)
            }
        }
    }
</script>
<style>
    .hidden {
        display: none;
    }
</style>