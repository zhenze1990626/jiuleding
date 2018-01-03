Page({
  data: {
    text:"收货地址管理",
    text2:"保存",
    user: '',
    phone: '',
    detail: '',
    address: '',
    number: '',
    flag:0,
    name1:'',
    name2: '',
    name3: '',
    name4: '',
    name5: ''
  },
  onLoad: function (options) {

  },
  back:function(){
  wx.redirectTo({
    url: '../car/car',
  })


  },
  //获取值
  inputUser: function (e) {
    this.setData({
      user: e.detail.value
    
    })
  },
  inputPhone: function (e) {
    this.setData({
      phone: e.detail.value,

    })
  },
  inputDetail: function (e) {
    this.setData({
      detail: e.detail.value,

    })
  },
  inputAdress: function (e) {
    this.setData({
      address: e.detail.value,

    })
  },
  inputNumber: function (e) {
    this.setData({
      number: e.detail.value,

    })
  },
  //返回

//保存变确认
  save:function(){
    if (this.data.user!= '' && this.data.phone!= '' && this.data.detail!= '' && this.data.address!= '' && this.data.number!= ''){
    this.setData({
      text2:"确认",
      flag:1
        });
      }
   },
//确认跳转
  save2: function () {
    if (this.data.text2 == '确认') {
      wx.setStorageSync('user', this.data.user);
      wx.setStorageSync('phone', this.data.phone);
      wx.setStorageSync('detail', this.data.detail);
      wx.setStorageSync('address', this.data.address);
      wx.setStorageSync('number', this.data.number);
      wx.redirectTo({
      url: '../confirm/confirm'
      
      })
    }
  },
// 删除
   delete:function(){
     this.setData({
       name1: '',
       name2: '',
       name3: '',
       name4: '',
       name5: ''
     });
   },




})