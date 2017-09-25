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
        <!-- 内容区域 -->
        <div class="clearfix">
            <div class="tree-area" :class="treeFold" v-show="showTree">
                <div class="tree-con"  v-show="unfoldTree" ref="treeArea">
                   <div class="form-top">
                    <div class="left"><h6>选择组织</h6></div>
                    <div class="unfold" @click="foldTree"><i class="iconfont">&#xe7a3;</i></div>
                    </div>
                    <div class="tree-select">
                        <dropTree></dropTree>
                    </div> 
                </div>
                <div class="fold" v-show="!unfoldTree" @click="hidTree"><i class="iconfont">&#xe7a4;</i></div>  
            </div>            
            <div :class="[isTree,isFold]" ref="detailsArea">
                <t-form :model="formData" label-position="left" :label-span="5">
                    <div class="wrapper-form" v-for="(item, index) in formData" :key="index">
                        <item-dtl :row="row" :isDisabled="isDisabled" ref="form" :userList="item"></item-dtl>
                    </div>
                </t-form>              
            </div>
        </div>
    </div>
</template>
<script>
import itemDtl from './itemDtl'
import dropTree from '../components/droptree'
export default {
    name: 'wrapper',
    data() {
        return {
            isDisabled: false,  // 表单只读
            showForm: true,
            showTable: true,
            searchInfo: ""
        }
    },
    props: {
        showTree: Boolean,
        unfoldTree: {
            type: Boolean,
            default: true
        },
        icon: String,
        title: String,
        row: {                      // 表单区域栅格
            type: Number,
            default: 4
        },
        formData: {
            type: Object,
            default: {}
        }
    },
    components: {
        dropTree,
        itemDtl
    },
    computed: {
        isTree(){
            return this.showTree ? 'detail-area' : ''
        },
        isFold(){
            return this.unfoldTree ? '' : 'detail-unfold'
        },
        treeFold(){
            return this.unfoldTree ? '' : 'tree-fold'
        }  
    },
    methods: {
        foldTree() {
            this.unfoldTree = false;
        },
        hidTree() {
            this.unfoldTree = true;
        }
    },
    mounted() {
        this.$nextTick(() => {

            let dtlDom = this.$refs.detailsArea;
            //let treeDom = this.$refs.treeArea;
            let dtlHeight = dtlDom.clientHeight;
            //let treeHeight = this.$refs.treeArea.clientHeight;
            this.$refs.treeArea.style.height = dtlHeight - 17 + 'px';  
            //console.log(this.$refs.treeArea.style.height);
        })
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
    .input-wrapper {
        .input {
            padding-right: 32px!important;
        }
    }
    .input-group-icon {
        &.input-group-icon--right {
            right: -2px;
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
        width: 88px;
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
    background-color: #f6f8f8;
    border-bottom: 1px solid #dfe5e7;
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
    .unfold {
        width: 20px;
        height: 38px;
        line-height: 38px;
        position: absolute;
        right: 0;
        border-radius: 5px 0 0 5px;
        border: 1px solid #dee5e7;
        border-right: 0;
        text-align: center;
        background-color: #e7edee;
        top: 3px;
        cursor: pointer;
        i {
            font-size: 12px;
        }
    }
}

.tree-area {
    position: relative;
    margin-top: 11px;
    float: left;
    width: 20%;
    .tree-con {
        border: 1px solid #dfe5e7;
        background-color: #fff;
    }
    .tree-select {
        padding:20px;
        min-height: 800px;
    }
    .fold {
        width: 20px;
        height: 38px;
        line-height: 38px;
        position: absolute;
        left: 7px;
        border-radius: 0 5px 5px 0;
        border: 1px solid #dee5e7;
        border-right: 0;
        text-align: center;
        background-color: #e7edee;
        top: 3px;
        cursor: pointer;
        i {
            font-size: 12px;
        }  
    }
}
.tree-fold {
    width: 4%;
}
.detail-area {
    float: right;
    width: 78%;
}
.detail-unfold {
     width: 96%;
}
</style>
