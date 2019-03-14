import {ajax} from '../util/http'; //http 请求封装
import { stringify } from 'qs';


export async function queryBookshelf(params) { //各大排行榜列表
  return await ajax('api/ranking/gender');
}

export async function queryranking(params) { //单一排行榜列表
  return await ajax('api/ranking/'+params);
}

export async function queryDetail(params) { //书籍详情列表
  return await ajax('api/book/'+params);
}

export async function queryReview(params){ //书籍详情评论列表
  return await ajax(`api/post/review/by-book?${stringify(params)}`)
}

export async function querbookList(params){ //按主题获取书单列表
  return await ajax(`api/book/by-categories?${stringify(params)}`)
}

export async function querychapterList(params){ //书籍章节列表
  return await ajax("api/mix-atoc/"+params+"?view=chapters")
}

export async function querychaperDetail(params) { //书籍详情
  return await ajax("chapter/chapter/"+params)
}

export async function querythemList(params){ //主题书单列表
   return await ajax(`api/book-list?${stringify(params)}`)
}

export async function querythemDetail(params) { //书单详情列表
  return await ajax('api/book-list/'+params)
}

export async function querycategoryList(params) { //类别列表
  return await ajax('api/cats/lv2/statistics')
}

export async function querycategoryDetail(params) { //按类别获取书单列表
  return await ajax(`api/book/by-categories?${stringify(params)}`)
}
