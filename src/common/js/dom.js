// 增加 class 方法
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 判断是否拥有 class 方法
export function hasClass(el, className) {
  let reg = /'(^|\\s)' + className +'(\\s|$)'/
  return reg.test(el.className)
}

// 设置属性方法
export function attr(el, name, val) {

  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
