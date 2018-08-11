import axios from 'axios'
import qs from 'qs'
import {options,params} from "./config"
//import {getCookie} from '../common/js/fun'








//轮播 banner

export function banner() {
  const data = {
      limit:1,
      page:1
    },
    url = options.proUrl+'/portal/portalSys/dcAdvertising';
  return axios.get(url,qs.stringify(data)).then((res) => {
    return  Promise.resolve(res)
  })
}



//城市列表
export function cityList() {
     const url = 'http://10.10.100.11:7878/';
    // const url = options.locationUrl+':7878/';
  return axios.get(url).then((res) => {
    return  Promise.resolve(res)
  })
}

/*首页*/

//借款新口子
export function newCut(par) {
  const url = options.url+'/portal/portalProduct/NewCut';
  const data = Object.assign({},par,{merchantcode:params.merchantcode,limit:params.limit});
  console.log(data);
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}

/*  2:身份大额度,身份小额度 */
export function IDcardType(par) {
  const url = options.url+'/portal/portalProduct/identityLines';
  const data = Object.assign({},par,{merchantcode:params.merchantcode,limit:params.limit});
  console.log(data);
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}

/*  2:不上征信 */
export function notCreditType(par) {
  const url = options.url+'/portal/portalProduct/notCredit';
  const data = Object.assign({},par,{merchantcode:params.merchantcode,limit:params.limit});
  console.log(data);
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}

/*4：芝麻分 和 信用卡 和  高通过率 和 免息借钱*/



export function sesamePointsType(par) {
  const url = options.url+'/portal/portalProduct/sesamePoints';
  const data = Object.assign({},par,{merchantcode:params.merchantcode,limit:params.limit});
  console.log(data);
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}

//7天贷
export function daysProductType(par) {
  const url = options.url+'/portal/portalProduct/daysProduct';
  const data = Object.assign({},par,{merchantcode:params.merchantcode,limit:params.limit});
  console.log(data);
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}

//6:本周放款王
export function clickNumberType(par) {
  const url = options.url+'/portal/portalProduct/clickNumber';
  const data = Object.assign({},par,{merchantcode:params.merchantcode,limit:params.limit});
  console.log(data);
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}

/*贷款精品 */

export function selectProduct(par) {
  const url = options.url+'/portal/portalProduct/selectProduct';
  const data = Object.assign({},par,{merchantcode:params.merchantcode});
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}




/*热门产品*/
export function hotProduct(par) {
  const url = options.url+'/portal/portalProduct/hotProduct';
  const data = Object.assign({},par,{merchantcode:params.merchantcode,limit:params.limit});
  return axios.get(url,{params:data}).then((res) => {
    return  Promise.resolve(res)
  })
}





