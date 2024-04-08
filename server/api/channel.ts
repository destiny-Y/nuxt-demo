// get   /api/channel
export default defineEventHandler(() => {
  return {
    /* status:200,
    body:{
      message:"success",
      data:[{name:"小鲁班",age:13},
        {name:"阿离",age:20},
        {name:"百里守约",age:21},
        {name:"嫦娥",age:19}
      ]
    } */
    data:[{name:"小鲁班",age:13},
      {name:"阿离",age:20},
      {name:"百里守约",age:21},
      {name:"嫦娥",age:19}
    ]
  }
})