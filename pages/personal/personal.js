const app=getApp();

Page({
  data: {
    user:null
  },

  onLoad() {
    app.getUserInfo().then(user=>{
      console.log(user);
      this.setData({user});
    },err=>console.log(err));
  },
});
