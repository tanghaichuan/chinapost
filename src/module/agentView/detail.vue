<template>
    <div class="agent" style="margin-right: 20px">
        <!-- 面包屑导航 -->
        <t-breadcrumb class="breadcrumb">
            <t-breadcrumb-item href="">首页</t-breadcrumb-item>
            <t-breadcrumb-item href="">悬停</t-breadcrumb-item>
            <t-breadcrumb-item>三级</t-breadcrumb-item>
            <t-breadcrumb-item>四级</t-breadcrumb-item>
            <t-breadcrumb-item>当前页</t-breadcrumb-item>
        </t-breadcrumb>
        <!-- 创建客户/客户选择 tab -->
        <div class="customers clearfix">
            <div class="new-customer float-left">
                <button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center"><i
                        class="iconfont" style="font-size: 30px; color: #00A854">&#xe632;</i>查询新客户
                </button>
            </div>
            <div class="carousel">
                <div class="institutional-clients float-left">
                    <button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center">
                        <i class="iconfont close">&#xe790;</i>
                        <i class="iconfont c-icon">&#xe7ab;</i>机构客户
                    </button>
                </div>
                <div class="institutional-clients float-left">
                    <button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center"><i
                            class="iconfont c-icon person">&#xe7ac;</i>个人客户
                    </button>
                </div>
                <div class="institutional-clients float-left">
                    <button class="btn btn-new-customer d-flex flex-column align-items-center justify-content-center"><i
                            class="iconfont c-icon">&#xe7ab;</i>机构客户
                    </button>
                </div>
                <t-button type="outline-primary" class="p-left"> <</t-button>
                <t-button type="outline-primary" class="p-right"> ></t-button>
            </div>


            <div class="customer-share d-flex flex-column">
                <t-button type="outline" class="t-button"><i class="iconfont memory"
                                                             style="font-size: 12px;">&#xe624;</i>跨业务线信息共享
                </t-button>
                <label for="" class="service-line">该客户其他业务线：邮务、证券、速递</label>
            </div>
        </div>
        <!-- 视图指标 -->
        <div class="views-menu" style="margin-top: 10px">
            <div :class="[{'bg-warning h500': theme1 == 'ghost' }]">
                <t-menu mode="horizontal" :type="theme1" active-name="1" @on-select="handleSelect"
                        class="d-flex justify-content-between">
                    <t-submenu name="1">
                        <template slot="title"><i class="aid aid-chart-bar"></i>基本视图</template>
                        <t-menu open-position="right">
                            <t-submenu name="1-1">
                                <template slot="title">开户业务</template>
                                <t-menu-item name="1-1-1">用户留存</t-menu-item>
                                <t-menu-item name="1-1-2">流失用户</t-menu-item>
                                <t-menu-item name="1-1-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="1-2">
                                <template slot="title">换卡换号</template>
                                <t-menu-item name="1-2-1">用户留存</t-menu-item>
                                <t-menu-item name="1-2-2">流失用户</t-menu-item>
                                <t-menu-item name="1-2-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="1-3">
                                <template slot="title">状态变更</template>
                                <t-menu-item name="1-3-1">用户留存</t-menu-item>
                                <t-menu-item name="1-3-2">流失用户</t-menu-item>
                                <t-menu-item name="1-3-3">举报管理</t-menu-item>
                            </t-submenu>
                        </t-menu>
                    </t-submenu>
                    <t-submenu name="2">
                        <template slot="title"><i class="aid aid-chart-bar"></i>关系视图</template>
                        <t-menu open-position="right">
                            <t-submenu name="2-1">
                                <template slot="title">开户业务</template>
                                <t-menu-item name="2-1-1">用户留存</t-menu-item>
                                <t-menu-item name="2-1-2">流失用户</t-menu-item>
                                <t-menu-item name="2-1-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="2-2">
                                <template slot="title">换卡换号</template>
                                <t-menu-item name="2-2-1">用户留存</t-menu-item>
                                <t-menu-item name="2-2-2">流失用户</t-menu-item>
                                <t-menu-item name="3-2-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="2-3">
                                <template slot="title">状态变更</template>
                                <t-menu-item name="2-3-1">用户留存</t-menu-item>
                                <t-menu-item name="2-3-2">流失用户</t-menu-item>
                                <t-menu-item name="2-3-3">举报管理</t-menu-item>
                            </t-submenu>
                        </t-menu>
                    </t-submenu>
                    <t-submenu name="3">
                        <template slot="title"><i class="aid aid-chart-bar"></i>业务视图</template>
                        <t-menu open-position="right">
                            <t-submenu name="3-1">
                                <template slot="title">开户业务</template>
                                <t-menu-item name="3-1-1">用户留存</t-menu-item>
                                <t-menu-item name="3-1-2">流失用户</t-menu-item>
                                <t-menu-item name="3-1-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="3-2">
                                <template slot="title">换卡换号</template>
                                <t-menu-item name="3-2-1">用户留存</t-menu-item>
                                <t-menu-item name="3-2-2">流失用户</t-menu-item>
                                <t-menu-item name="3-2-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="3-3">
                                <template slot="title">状态变更</template>
                                <t-menu-item name="3-3-1">用户留存</t-menu-item>
                                <t-menu-item name="3-3-2">流失用户</t-menu-item>
                                <t-menu-item name="3-3-3">举报管理</t-menu-item>
                            </t-submenu>
                        </t-menu>
                    </t-submenu>
                    <t-submenu name="4">
                        <template slot="title"><i class="aid aid-chart-bar"></i>洞察视图</template>
                        <t-menu open-position="right">
                            <t-submenu name="4-1">
                                <template slot="title">开户业务</template>
                                <t-menu-item name="4-1-1">用户留存</t-menu-item>
                                <t-menu-item name="4-1-2">流失用户</t-menu-item>
                                <t-menu-item name="4-1-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="4-2">
                                <template slot="title">换卡换号</template>
                                <t-menu-item name="4-2-1">用户留存</t-menu-item>
                                <t-menu-item name="4-2-2">流失用户</t-menu-item>
                                <t-menu-item name="4-2-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="4-3">
                                <template slot="title">状态变更</template>
                                <t-menu-item name="4-3-1">用户留存</t-menu-item>
                                <t-menu-item name="4-3-2">流失用户</t-menu-item>
                                <t-menu-item name="4-3-3">举报管理</t-menu-item>
                            </t-submenu>
                        </t-menu>
                    </t-submenu>
                    <t-submenu name="5">
                        <template slot="title"><i class="aid aid-chart-bar"></i>价值视图</template>
                        <t-menu open-position="right">
                            <t-submenu name="5-1">
                                <template slot="title">开户业务</template>
                                <t-menu-item name="5-1-1">用户留存</t-menu-item>
                                <t-menu-item name="5-1-2">流失用户</t-menu-item>
                                <t-menu-item name="5-1-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="5-2">
                                <template slot="title">换卡换号</template>
                                <t-menu-item name="5-2-1">用户留存</t-menu-item>
                                <t-menu-item name="5-2-2">流失用户</t-menu-item>
                                <t-menu-item name="5-2-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="5-3">
                                <template slot="title">状态变更</template>
                                <t-menu-item name="1-3-1">用户留存</t-menu-item>
                                <t-menu-item name="1-3-2">流失用户</t-menu-item>
                                <t-menu-item name="1-3-3">举报管理</t-menu-item>
                            </t-submenu>
                        </t-menu>
                    </t-submenu>
                    <t-submenu name="6">
                        <template slot="title"><i class="aid aid-chart-bar"></i>风险示图</template>
                        <t-menu open-position="right">
                            <t-submenu name="6-1">
                                <template slot="title">开户业务</template>
                                <t-menu-item name="6-1-1">用户留存</t-menu-item>
                                <t-menu-item name="6-1-2">流失用户</t-menu-item>
                                <t-menu-item name="6-1-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="6-2">
                                <template slot="title">换卡换号</template>
                                <t-menu-item name="6-2-1">用户留存</t-menu-item>
                                <t-menu-item name="6-2-2">流失用户</t-menu-item>
                                <t-menu-item name="6-2-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="6-3">
                                <template slot="title">状态变更</template>
                                <t-menu-item name="6-3-1">用户留存</t-menu-item>
                                <t-menu-item name="6-3-2">流失用户</t-menu-item>
                                <t-menu-item name="6-3-3">举报管理</t-menu-item>
                            </t-submenu>
                        </t-menu>
                    </t-submenu>
                    <t-submenu name="7">
                        <template slot="title"><i class="aid aid-chart-bar"></i>行为视图</template>
                        <t-menu open-position="right">
                            <t-submenu name="7-1">
                                <template slot="title">开户业务</template>
                                <t-menu-item name="7-1-1">用户留存</t-menu-item>
                                <t-menu-item name="7-1-2">流失用户</t-menu-item>
                                <t-menu-item name="7-1-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="7-2">
                                <template slot="title">换卡换号</template>
                                <t-menu-item name="7-2-1">用户留存</t-menu-item>
                                <t-menu-item name="7-2-2">流失用户</t-menu-item>
                                <t-menu-item name="7-2-3">举报管理</t-menu-item>
                            </t-submenu>
                            <t-submenu name="7-3">
                                <template slot="title">状态变更</template>
                                <t-menu-item name="7-3-1">用户留存</t-menu-item>
                                <t-menu-item name="7-3-2">流失用户</t-menu-item>
                                <t-menu-item name="7-3-3">举报管理</t-menu-item>
                            </t-submenu>
                        </t-menu>
                    </t-submenu>

                </t-menu>
            </div>
            <!--视图内容-->
            <div class="viewContent">
                <div class="tab-title"> 客户基本信息</div>
                <t-tabs class="tab">
                    <t-tab-panel label="标签一" name="tab-1" class="tabname">
                        <div style="min-height: 250px;padding-top: 20px">
                            <ul>
                                <li>
                                    <p><span class="text-right">客户编号:</span><span>1231231231</span></p>
                                    <p><span class="text-right">客户姓名：</span><span>唐小阳</span></p>
                                    <p><span class="text-right">证件类型：</span><span>身份证</span></p>
                                </li>
                                <li>
                                    <p><span class="text-right">出生年月:</span><span>1987-09</span></p>
                                    <p><span class="text-right">证件到期日期：</span><span>1987-09-09</span></p>
                                    <p><span class="text-right">证件码号：</span><span>000098898987878787</span></p>
                                </li>
                                <li>
                                    <p><span class="text-right">性别:</span><span>男</span></p>
                                    <p><span class="text-right">年龄：</span><span>56</span></p>
                                    <p><span class="text-right">婚姻状况：</span><span>保密</span></p>
                                </li>
                                <li>
                                    <p><span class="text-right">是否有子女:</span><span>是</span></p>
                                    <p><span class="text-right">学历：</span><span>本科</span></p>
                                    <p><span class="text-right">专业：</span><span>计算机应用技术</span></p>
                                </li>
                                <li>
                                    <p><span class="text-right">毕业院校:</span><span>清华大学</span></p>
                                    <p><span class="text-right">职业：</span><span>交互设计师</span></p>
                                    <p><span class="text-right"></span><span>五级弹窗</span></p>
                                </li>
                            </ul>
                        </div>
                    </t-tab-panel>
                    <t-tab-panel label="标签二" name="tab-2">
                        2
                    </t-tab-panel>
                    <t-tab-panel label="标签三" name="tab-3">
                        3
                    </t-tab-panel>
                </t-tabs>
            </div>
        </div>
        <!---->
    </div>
