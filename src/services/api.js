import {ajax} from '../util/http'; //http 请求封装
import { stringify } from 'qs';


export async function queryBookshelf(params) { //各大排行榜列表
  return await ajax('ranking/gender');
}

export async function queryranking(params) { //单一排行榜列表
  return await ajax('/ranking/'+params);
}

export async function queryDetail(params) { //书籍详情列表
  return await ajax('/book/'+params);
}
