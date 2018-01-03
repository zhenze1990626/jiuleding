Page({
  data: {
    postbrand: [
      {
        img1: "/images/welcome/wuliangye.png",
        img2: "/images/welcome/fenjiu.png",
        postId: 0,
        postId2: 1
      },
      {
        img1: "/images/welcome/laojiao.png",
        img2: "/images/welcome/maotai.png",
        postId: 2,
        postId2: 3
      },



    ]

  },
  ontap1: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
  },
  ontap2: function (event) {
    var postId2 = event.currentTarget.dataset.postid;
    console.log(postId2);
  }


})