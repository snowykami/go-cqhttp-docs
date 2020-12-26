(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{378:function(_,v,t){"use strict";t.r(v);var d=t(27),e=Object(d.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[_._v("#")]),_._v(" 事件")]),_._v(" "),t("h2",{attrs:{id:"私聊消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#私聊消息"}},[_._v("#")]),_._v(" 私聊消息")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("message")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("private")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("friend")]),_._v("、"),t("code",[_._v("group")]),_._v("、"),t("code",[_._v("other")])]),_._v(" "),t("td",[_._v("消息子类型, 如果是好友则是 "),t("code",[_._v("friend")]),_._v(", 如果是群临时会话则是 "),t("code",[_._v("group")])])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message_id")])]),_._v(" "),t("td",[_._v("number (int32)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("消息 ID")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message")])]),_._v(" "),t("td",[_._v("message")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("消息内容")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("raw_message")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("原始消息内容")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("font")])]),_._v(" "),t("td",[_._v("number (int32)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("字体")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sender")])]),_._v(" "),t("td",[_._v("object")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("发送人信息")])])])]),_._v(" "),t("p",[_._v("其中 "),t("code",[_._v("sender")]),_._v(" 字段的内容如下：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("nickname")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("昵称")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sex")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("性别, "),t("code",[_._v("male")]),_._v(" 或 "),t("code",[_._v("female")]),_._v(" 或 "),t("code",[_._v("unknown")])])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("age")])]),_._v(" "),t("td",[_._v("number (int32)")]),_._v(" "),t("td",[_._v("年龄")])])])]),_._v(" "),t("p",[_._v("需要注意的是, "),t("code",[_._v("sender")]),_._v(" 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。")]),_._v(" "),t("p",[t("strong",[_._v("快速操作")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("默认情况")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("reply")])]),_._v(" "),t("td",[_._v("message")]),_._v(" "),t("td",[_._v("要回复的内容")]),_._v(" "),t("td",[_._v("不回复")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("auto_escape")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 "),t("code",[_._v("reply")]),_._v(" 字段是字符串时有效")]),_._v(" "),t("td",[_._v("不转义")])])])]),_._v(" "),t("h2",{attrs:{id:"群消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群消息"}},[_._v("#")]),_._v(" 群消息")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("message")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("normal")]),_._v("、"),t("code",[_._v("anonymous")]),_._v("、"),t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("消息子类型, 正常消息是 "),t("code",[_._v("normal")]),_._v(", 匿名消息是 "),t("code",[_._v("anonymous")]),_._v(", 系统提示 ( 如「管理员已禁止群内匿名聊天」 ) 是 "),t("code",[_._v("notice")])])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message_id")])]),_._v(" "),t("td",[_._v("number (int32)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("消息 ID")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("anonymous")])]),_._v(" "),t("td",[_._v("object")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("匿名信息, 如果不是匿名消息则为 null")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message")])]),_._v(" "),t("td",[_._v("message")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("消息内容")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("raw_message")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("原始消息内容")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("font")])]),_._v(" "),t("td",[_._v("number (int32)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("字体")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sender")])]),_._v(" "),t("td",[_._v("object")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("发送人信息")])])])]),_._v(" "),t("p",[_._v("其中 "),t("code",[_._v("anonymous")]),_._v(" 字段的内容如下：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("匿名用户 ID")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("name")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("匿名用户名称")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("flag")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("匿名用户 flag, 在调用禁言 API 时需要传入")])])])]),_._v(" "),t("p",[t("code",[_._v("sender")]),_._v(" 字段的内容如下：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("nickname")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("昵称")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("card")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("群名片／备注")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sex")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("性别, "),t("code",[_._v("male")]),_._v(" 或 "),t("code",[_._v("female")]),_._v(" 或 "),t("code",[_._v("unknown")])])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("age")])]),_._v(" "),t("td",[_._v("number (int32)")]),_._v(" "),t("td",[_._v("年龄")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("area")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("地区")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("level")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("成员等级")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("role")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("角色, "),t("code",[_._v("owner")]),_._v(" 或 "),t("code",[_._v("admin")]),_._v(" 或 "),t("code",[_._v("member")])])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("title")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("专属头衔")])])])]),_._v(" "),t("p",[_._v("需要注意的是, "),t("code",[_._v("sender")]),_._v(" 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。尤其对于匿名消息, 此字段不具有参考价值。")]),_._v(" "),t("p",[t("strong",[_._v("快速操作")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("默认情况")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("reply")])]),_._v(" "),t("td",[_._v("message")]),_._v(" "),t("td",[_._v("要回复的内容")]),_._v(" "),t("td",[_._v("不回复")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("auto_escape")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 "),t("code",[_._v("reply")]),_._v(" 字段是字符串时有效")]),_._v(" "),t("td",[_._v("不转义")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("at_sender")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("是否要在回复开头 at 发送者 ( 自动添加 ) , 发送者是匿名用户时无效")]),_._v(" "),t("td",[_._v("at 发送者")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("delete")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("撤回该条消息")]),_._v(" "),t("td",[_._v("不撤回")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("kick")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("把发送者踢出群组 ( 需要登录号权限足够 ) , "),t("strong",[_._v("不拒绝")]),_._v("此人后续加群请求, 发送者是匿名用户时无效")]),_._v(" "),t("td",[_._v("不踢")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("ban")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("把发送者禁言 "),t("code",[_._v("ban_duration")]),_._v(" 指定时长, 对匿名用户也有效")]),_._v(" "),t("td",[_._v("不禁言")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("ban_duration")])]),_._v(" "),t("td",[_._v("number")]),_._v(" "),t("td",[_._v("禁言时长")]),_._v(" "),t("td",[_._v("30 分钟")])])])]),_._v(" "),t("h2",{attrs:{id:"群文件上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群文件上传"}},[_._v("#")]),_._v(" 群文件上传")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group_upload")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("file")])]),_._v(" "),t("td",[_._v("object")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("文件信息")])])])]),_._v(" "),t("p",[_._v("其中 "),t("code",[_._v("file")]),_._v(" 字段的内容如下：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("id")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("文件 ID")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("name")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("文件名")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("size")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("文件大小 ( 字节数 )")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("busid")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("busid ( 目前不清楚有什么作用 )")])])])]),_._v(" "),t("h2",{attrs:{id:"群管理员变动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群管理员变动"}},[_._v("#")]),_._v(" 群管理员变动")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group_admin")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("set")]),_._v("、"),t("code",[_._v("unset")])]),_._v(" "),t("td",[_._v("事件子类型, 分别表示设置和取消管理员")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("管理员 QQ 号")])])])]),_._v(" "),t("h2",{attrs:{id:"群成员减少"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群成员减少"}},[_._v("#")]),_._v(" 群成员减少")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group_decrease")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("leave")]),_._v("、"),t("code",[_._v("kick")]),_._v("、"),t("code",[_._v("kick_me")])]),_._v(" "),t("td",[_._v("事件子类型, 分别表示主动退群、成员被踢、登录号被踢")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("operator_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("操作者 QQ 号 ( 如果是主动退群, 则和 "),t("code",[_._v("user_id")]),_._v(" 相同 )")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("离开者 QQ 号")])])])]),_._v(" "),t("h2",{attrs:{id:"群成员增加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群成员增加"}},[_._v("#")]),_._v(" 群成员增加")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group_increase")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("approve")]),_._v("、"),t("code",[_._v("invite")])]),_._v(" "),t("td",[_._v("事件子类型, 分别表示管理员已同意入群、管理员邀请入群")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("operator_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("操作者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("加入者 QQ 号")])])])]),_._v(" "),t("h2",{attrs:{id:"群禁言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群禁言"}},[_._v("#")]),_._v(" 群禁言")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group_ban")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("ban")]),_._v("、"),t("code",[_._v("lift_ban")])]),_._v(" "),t("td",[_._v("事件子类型, 分别表示禁言、解除禁言")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("operator_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("操作者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("被禁言 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("duration")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("禁言时长, 单位秒")])])])]),_._v(" "),t("h2",{attrs:{id:"好友添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#好友添加"}},[_._v("#")]),_._v(" 好友添加")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("friend_add")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("新添加好友 QQ 号")])])])]),_._v(" "),t("h2",{attrs:{id:"群消息撤回"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群消息撤回"}},[_._v("#")]),_._v(" 群消息撤回")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group_recall")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("消息发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("operator_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("操作者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("被撤回的消息 ID")])])])]),_._v(" "),t("h2",{attrs:{id:"好友消息撤回"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#好友消息撤回"}},[_._v("#")]),_._v(" 好友消息撤回")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("friend_recall")])]),_._v(" "),t("td",[_._v("通知类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("好友 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("message_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("被撤回的消息 ID")])])])]),_._v(" "),t("h2",{attrs:{id:"好友戳一戳"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#好友戳一戳"}},[_._v("#")]),_._v(" 好友戳一戳")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notify")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("poke")])]),_._v(" "),t("td",[_._v("提示类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("BOT QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sender_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("target_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("被戳者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("时间")])])])]),_._v(" "),t("h2",{attrs:{id:"群内戳一戳"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群内戳一戳"}},[_._v("#")]),_._v(" 群内戳一戳")]),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),t("p",[_._v("此事件无法在手表协议上触发")])]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notify")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("poke")])]),_._v(" "),t("td",[_._v("提示类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("发送者 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("target_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("被戳者 QQ 号")])])])]),_._v(" "),t("h2",{attrs:{id:"群红包运气王提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群红包运气王提示"}},[_._v("#")]),_._v(" 群红包运气王提示")]),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),t("p",[_._v("此事件无法在手表协议上触发")])]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notify")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("lucky_king")])]),_._v(" "),t("td",[_._v("提示类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("红包发送者id")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("target_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("运气王id")])])])]),_._v(" "),t("h2",{attrs:{id:"群成员荣誉变更提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群成员荣誉变更提示"}},[_._v("#")]),_._v(" 群成员荣誉变更提示")]),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),t("p",[_._v("此事件无法在手表协议上触发")])]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notify")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("honor")])]),_._v(" "),t("td",[_._v("提示类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("成员id")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("honor_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("talkative:龙王")]),_._v(" "),t("code",[_._v("performer:群聊之火")]),_._v(" "),t("code",[_._v("emotion:快乐源泉")])]),_._v(" "),t("td",[_._v("荣誉类型")])])])]),_._v(" "),t("h2",{attrs:{id:"群成员名片更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群成员名片更新"}},[_._v("#")]),_._v(" 群成员名片更新")]),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),t("p",[_._v("此事件不保证时效性, 仅在收到消息时校验卡片")])]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group_card")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("成员id")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("card_new")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("新名片")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("card_old")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("旧名片")])])])]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("PS")]),_._v(" "),t("p",[_._v("当名片为空时 "),t("code",[_._v("card_xx")]),_._v(" 字段为空字符串, 并不是昵称")])]),_._v(" "),t("h2",{attrs:{id:"接收到离线文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接收到离线文件"}},[_._v("#")]),_._v(" 接收到离线文件")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("notice")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("notice_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("offline_file")])]),_._v(" "),t("td",[_._v("消息类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("发送者id")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("file")])]),_._v(" "),t("td",[_._v("object")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("文件数据")])])])]),_._v(" "),t("p",[t("strong",[_._v("file object")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段")]),_._v(" "),t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("name")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("文件名")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("size")])]),_._v(" "),t("td",[_._v("int64")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("文件大小")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("url")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("下载链接")])])])]),_._v(" "),t("h2",{attrs:{id:"加好友请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加好友请求"}},[_._v("#")]),_._v(" 加好友请求")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("request")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("request_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("friend")])]),_._v(" "),t("td",[_._v("请求类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("发送请求的 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("comment")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("验证信息")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("flag")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("请求 flag, 在调用处理请求的 API 时需要传入")])])])]),_._v(" "),t("p",[t("strong",[_._v("快速操作")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("默认情况")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("approve")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("是否同意请求")]),_._v(" "),t("td",[_._v("不处理")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("remark")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("添加后的好友备注 ( 仅在同意时有效 )")]),_._v(" "),t("td",[_._v("无备注")])])])]),_._v(" "),t("h2",{attrs:{id:"加群请求-邀请"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加群请求-邀请"}},[_._v("#")]),_._v(" 加群请求／邀请")]),_._v(" "),t("p",[t("strong",[_._v("事件数据")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("可能的值")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("time")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("事件发生的时间戳")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("self_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("收到事件的机器人 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("post_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("request")])]),_._v(" "),t("td",[_._v("上报类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("request_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("group")])]),_._v(" "),t("td",[_._v("请求类型")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("sub_type")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[t("code",[_._v("add")]),_._v("、"),t("code",[_._v("invite")])]),_._v(" "),t("td",[_._v("请求子类型, 分别表示加群请求、邀请登录号入群")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("group_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("群号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("user_id")])]),_._v(" "),t("td",[_._v("number (int64)")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("发送请求的 QQ 号")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("comment")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("验证信息")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("flag")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("-")]),_._v(" "),t("td",[_._v("请求 flag, 在调用处理请求的 API 时需要传入")])])])]),_._v(" "),t("p",[t("strong",[_._v("快速操作")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字段名")]),_._v(" "),t("th",[_._v("数据类型")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("默认情况")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("approve")])]),_._v(" "),t("td",[_._v("boolean")]),_._v(" "),t("td",[_._v("是否同意请求／邀请")]),_._v(" "),t("td",[_._v("不处理")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("reason")])]),_._v(" "),t("td",[_._v("string")]),_._v(" "),t("td",[_._v("拒绝理由 ( 仅在拒绝时有效 )")]),_._v(" "),t("td",[_._v("无理由")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);