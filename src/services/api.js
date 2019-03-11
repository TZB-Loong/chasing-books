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

export async function queryReview(params){
  // return await ajax('api/post/review/by-book?'+stringify(params))
  return await ajax(`api/post/review/by-book?${stringify(params)}`)
}
