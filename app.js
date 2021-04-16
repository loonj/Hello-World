//const api=require('./api/request');
const api=require('./http/fetch');

App({

    todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 支付宝小程序', completed: false },
  ],


  globalData:{
    userInfo:null,
    api:api
  },

  getUserInfo(){
    return new Promise((resolve,reject)=>{
      if(this.globalData.userInfo){
        resolve(this.globalData.userInfo);
      }

      my.getAuthCode({
        scopes: ['auth_user'], //auth_user 主动授权
        success: authCode => {
          console.info(authCode);
          my.getAuthUserInfo({
            success: res=>{
              this.globalData.userInfo=res;
              resolve(this.globalData.userInfo);
            },
            fail:()=>{
              reject({});
            }
          });
        },
        fail: () => {
          reject({});
        },
        complete: () => {
          
        }
      });
    });
  },

  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
