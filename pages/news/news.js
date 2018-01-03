
Page({
   data:{
     text: "已读消息",
     post:[
       {
  
       image: "/images/center/person2.png",
       text2: "低至30元的平价酒，多列，河南省白酒，汾酒等等等你等等等",
       },
       {
         image: "/images/center/person2.png",
         text2: "低至30元的平价酒，多列，河南省白酒，汾酒等等等你等等等",
       },
       {
         image: "/images/center/person2.png",
         text2: "低至30元的平价酒，多列，河南省白酒，汾酒等等等你等等等",
       },
       {
         image: "/images/center/person2.png",
         text2: "低至30元的平价酒，多列，河南省白酒，汾酒等等等你等等等"
       },
       {
         image: "/images/center/person2.png",
         text2: "低至30元的平价酒，多列，河南省白酒，汾酒等等等你等等等",
       },
       {
         image: "/images/center/person2.png",
         text2: "低至30元的平价酒，多列，河南省白酒，汾酒等等等你等等等",
       },
          ]
   },
   onLoad: function (options) {
     let myDate = new Date();
     let  year = myDate.getFullYear();
     let  month = myDate.getMonth() + 1;
     let date = myDate.getDate();
     let  h = myDate.getHours();
     let m = myDate.getMinutes();
     let s = myDate.getSeconds();
     this.setData({
       year:year,
       month:month,
       date:date,
       h:h,
       m:m,
       s:s

     });
    }
  })
