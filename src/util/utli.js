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
export function dateDiff(oldTime){ //计算某一时间与当前时间的时间差

  //获取指定时间的毫秒值，需要把时间格式转成此格式 2018/01/2 15:59:07
  // let oldTime_fmt = (new Date(fmt)).getTime();
  let oldTime_fmt  = (new Date(oldTime)).getTime();
  //获取当前时间的毫秒值
  let nowTime = Date.now();
  // console.log("当前的时间毫秒值 nowTime == " + nowTime);
  //计算时间差
  let diff = (nowTime - oldTime_fmt)/1000/60/60;

  if(diff<24){
    return Math.floor(diff) +'小时前'
  }else if(diff<24*30) {
    return Math.floor(diff/24) +'天前'
  }else if(diff<24*30*12){
    return Math.floor(diff/(24*30)) +'月前'
  }else{
    return Math.floor(diff/(24*30*12))+'年前'
  }
}

export function getRandomColor (){ // 生成随机颜色(16进制)
    return '#'+Math.random().toString(16).substr(-6);
}
