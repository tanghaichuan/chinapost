<template>
    <div class="item-form">
        <div class="form-top">
            <div class="left" @click="userList.isCollapse = !userList.isCollapse">
                <span class="info-icon">
                    <i class="iconfont" v-if="userList.isCollapse">&#xe78e;</i>
                    <i class="iconfont" v-else>&#xe78d;</i>
                </span>
                <h6>{{userList.title}}</h6>
            </div>
            <div class="right" v-if="userList.isExtend">
                <i class="iconfont" @click="addFormList">&#xe632;</i>
            </div>
        </div>
        <div class="form-container" v-show="userList.isCollapse">
            <div class="form-item-container">
                <!--普通表单域-->
                <item-wrap :row="row" :path="getValidatePath+'formItem.0.formList.'" :userList="userList" :formList="userList.formItem[0].formList"></item-wrap>
                <!--加载更多表单域-->
                <dynamic-from v-if="userList.title.indexOf('其他关系人信息') === -1" :getValidatePath="getValidatePath" :row="row" :id="0" :isAsync="userList.isAsync" :userList="userList"></dynamic-from>
                <!--创建其他关系人-->
                <create-rel-per v-if="userList.title.indexOf('其他关系人信息') > 0"></create-rel-per>
            </div>
            <!--扩展表表单域-->
            <div class="form-item-container" v-for="(item1, x) in userList.formItem" v-if="x > 0" :key="x" :class="userList.title === '基本信息' ? 'base-style' : ''">
                <i class="iconfont del" @click="delFormList(userList.formItem, x)">&#xe61b;</i>
                <item-wrap :row="row" :path="getValidatePath+'formItem.'+x+'.formList.'" :userList="userList" :formList="item1.formList"></item-wrap>
                <dynamic-from v-if="userList.title.indexOf('其他关系人信息') === -1" :getValidatePath="getValidatePath" :row="row" :id="x" :isAsync="userList.isAsync" :userList="userList"></dynamic-from>
                <create-rel-per v-if="userList.title.indexOf('其他关系人信息') > 0"></create-rel-per>
            </div>
        </div>
    </div>
</template>
<script>
const itemWrap = () => import('./itemWrap')
const dynamicFrom = () => import('./dynamicForm')
const dropTree = () => import('../components/droptree')
const createRelPer = () => import('./createRelPer')

export default {
    name: 'itemForm',
    data() {
        return {
            flod: false,
            showForm: true
        }
    },
    props: {
        userList: {
            type: Object,
            default: {}
        },
        isAsync: {              // 表单异步加载（更多）
            type: Boolean,
            default: false
        },
        isDisabled: {           // 表单只读
            type: Boolean,
            default: false
        },
        isExtend: {             // 表单添加扩展信息（加减）
            type: Boolean,
            default: false
        },
        isCollapse: {           // 表单折叠
            type: Boolean,
            default: false
        },
        row: Number,
        title: String,
        getValidatePath: String
    },
    components: {
        dynamicFrom,
        dropTree,
        itemWrap,
        createRelPer
    },
    methods: {
        // 动态验证规则
        validate() {
            return `不能为空`
        },
        addFormList() {
            let arr = [];
            arr = _.cloneDeep(this.userList.formItem[0])
            arr = this.emptyList(arr);  // 置空表单元素
            this.userList.formItem.push(arr)
        },
        emptyList(arr) {
            _.forEach(arr, x => {
                _.forEach(x, y => {
                    y.VALUE = '';
                })
            })
            return arr
        },
        delFormList(obj, index) {
            obj.splice(index, 1)
        }
    },
    created() {
        //console.log(this.userList);
        //console.log(this.getValidatePath);
    }
}
</script>
<style scoped lang="less">
.info-icon {
    i {
        font-size: 8px;
    }
}

.del {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: -13px;
}

.form-item-container {
    position: relative;
    padding: 19px 0 9px;
    zoom: 1;
    &::before {
        margin-top: -19px;
        padding-bottom: 19px;
        display: block;
        content: '';
        border-top: 1px solid #dfe5e7;
    }
    &:not(:first-child) {
        &::before {
            margin-left: 20px;
            margin-right: 45px;
            margin-top: -19px;
            padding-bottom: 19px;
            display: block;
            content: '';
            border-top: 1px dashed #dfe5e7;
        }
    }
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.form-item-wrap {
    padding-left: 5px;
    zoom: 1;
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.item-form {
    margin-top: -1px;

    background: #fff;
    border: 1px solid #dfe5e7;
    .form-top {
        padding-left: 13px;
        line-height: 43px;
        background: #f6f8f8;
        .left {
            display: inline-block;
            cursor: pointer;
            h6 {
                display: inline-block;
                border: 0;
                padding: 0;
                font-size: 16px;
                color: #333;
            }
            i {
                &.aid {
                    margin-right: 3px;
                    font-size: 18px;
                    color: #898989;
                }
            }
        }
        .right {
            margin-right: 15px;
            display: inline-block;
            float: right;
            i {
                cursor: pointer;
            }
        }
    }
}

.clearfix {
    float: left;
    width: 100%;
}

.form-block--block {
    float: left;
}

.item-form {
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
}

.silde-enter-active,
.slide-leave-active {
    transition: all .3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}

.cas {
    padding: 0;
    width: 197px;
    .select {
        width: 100%;
    }
}

.base-style {
    .form-item-wrap {
        padding-left: 5px;
    }
}
</style>
