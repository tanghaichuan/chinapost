<template>
    <div class="wrapper">
        <h5>
            <i class="iconfont tit-icon" v-html="icon"></i>{{title}}</h5>
        <div class="back-options">
            <p class="btn-icon">
                <t-button type="outline" class="sub-btn">
                    <i class="iconfont">&#xe639;</i>返回</t-button>
                <!-- <t-button type="outline" class="sub-btn" @click="handleSubmit('formDynamic')"><i class="iconfont">&#xe624;</i>保存</t-button> -->
            </p>
        </div>
        <!-- 表单域 -->
        <t-form :model="renderData" ref="formDynamic" label-position="left" :label-span="5">
            <div class="wrapper-form" v-for="(item, index) in renderData" :key="index">
                <item-form :row="row" :getValidatePath="getValidatePath(item, index)" :isDisabled="isDisabled" ref="form" :userList="item"></item-form>
            </div>
        </t-form>
        <div class="form-options">
            <t-button type="primary" class="save" @click.native="handleSubmit('formDynamic')">
                <i class="iconfont">&#xe624;</i>保存</t-button>
            <t-button type="outline" class="sub-btn approval">
                <i class="iconfont">&#xe65f;</i>提交审核</t-button>
        </div>
    </div>
</template>
<script>
import { reGroupTree } from 'module/clientManage/utils'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import dynamicForm from './dynamicForm'
import itemForm from './itemForm'
import editTable from './editTable'
export default {
    name: 'wrapper',
    data() {
        return {
            isDisabled: false,  // 表单只读
            showForm: true,
            showTable: true,
        }
    },
    props: {
        icon: String,
        title: String,
        row: {                      // 表单区域栅格
            type: Number,
            default: 4
        },
        renderData: {
            type: Object,
            default: {}
        }
    },
    components: {
        dynamicForm,
        itemForm,
        editTable
    },
    computed: {
        showTableList() {
            return this.editData.filter(item => {
                let reg = new RegExp(this.searchInfo);
                return item.type.match(reg);
            })
        },
        ...mapGetters('clientManage', {
            getCusFormDataModel: 'getCusFormDataModel'
        })
    },
    methods: {
        ...mapMutations('clientManage', {
            SET_CUS_FORM_LIST: 'SET_CUS_FORM_LIST'
        }),
        ...mapActions('clientManage', {
            saveFormItem: 'saveFormItem'
        }),
        ...mapGetters('clientManage', {
            getCusFormDataModel: 'getCusFormDataModel',
        }),
        getValidatePath(item, index) {
            return `${index}.`
        },
        addTableList() {
            this.editData.push(...this.addTableItem);
        },
        handleSubmit(name) {
            this.$refs[name].validate(async valid => {
                if (valid) {
                    try {
                        // 数据本地同步(store) 更新数据层模型,触发getter依赖收集
                        this.SET_CUS_FORM_LIST(this.renderData)
                        // this.getCusFormDataModel为从渲染模型映射出的数据模型
                        // 将数据模型发送到服务端
                        let res = await this.saveFormItem(this.getCusFormDataModel)
                        if (res.systemParams.RESPONSE_INFO.responseCode == 0) {
                            this.$Message.success('保存成功!');
                        } else {
                            this.$Message.danger('保存失败!');
                        }
                    } catch (error) {
                        console.error(error)
                    }
                } else {
                    this.$Message.danger('保存失败!');
                }
            })
        }
    },
    created() {
        // console.log(this.formData);
        // this.list.push(this.customInfo, this.attenInfo)
    }
}
</script>
<style scoped lang="less">
.clearfix {
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
}

.collapse {
    display: none;
}

.wrapper {
    margin: 0 21px;
    padding-top: 18px;
    position: relative;
    margin-bottom: 100px;
    h5 {
        margin-bottom: 0;
        display: inline-block;
        font-size: 16px;
        color: #333;
        .tit-icon {
            margin: 0 5px 0 8px;
        }
    }
    .input-wrapper {}
    .input-group-icon {
        &.input-group-icon--right {
            right: 15px;
            cursor: pointer;
        }
    }
    .form-group__label {
        color: #000;
        font-size: 12px;
        opacity: 0.8;
        filter: alpha(opacity=80);
        max-width: 125px;
        padding-left: 0;
    }
    .col {
        padding-right: 25px;
    }
}

.wrapper-form {
    padding: 11px 0;
}

.back-options {
    position: absolute;
    right: 0;
    top: 11px;
    .btn-icon {
        margin: 0;
        i {
            margin-right: 6px;
            font-size: 14px;
            color: #666;
        }
        .sub-btn {
            color: #666;
            &:hover {
                color: #3DAC6E;
                i {
                    color: #3DAC6E;
                }
            }
        }
    }
}

.form-options {
    margin-top: 7px;
    .btn>span {
        font-size: 14px;
    }
    .save {
        margin-right: 15px;
        width: 88px;
        height: 36px;
    }
    .approval {
        width: 120px;
        height: 36px;
        border-color: #42ab6f;
    }
    .iconfont {
        margin-right: 8px;
    }
}

.extend-attr {
    .form-top {
        border-bottom: 1px solid #dfe5e7;
        height: 45px;
        line-height: 45px;
        .left {
            i {
                &.aid {
                    font-size: 18px;
                    color: #898989;
                }
            }
        }
    }
}

.wrapper-table {
    padding: 25px;
    width: 100%;
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
    background: #fff;
    border: 1px solid #dfe5e7;
    border-top:0;
}

.table-top {
    padding-bottom: 10px;
    width: 100%;
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
        .aid-plus-circle-outline {
            cursor: pointer;
        }
    }
}

.form-top {
    position: relative;
    display: flex;
    align-items: center;
    zoom: 1;
    margin-top: 20px;
    border: 1px solid #dfe5e7;
    border-bottom: 0;
    &.botom {
        border-bottom: 1px solid #dfe5e7;
    }
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
    .left {
        padding-left: 14px;
        display: inline-block;
        cursor: pointer;
        h6 {
            margin: 0;
            display: inline-block;
            line-height: 46px;
            color: #333;
        }
        i {
            font-size: 22px;
            line-height: 46px;
        }
        .info-icon {
            i {
                font-size: 6px;
            }
        }
    }
    .right {
        display: inline-block;
        position: absolute;
        right: 15px;
        top: 8px;
        i {
            font-size: 22px;
        }
    }
}
</style>
