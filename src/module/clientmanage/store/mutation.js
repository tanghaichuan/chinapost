import * as constant from './constant'

export default {
    [constant.LOAD_FORM_ID](state, payload) {
        state.id = payload
    },
    [constant.LOAD_CUS_FORM_LIST](state, payload) {
        Object
            .keys(state.cusRenderFormList)
            .forEach((item, index, array) => {
                // 拉取原始模型数据
                state.cusRenderFormList[item].formItem[0].chaValue = payload[index].chaValue
            })
    },
    [constant.LOAD_CUS_EXT_FORM_LIST](state, payload) {
        state.cusExtFormList = payload
    },
    /**
     *  创新新结构映射给cusDataFormList。
     *  assing:创建新对象,结构共享,数据共享。
     *  assing:稳定形结构
     */
    [constant.SET_CUS_FORM_LIST](state, payload) {
        let obj = Object.assign({}, state.cusDataFormList, {
            systemParams: {},
            businessParams: {
                customerId: "-1",
                chaValue: [
                    ...payload.businessParams.formItem[0].chaValue,
                    ...payload.businessParams.formItem[0].addFormItem || []
                ],
                idenList: payload.idenList.formItem,
                contMediumList: payload.contMediumList.formItem,
                addressList: payload.addressList.formItem,
                relPersonList: payload.relPersonList.formItem
            }
        })
        // 去除特征值无用属性
        let tmp = obj.businessParams
        _.forEach(tmp, (value, key) => {
            if (key === 'chaValue') {
                tmp[key] = _.map(value, item => {
                    return _.pick(item, ['CODE', 'VALUE'])
                })
            } else if (key !== 'customerId') {
                _.forEach(tmp[key], (item, index) => {
                    tmp[key][index] = _.map(item.chaValue, inx => {
                        return _.pick(inx, ['CODE', 'VALUE'])
                    })
                })
                //console.log(tmp[key]);
            }
        })
        state.cusDataFormList = obj
    }
}