const app=getApp();

Page({
  //声明页面数据
  data:{
    todos:null,
    user:null,
  },

  onLoad(){
    app.getUserInfo().then(
      user=>{
        console.log(user);
        this.setData({
          user:user
        });
      }
    );
  },

  
  onShow(){
    this.setData({todos: app.todos});
  },

  //checkbox-group 事件处理函数
  onTodoChanged(e){
    const checkedTodos=e.detail.value;
    console.log(checkedTodos);

    let tempTodos=[];
    app.todos.array.forEach(item => {
      tempTodos.push(
        {
          text:item.text,
          completed:checkedTodos.indexOf(item.text)>-1
        }
      );
    });
    app.todos=tempTodos;
    

    // app.todos=app.todos.map(item=>{
    //   let todo={};
    //   todo.text=item.text;
    //   todo.completed=checkedTodos.indexOf(item.text)>-1;
    //   return todo;
    // });

    // app.todos=app.todos.map(item=>({
    //   ...item,
    //   completed:checkedTodos.indexOf(item.text)>-1
    // }));
    

    this.setData({todos:app.todos});
  },

  addTodo(){
    my.navigateTo({
      url: '../addTodo/addTodo'
    });
  },

  gotoNineGrid(){
    my.navigateTo({
      url: '../nineGrid/nineGrid'
    });
  }

});
