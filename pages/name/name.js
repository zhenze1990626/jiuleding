Page({
  data: {
    img:"/images/detail/back.png",
    text:"修改昵称",
    text2:"完成"

  },
  blur:function(e){
    this.setData({
      user:e.detail.value
    })
  },
  success:function(){
   var user=this.data.user;
   var regUser = /[A-Za-z0-9_-{1,20}]/;
   if(!regUser.test(user)){
     wx.showToast({
       title: '您输入的用户名有误',
                 })
     }
   else{
     wx.navigateTo({
       url: '../welcome/welcome',
                  })
     }

   }




  // ontap: function (event) {
  //   var postId = event.currentTarget.dataset.postid;
  //   console.log(postId);
  //   // wx.navigateTo({
  //   //   url: 'post-detail/post-detail?id=' + postId
  //   // })
  // },
  // onLoad: function (options) {

  // },

})