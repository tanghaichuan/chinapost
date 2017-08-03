import Vue from 'vue'

export default new Vue({
  data() {
    return {
      lang: null
    }
  },
  created() {
    const navLang = navigator.language
    const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : 'zh-CN'
    this.lang = window.localStorage.getItem('aid-language') || localLang
    window.localStorage.setItem('aid-language', this.lang)
    this.$on('on-change-lang', (lang, path) => {
      this.lang = lang
      window.localStorage.setItem('aid-language', lang)
      window.location.href = path
    })
  }
})
