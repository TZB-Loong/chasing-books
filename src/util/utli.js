export function isfalse(param){
  //判断某个对象里面是否为空（数组，对象里面的值{应该将函数排除在外}）
  let r = ['', undefined, null, false].indexOf(param) >= 0;
  if (r === false) {
    if (param.length === 0) {
      // if (typeof param=='function'){
      //     r = false;
      // }
      // else if  ( param.length === 0 ){
      r = true;
    } else if (param.construtor) {
      r = Object.keys(param).length === 0;
    } else if (typeof param == 'object') {
      r = Object.keys(param).length === 0;
    }
  }
  return r;
}
