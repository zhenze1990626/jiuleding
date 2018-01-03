var postData = require('../../data/car-data.js')
Page({
  data:{
    count:"结算",
    selectAllStatus: false ,
  },
  onLoad: function (options) {
    console.log(options.id);
    var num = wx.getStorageSync('num');
    this.setData({
      post_key: postData.postList,
      obj:options.obj,
      num:num
    });
    
  },
  write:function(){
    this.setData({
     number:'',
     count:"删除"
    })
  },
  tap:function(){
  wx.redirectTo({
    url: '../welcome/detail/detail',
  })
  },
  /**
 * 当前商品选中事件
 */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let post_key = this.data.post_key;
    const selected = post_key[index].selected;
    post_key[index].selected = !selected;
    this.setData({
      post_key: post_key
    });
    this.getTotalPrice();
  },
  /**
 * 删除购物车当前商品
 */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let post_key = this.data.post_key;
    post_key.splice(index, 1);
    this.setData({
      post_key: post_key
    });
      this.getTotalPrice();
  },
  /**
 * 购物车全选事件
 */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let post_key = this.data.post_key;
    for (let i = 0; i < post_key.length; i++) {
      post_key[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      post_key:post_key
    });
    this.getTotalPrice();
  },
  /**
   * 计算总价
   */
  getTotalPrice() {
    let num=this.data.num;
    let post_key = this.data.post_key;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < post_key.length; i++) {         // 循环列表得到每个数据
      if (post_key[i].selected) {                     // 判断选中才会计算价格    
        total += num * post_key[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      post_key: post_key,
      totalPrice: total
    });
    wx.setStorageSync('totalPrice', this.data.totalPrice);
  },
  click:function(){
    if (this.data.totalPrice > 0 && this.data.count != "删除"){
    wx.redirectTo({
      url: '../address/address',
    })
        }
    else if (this.data.count == "删除" && this.data.totalPrice > 0 ){
      this.setData({
        post_key:'',
        totalPrice:'',
        selectAllStatus: false
      })
    }
  },
  onpost: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
  },




})