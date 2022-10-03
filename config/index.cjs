/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3241d2d722bc93cf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e161314b7b666abeda9fe87b4329a600',

  PROVINCE: '安徽',
  CITY: '蚌埠',

  USERS: [
    {
      // 想要发送的人的名字
      name: '勇宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6Gnm6ORZaNxYdXvXHwrsDssVR90',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'e7xPIfwEWs_OcoXYEAQC7oH7FlnptZo1ouh8lg1myyQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-13',
    },
  ],

}

module.exports = USER_CONFIG

