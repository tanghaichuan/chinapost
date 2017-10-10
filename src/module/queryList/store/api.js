import invokers from '../../../invokers'

// queryList模块接口
export const queryCustomerListByName = invokers.services.QUERY_LIST.queryCustomerListByName // 按姓名查询
export const queryCustomerListByCustomerCode = invokers.services.QUERY_LIST.queryCustomerListByCustomerCode // 按客户编码查询
export const queryCustomerListByIdenNr = invokers.services.QUERY_LIST.queryCustomerListByIdenNr // 按证件号码查询
export const queryCustomerListByCustomerManagerId = invokers.services.QUERY_LIST.queryCustomerListByCustomerManagerId // 查询客户列表
export const judgeCustomerUnicity = invokers.services.QUERY_LIST.judgeCustomerUnicity