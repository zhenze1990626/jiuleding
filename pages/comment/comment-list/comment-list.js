
Page({
  data: {
    text: "定制点评",
    selectedSrc: '../../../images/center/selected.png',
    key:[1,2,3,4,5]

  },
  tap:function(){
   wx.redirectTo({
     url: '../../comment/comment'
   })
  },

  onLoad: function (options) {
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    let date = myDate.getDate();
    let h = myDate.getHours();
    let m = myDate.getMinutes();
    let s = myDate.getSeconds();
    var name = wx.getStorageSync('name');
    var user = wx.getStorageSync('user');
    //console.log(user);
    var key = wx.getStorageSync('key');
    this.setData({
      year: year,
      month: month,
      date: date,
      h: h,
      m: m,
      s: s,
      name:name,
      user:user,
      key:key
    });
  },

  // text: function (e) {
  //   this.setData({
  //     name: e.detail.value
  //   })
  // },
  // success: function () {
  //   var name = this.data.name;
  //   var regUser = /^[\u4E00-\u9FA5]+$/;
  //   if (!regUser.test(name)) {
  //     wx.showToast({
  //       title: '请输入全中文评价！！',
  //     })
  //   }
  //   else {
  //     wx.navigateTo({
  //       url: './comment-list/comment-list',
  //     })
  //   }

  // },


})
