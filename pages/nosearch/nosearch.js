
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    local: [
      {
        goods: "/images/address/wujiuzhizun.png",
        name: "53°茅台王子酒500ml",
        price: 298,
        num: 100,
        number: 1000
      },
      {
        goods: "/images/address/wujiuzhizun.png",
        name: "泸州老窖",
        price: 366,
        num: 500,
        number: 2000
      },
      {
        goods: "/images/address/wujiuzhizun.png",
        name: "泸州老窖",
        price: 366,
        num: 500,
        number: 2000
      },

      {
        goods: "/images/address/wujiuzhizun.png",
        name: "泸州老窖",
        price: 366,
        num: 500,
        number: 2000
      },

      {
        goods: "/images/address/wujiuzhizun.png",
        name: "泸州老窖",
        price: 366,
        num: 500,
        number: 2000
      },

      {
        goods: "/images/address/wujiuzhizun.png",
        name: "泸州老窖",
        price: 366,
        num: 500,
        number: 2000
      },

      {
        goods: "/images/address/wujiuzhizun.png",
        name: "泸州老窖",
        price: 366,
        num: 500,
        number: 2000
      },
    ]
  },
  onLoad: function () {

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }


})  