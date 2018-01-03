Page({
 imgClick:function(){
   console.log(1);
 },
 personClick:function(){
   wx.redirectTo({
     url:'../welcome/welcome'
   })
 }


})