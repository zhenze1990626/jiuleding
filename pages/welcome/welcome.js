var postData = require('../../data/welcome-data.js')
Page({
  data:{
   xinxi1:"五粮液蓝屏",
   xinxi2:"五粮液红萍",
   xinxi3: "五粮液5l装",
   jiage1:"￥76.00/瓶",
   jiage2: "￥176.00/瓶",
   img1:"/images/welcome/zhizun.png",
   img2:"/images/welcome/xinfei.png",
   img3: "/images/welcome/zhizunlan.png"
  },
  onLoad: function (options) {
    this.setData({
      post_key: postData.postList
    });
  },

  onpost: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    // wx.navigateTo({
    //   url: 'post-detail/post-detail?id=' + postId
    // })
  },
  onpost2: function (event) {
    var postId2 = event.currentTarget.dataset.postid;
    console.log(postId2);
  }
})