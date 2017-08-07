import * as constants from './constant'

export default {
  [constants.CHANGE_MENU](state, payload) {
    state.showHistoryMenu = payload.showHistoryMenu
  },
  [constants.NEW_TABS](state, payload) {
    state.tabList.push(payload)
  }
}
