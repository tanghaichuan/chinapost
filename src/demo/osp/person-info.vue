<template>
  <div class="person-info">
    <div class="list-group">
      <a href="#person-info" class="list-group-item list-group-item-action active">
        <i class="aid aid-account-box mr-1 text"></i>
          个人信息
      </a>
      <a href="#company-info" class="list-group-item list-group-item-action">
        <i class="aid aid-certificate mr-1 text"></i>
        认证信息
      </a>
      <a href="#account-info" class="list-group-item list-group-item-action">
        <i class="aid aid-wallet mr-1 text"></i>
        账户
      </a>
    </div>
    <div class="w-75">
      <h6 class="d-flex align-items-center" id="person-info">
        <i class="aid aid-account-box mr-1 text-xxl"></i><span class="text-lg font-weight-bold">GaoFei</span>
        <a href="#" class="text-info ml-auto text-md">账户注销</a>
      </h6>
      <div class="list-group mb-4">
        <div class="list-group-item d-flex align-items-center">
          <span class="text-muted mr-auto">头像</span>
          <img src="../../asset/image/avastar.jpg" alt="" class="rounded" width="50" height="50">
        </div>
      </div>
      
      <div class="list-group mb-4">
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="昵称" class="mb-0">
              <div>Gaffey</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="登陆密码" class="mb-0">
              <div>******</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
      
      <div class="list-group mb-5">
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="电话号码" class="mb-0">
              <div>1334546</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="电子邮件" class="mb-0">
              <div>457567@qq.com</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
      
      <h6 class="d-flex align-items-center" id="company-info">
        <i class="aid aid-certificate mr-1 text-xxl"></i><span class="text-lg font-weight-bold">企业开发者</span>
        <a href="#" class="text-info ml-auto text-md">修改</a>
      </h6>
      <div class="list-group mb-4">
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="公司全称" class="mb-0">
              <div>湖南亚新软件有限公司</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="工商注册号" class="mb-0">
              <div>123456788</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="法人" class="mb-0">
              <div>彭大厨</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
      
      <div class="list-group mb-4">
        <div class="list-group-item d-flex align-items-center">
          <span class="text-muted">营业执照</span>
          <img src="" alt="" class="rounded">
        </div>
      </div>
      
      <div class="list-group mb-5">
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="企业电话" class="mb-0">
              <div>12345678765</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="公司网站" class="mb-0">
              <div>www.asianew.com</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="公司简介" class="mb-0">
              <div>公司简介</div>
            </t-form-item>
            <t-form-item class="ml-auto mb-0">
              <t-button size="sm">修改</t-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
      
      <h6 class="d-flex align-items-center" id="account-info">
        <i class="aid aid-wallet mr-1 text-xxl"></i><span class="text-lg font-weight-bold">银行账户</span>
        <a href="#" @click="modal = true" class="ml-auto text-info text-md">修改</a>
      </h6>
      
      <div class="list-group mb-4">
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="银行" class="mb-0">
              <div>中国工商银行</div>
            </t-form-item>
          </t-form>
        </div>
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="银行帐号" class="mb-0 w-75">
              <div>6226-0573-1098-8745</div>
            </t-form-item>
            <t-form-item label="户名" class="mb-0">
              <div>彭大厨</div>
            </t-form-item>
          </t-form>
        </div>
        
        <div class="list-group-item">
          <t-form :model="formItem" class="d-flex align-items-center">
            <t-form-item label="开户行" class="mb-0">
              <div>湖南省 / 长沙市 / 岳麓区 / 尖山街道 / 尖山支行</div>
            </t-form-item>
          </t-form>
        </div>
      </div>
    </div>
    
    <t-modal v-model="modal">
      <template slot="header">
        <span class="modal-title">修改银行账户信息</span>
      </template>
      <t-form :model="formItem">
        <t-form-item label="银行">
          <t-select v-model="formItem.select" placeholder="请选择">
            <t-option value="中国工商银行">中国工商银行</t-option>
            <t-option value="中国农业银行">中国农业银行</t-option>
            <t-option value="中国银行">中国银行</t-option>
          </t-select>
        </t-form-item>
        <div class="row">
          <div class="col-8">
            <t-form-item label="银行账号">
              <t-input v-model="formItem.input" placeholder="请输入"></t-input>
            </t-form-item>
          </div>
          <div class="col-4">
            <t-form-item label="户名">
              <t-input v-model="formItem.input" placeholder="请输入"></t-input>
            </t-form-item>
          </div>
        </div>
        <t-form-item label="开户行">
          <t-cascader :data="cascader.data" v-model="cascader.value"></t-cascader>
          <t-input v-model="formItem.input" placeholder="请输入" class="mt-2"></t-input>
        </t-form-item>
      </t-form>
      <template slot="footer">
        <t-button type="primary" size="lg">完成</t-button>
      </template>
    </t-modal>
  </div>
</template>
<script>
  export default {
    data () {  // store data
      return {
        isOpen: true,
        accordion: true,
        openPosition: 'down',
        modal: false,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          rangeDate: [],
          singleYearVal: '',
          slider: [20, 50],
          textarea: ''
        },
        cascader:{
          value: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
          data: [{
            value: 'beijing',
            label: '北京',
            children: [
              {
                value: 'gugong',
                label: '故宫'
              },
              {
                value: 'tiantan',
                label: '天坛'
              },
              {
                value: 'wangfujing',
                label: '王府井'
              }
            ]
          }, {
            value: 'jiangsu',
            label: '江苏',
            children: [
              {
                value: 'nanjing',
                label: '南京',
                children: [
                  {
                    value: 'fuzimiao',
                    label: '夫子庙',
                  }
                ]
              },
              {
                value: 'suzhou',
                label: '苏州',
                children: [
                  {
                    value: 'zhuozhengyuan',
                    label: '拙政园',
                  },
                  {
                    value: 'shizilin',
                    label: '狮子林',
                  }
                ]
              }
            ],
          }]

        }
      }
    },
    props: { // props data
    },
    computed: {
    },
    methods: { // methods
      openOrClose () {
        this.isOpen = !this.isOpen
        this.accordion = !this.accordion
        this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
      }
    },
    created () { // init entry
    }
  }
</script>
