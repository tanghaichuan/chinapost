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
export const saveCustomerInfo = invokers.services.clientmanage.saveCustomerInfo // 保存客户信息
export const queryIndustryTypeList = invokers.services.clientmanage.queryIndustryTypeList // 查询行业类型树
export const queryOrgTreeByCustomerId = invokers.services.clientmanage.queryOrgTreeByCustomerId // 根据客户ID查询下属的组织结构树
export const createOrgTreeNode = invokers.services.clientmanage.createOrgTreeNode // 建立下属机构
export const modifyOrgTreeNode = invokers.services.clientmanage.modifyOrgTreeNode // 修改一个组织机构节点的名称
export const deleteOrgTreeNode = invokers.services.clientmanage.deleteOrgTreeNode // 删除一个组织机构节点的名称
