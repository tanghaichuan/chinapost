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
                <item-wrap :row="row" :path="getValidatePath+'formItem.0.formList.'" :userList="userList" :formList="userList.formItem[0].formList"></item-wrap>
                <!--异步加载更多-->
                <dynamic-from :getValidatePath="getValidatePath" :row="row" :id="0" :isAsync="userList.isAsync" :userList="userList"></dynamic-from>
            </div>
            <!--增加扩展-->
            <div class="form-item-container" v-for="(item1, x) in userList.formItem" v-if="x > 0" :key="x" :class="userList.title === '基本信息' ? 'base-style' : ''">
                <i class="iconfont del" @click="delFormList(userList.formItem, x)">&#xe61b;</i>
                <item-wrap :row="row" :path="getValidatePath+'formItem.'+x+'.formList.'" :userList="userList" :formList="item1.formList"></item-wrap>
                <dynamic-from :getValidatePath="getValidatePath" :row="row" :id="0" :isAsync="userList.isAsync" :userList="userList"></dynamic-from>
            </div>
        </div>

    </div>
</template>
<script>
const itemWrap = () => import('./itemWrap')
const dynamicFrom = () => import('./dynamicForm')
const dropTree = () => import('../components/droptree')

// 说明：
// 1.  特征值数据类型目前定义如下：
// 01--文本
// 02--数字
// 03--日期

// 2. 操作方式目前定义如下：
// 010--手工录入单行：
// 012--手工录入密码：当用户输入密码时，以特殊字符替代密码字符进行展示；
// 013--手工录入多行：需要多行录入的文本
// 014--手工录入日期：录入日期
// 015--手工录入纯数字：
// 016--手工录入逻辑值：录入只有真假两种选择的值（即check box）
// 017--级联 
// 02--枚举值选择：录入枚举值

// 3. CODE希望能作为界面控件的id或name，以便作为选择器定位控件的凭据。因为前台针对这些控件还是有些代码要写的
// 4. ENUM_NAME的用处是，将来可能重复的枚举值就重新送了，以节约网络流量。
// const INPUT = '010',
//     PASSWORD = '012',
//     TEXTAREA = '013',
//     SELECT = '02',
//     TIME = '014',
//     CHECKBOX = '016';
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
        itemWrap
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
