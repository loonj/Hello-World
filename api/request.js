// get 请求
const getData=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    my.request({
      url: url,
      headers: headers,
      method: 'GET',
      data: params,
      success: res => {
        resolve(res.data);
      },
      fail: err => {
        reject(err);
      },
      complete: () => {
        
      }
    });
  });
}

//post 请求
const postData=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    my.request({
      url: url,
      headers: headers||{'content-type':'application/json' },
      method: 'POST',
      data: params,
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      },
      complete: () => {
        
      }
    });
  });
}

module.exports={
  getData,
  postData
}