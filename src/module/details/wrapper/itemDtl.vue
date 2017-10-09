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
        </div>
        <div class="form-container" v-show="userList.isCollapse">
            <div class="form-item-container" v-if="userList.title.indexOf('其他关系人信息') === -1">
                <item-wrap :row="row" :userList="userList" :formList="userList.formItem[0].formList" v-for="(index,key) in userList.formItem" :key="key"></item-wrap>
                <!--异步加载更多-->
                <dynamic-from :row="row" :id="0" :isAsync="userList.isAsync" :userList.sync="userList"></dynamic-from>
            </div>
            <div class="form-item-container" v-if="userList.title.indexOf('其他关系人信息') > 0" v-for="(index,key) in userList.formItem" :key="key">
                <item-wrap :row="row" :userList="userList" :formList="userList.formItem[0].formList" ></item-wrap>
                <!--异步加载更多-->
                <more-model></more-model>
            </div>
        </div>
    </div>
</template>
<script>
import itemWrap from './itemWrap'
import dynamicFrom from './dynamicForm'
import moreModel from './moreModel'
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
        title: String
    },
    components: {
        dynamicFrom,
        itemWrap,
        moreModel
    },
    methods: {
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
    &:not(:first-child) {
        &::before {
            margin-left: 20px;
            margin-right: 45px;
            margin-top: -24px;
            padding-bottom: 2px;
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
    padding:3px 0;
    margin-left: 25px;
    margin-right: 25px;
    zoom: 1;
    &:not(:first-child) {
        border-top: 1px dashed #dfe5e7;
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
