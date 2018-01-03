
Page({
  data: {
    text: "50°五粮液百年福根500ml",
    text1: "￥290",
    text2: "￥320",
    text3: "358",
    text4: "主题标签：商务/礼品/招待/ 宴席 / 祝寿 / 聚会...",
    text5: "赠送礼品：100ml原浆小酒..",
    text6: "五粮液",
    text7: "浓香型",
    text8: "5箱起订（1箱6瓶）起订",
    num: 30,
    minusStatus: 'disabled',
    text9: "产地：中国，四川 ",
    text10: "每箱套数：6 ",
    text11: "使用场合：商务用酒，礼节拜访",
    text12: " 净含量：1000ml",
    text13: "酒厂：宜宾五粮液股份有限公司 ",
    text14: "包装类型：单瓶装 ",
    text15: "酒精度：52°",
    text16: "贮藏条件：常温、干燥、阴凉、避光",
    text17: "箱规：1*6",
    text18: "每套瓶数：1",
    text19: "原料：水、高粱、大米、糯米、小麦、玉米",
  },
  tap: function () {
    wx.redirectTo({
      url: '../../welcome/welcome',
    })

  },
  ontap: function () {
    this.setData({
      num: this.data.num
    }),
      wx.redirectTo({
        url: '../../car/car',
      })
    wx.setStorageSync('num', this.data.num);
  },

  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于30时，才可以减 
    if (num > 30) {
      num--;
    }
    // 只有大于6件的时候，才能normal状态，否则disable状态 
    var minusStatus = num <= 30 ? 'disabled' : 'normal';
    // 将数值与状态写回 
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1 
    num++;
    // 只有大于6件的时候，才能normal状态，否则disable状态 
    var minusStatus = num < 30 ? 'disabled' : 'normal';
    // 将数值与状态写回 
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },

  onLoad: function (options) {
    console.log(options.id);

  },


})