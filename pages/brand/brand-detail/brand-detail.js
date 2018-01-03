Page({
  data:{
  text:"五粮液",
  img1: "/images/detail/background.png",
  img2:"/images/detail/chuanqi.png",
  img3:"/images/detail/wuliangye2.png",
  image:"/images/detail/back.png",
  post:[
    {
      img4: "/images/detail/zixun.png",
      text2:"国产航母完全出坞正在转向：舰艏彩旗高清靓图",
      postId:1
    },
    {
      img4: "/images/detail/zixun.png",
      text2: "苏酒集团举行2017封藏大典 宿迁市长“三问三答”辩证侃生态！",
      postId: 2
    },
    {
      img4: "/images/detail/zixun.png",
      text2: "苏苏酒集团举行2017封藏大典 宿迁市长“三问三答”辩证侃生态！",
      postId: 3
    },


    ]

  },


  ontap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    // wx.navigateTo({
    //   url: 'post-detail/post-detail?id=' + postId
    // })
  },
  onLoad: function (options) {
  
  },

})