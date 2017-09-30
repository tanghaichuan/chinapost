/**
 * create by tanghc at 2017/9/28
 * 同一API管理模块
 */
import invokers from '../../../invokers'
// clientmanage模块获取特征值调用服务接口
export const queryCharacterSpecUrl = invokers.services.clientmanage.queryCharacterSpec
export const queryCustomerCharacterByIdUrl = invokers.services.clientmanage.queryCustomerCharacterById
export const queryCustomerIdenCharacterByIdUrl = invokers.services.clientmanage.queryCustomerIdenCharacterById
export const queryCustomerContMediumCharacterByIdUrl = invokers.services.clientmanage.queryCustomerContMediumCharacterById
export const queryCustomerAddressCharacterByIdUrl = invokers.services.clientmanage.queryCustomerAddressCharacterById
export const queryCustomerRelPersonCharacterByIdUrl = invokers.services.clientmanage.queryCustomerRelPersonCharacterById
export const urlArr = [queryCharacterSpecUrl, queryCustomerIdenCharacterByIdUrl, queryCustomerContMediumCharacterByIdUrl, queryCustomerAddressCharacterByIdUrl, queryCustomerRelPersonCharacterByIdUrl]
export const saveCustomerInfo = invokers.services.clientmanage.saveCustomerInfo