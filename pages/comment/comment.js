
var app = getApp()
Page({
  data: {
    text:"我的点评",
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/center/normal.png',
    selectedSrc: '../../images/center/selected.png',
    key: 0,
    name:''
    
  },
  text: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    console.log(key);
    this.setData({
      key: key
    })
  },
  success: function () {
    var name = this.data.name;
    console.log(this.data.key);
    wx.setStorageSync('name', this.data.name);
    wx.setStorageSync('key', this.data.key);
    var regUser = /^[\u4E00-\u9FA5]+$/  ;
    if (!regUser.test(name)) {
      wx.showToast({
        title: '请输入全中文评价！！',
      })
    }
    else if(this.data.key==0){
      wx.showToast({
        title: '您还未进行星级评价',
      })
    }
    else {
      wx.redirectTo({
        url: './comment-list/comment-list',
      })
    }

  },


})
