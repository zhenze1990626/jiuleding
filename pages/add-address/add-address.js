Page({
  data:{
   text:"收货地址管理",
  },
  url:function(){
   wx.navigateTo({
     url: '../address/address',
   })
  },

  onLoad: function (options) {
    var user = wx.getStorageSync('user');
    var phone = wx.getStorageSync('phone');
    var detail = wx.getStorageSync('detail');
    var address = wx.getStorageSync('address');
    var number = wx.getStorageSync('number');
    this.setData({ user: user });
    this.setData({ phone: phone });
    this.setData({ detail: detail });
    this.setData({ address: address });
    this.setData({ number: number });
  }
})