import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "id|1-3": 0, // 产生1-3的随机数
    "username": "@cname", // 随机产生一个中文名称
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})
