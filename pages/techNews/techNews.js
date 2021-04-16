const app=getApp();
const api=app.globalData.api;

Page({
  data:{
    news:[]
  },

  onLoad(){
    this.getNewsThree();
    this.postLoginTest();
  },

  //第一种写法获取新闻接口数据
  getNewsOne(){
    console.log("获取新闻接口开始");
    api.getData('https://m.aolix.cn/ticket/public/list-news').then(
      res=>{
        console.log('查询成功');
        let tempNews=res.data.map(item=>({
          ...item,
          shortTitle:item.title.length>6?item.title.substring(0,5):item.title
        }));
        console.log(tempNews);
        this.setData({news:tempNews});
      },
      err=>console.log(err)
    );
    console.log("获取新闻接口结束");
  },

  //第二种写法获取新闻接口数据
  async getNewsTwo(){
    console.log("获取新闻接口开始");
    await api.getData('https://m.aolix.cn/ticket/public/list-news').then(
      res=>{
        console.log('查询成功');
        let tempNews=res.data.map(item=>({
          ...item,
          shortTitle:item.title.length>6?item.title.substring(0,5):item.title
        }));
        console.log(tempNews);
        this.setData({news:tempNews});
      },
      err=>console.log(err)
    );
    console.log("获取新闻接口结束");
  },

   //第三种写法获取新闻接口数据
  async getNewsThree(){
    console.log("获取新闻接口开始");
    await api.getData('https://m.aolix.cn/ticket/public/list-news').then(
      res=>{
        console.log('查询成功');
        let tempNews=res.data.map(item=>({
          ...item,
          shortTitle:item.title.length>6?item.title.substring(0,5):item.title
        }));
        console.log(tempNews);
        this.setData({news:tempNews});
      }
    ).catch(
       err=>console.log(err)
    );
    console.log("获取新闻接口结束");
  },

  async postLoginTest(){
    const params={
      name:'800012',
      pwd:'e10adc3949ba59abbe56e057f20f883e'
    };
    await api.postData('https://m.aolix.cn/ticket/public/login',params,null).then(
      res=>console.log(res.data)
    ).catch(err=>console.log(err));
  },
})
