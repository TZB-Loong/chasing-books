import {ajax} from '../util/http'; //http 请求封装
import { stringify } from 'qs';


export async function queryBookshelf(params) {
  return await ajax('ranking/gender');
}
