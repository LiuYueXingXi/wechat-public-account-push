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

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '勇宝贝',
      province:'江苏',
      city:'南京',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6Gnm6ERiXqR4EwXjJGKr7oQ2mIo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Gk7oSqMYpHX4CD7B2Wx61cg0UXYqFkV4JHWDxIAiT6Q',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '勇宝贝', year: '1993', date: '03-22',
        },
         {
          type: '*生日', name: '娟宝贝', year: '1994', date: '10-21',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2021', date: '10-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2013-01-01' },
        { keyword: 'marry_day', date: '2021-10-04' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '勇宝贝',
      province:'江苏',
      city:'南京',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6Gnm6ORZaNxYdXvXHwrsDssVR90',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Gk7oSqMYpHX4CD7B2Wx61cg0UXYqFkV4JHWDxIAiT6Q',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '勇宝贝', year: '1993', date: '03-22',
        },
         {
          type: '*生日', name: '娟宝贝', year: '1994', date: '10-21',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2021', date: '10-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2013-01-01' },
        { keyword: 'marry_day', date: '2021-10-04' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '美王王',
      province:'安徽',
      city:'合肥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6Gnm6ORZaNxYdXvXHwrsDssVR90',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZoEXWbMcPEfHP6O09MrgRp-OokFv6f9faSCNThMCHRM',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
         {
          type: '*生日', name: '美王王', year: '1993', date: '09-07',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2022', date: '06-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相遇的日子
        { keyword: 'meet_day', date: '2012-08-31' },
        { keyword: 'marry_day', date: '2022-06-12' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '美王王',
      province:'安徽',
      city:'合肥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6Gnm6EkQltXFj2J-SxSZkGMOI7A',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZoEXWbMcPEfHP6O09MrgRp-OokFv6f9faSCNThMCHRM',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
         {
          type: '*生日', name: '美王王', year: '1993', date: '09-07',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2022', date: '06-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相遇的日子
        { keyword: 'meet_day', date: '2012-08-31' },
        { keyword: 'marry_day', date: '2022-06-12' },
      ],
    }
  ],

}

module.exports = USER_CONFIG
