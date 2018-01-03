Page({ 
  data:{
   name:"还未设置昵称",
   value:"0",
   value2: "1",
   text2:"15837825762",
   talk:1


  },
  name:function(){
   wx.redirectTo({
     url: '../name/name',
   })

  }


})