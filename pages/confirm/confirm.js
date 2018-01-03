
var postData = require('../../data/car-data.js');
Page({

  data: {
    confirm:'确认订单',
    user: '',
    phone: '',
    detail: '',
    address: '',
    number: '',
    input:'',

  },
  back:function(){
   wx.redirectTo({
     url: '../address/address',
   })


  },
  onLoad: function (options) {
    // 取用户输入的值
    var user = wx.getStorageSync('user');
    var phone = wx.getStorageSync('phone');
    var detail = wx.getStorageSync('detail');
    var address = wx.getStorageSync('address');
    var number = wx.getStorageSync('number');
    var totalPrice = wx.getStorageSync('totalPrice');
    this.setData({ user: user });
    this.setData({ phone: phone });
    this.setData({ detail: detail });
    this.setData({ address: address });
    this.setData({ number: number });
    this.setData({ totalPrice: totalPrice});
    //数量
    var num = wx.getStorageSync('num');
    this.setData({num:num});
    console.log(options.id);
    //购物车赋值
    this.setData({
      post_key: postData.postList,
      obj: options.obj
    });

  },


  confirm:function(){
   wx.redirectTo({
     url: '../payment/payment',
   })

  },

  onpost: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
  },



})