</template>
<script>
    import './index.less';

    export default {
        data() {
            return {
                customerId: this.$route.params.customerId,
            }
        },
        methods: {},
        created() {
            let params = {
                "systemParams": {
                    "pageInfo": {
                        "CURRENT_PAGE": "1",
                        "PAGE_SIZE": "10"
                    }
                },
                "businessParams": {
                    "queryCondition": [{
                        "condType": "chaSpecCatalogId",
                        "condValue": [
                            "0"
                        ]
                    }]
                }
            }

            this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_MENUS, {
                params
            })
                .then(({
                           data
                       }) => {
                    console.log(data)
                })
        }
    }
</script>
<style lang="less" scoped>
    .agent {
        padding: 0;
        padding-left: 20px;
        .breadcrumb {
            width: 100%;
            height: 44px;
            padding: 0;
            padding-top: 13px;
            padding-bottom: 10px;
        }
        .customers {
            width: 100%;
            height: 117px;
            background: #fff;
            padding: 10px 0;
            .new-customer {
                margin-right: 7px;
                .btn-new-customer {
                    width: 120px;
                    height: 97px;
                    background: #fff;
                }
            }
            .carousel {
                position: relative;
                margin-left: 127px;
                background: red;
                width: 790px;
                .p-left {
                    padding: 0;
                    width: 15px;
                    position: absolute;
                    left: -10px;
                    top: 40px;
                }
                .p-right {
                    padding: 0;
                    width: 15px;
                    position: absolute;
                    right: 100px;
                    top: 40px;
                }
                .institutional-clients {
                    margin-right: 7px;
                    .btn-new-customer {
                        width: 187px;
                        height: 97px;
                        border-radius: 2px;
                        background: #F3FAF6;
                        position: relative;
                        .close {
                            position: absolute;
                            right: 5px;
                            top: 5px;
                            font-size: 20px;
                        }
                        .c-icon {
                            font-size: 40px;
                            margin-top: 15px;
                            margin-bottom: 5px;
                            color: #3ca358;
                        }
                        .person {
                            color: #FFBB37;
                        }

                    }
                }
            }
            .customer-share {
                width: 220px;
                height: 97px;
                float: right;
                .t-button {
                    width: 120px;
                    height: 28px;
                    padding-left: 0px;
                    font-size: 12px;
                    .memory {
                        padding-left: 5px;
                    }
                }
                .service-line {
                    height: 50px;
                    line-height: 50px;
                    font-size: 12px;
                }

            }

        }
        .views-menu {
            background: #fff;
            height: 100;
            .menu--horizontal li {
                border-bottom: none;
            }
            .viewContent {
                .tab-title {
                    font-size: 14px;
                    padding: 10px 0 0 20px;
                }
                .tab {
                    ul, li {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    padding-left: 5px;
                    .tabname {
                        font-size: 12px;
                    }
                    ul li > p {
                        float: left;
                        width: 33.3%;
                        span:nth-child(1) {
                            display: inline-block;
                            width: 100px;
                        }
                    }
                }
            }
        }

    }
</style>
