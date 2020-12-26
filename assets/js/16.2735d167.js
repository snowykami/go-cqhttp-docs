(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{383:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("go-cqhttp 包含 "),a("code",[t._v("config.hjson")]),t._v(" 和 "),a("code",[t._v("device.json")]),t._v(" 两个配置文件, 其中 "),a("code",[t._v("config.json")]),t._v(" 为运行配置 "),a("code",[t._v("device.json")]),t._v(" 为虚拟设备信息。")]),t._v(" "),a("h2",{attrs:{id:"从原cqhttp导入配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从原cqhttp导入配置"}},[t._v("#")]),t._v(" 从原CQHTTP导入配置")]),t._v(" "),a("p",[t._v("go-cqhttp 支持导入CQHTTP的配置文件, 具体步骤为:")]),t._v(" "),a("ol",[a("li",[t._v("找到CQHTTP原配置文件 "),a("code",[t._v("{CQ工作目录}/app/io.github.richardchien.coolqhttpapi/config/{qq号}.json")])]),t._v(" "),a("li",[t._v("将文件复制到go-cqhttp根目录并重命名为 "),a("code",[t._v("cqhttp.json")])]),t._v(" "),a("li",[t._v("重启go-cqhttp后将自动导入配置")])]),t._v(" "),a("h2",{attrs:{id:"配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置信息"}},[t._v("#")]),t._v(" 配置信息")]),t._v(" "),a("p",[t._v("默认生成的配置文件如下所示:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    encrypt_password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    password_encrypted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    enable_db"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    access_token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    relogin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        relogin_delay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        max_relogin_times"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    _rate_limit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        frequency"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        bucket_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ignore_invalid_cqcode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    force_fragmented"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    heartbeat_interval"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    http_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n        port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5700")]),t._v("\n        timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        post_urls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ws_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n        port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6700")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ws_reverse_servers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n            reverse_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//you_websocket_universal.server")]),t._v("\n            reverse_api_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//you_websocket_api.server")]),t._v("\n            reverse_event_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//you_websocket_event.server")]),t._v("\n            reverse_reconnect_interval"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    post_message_format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n    use_sso_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    log_level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    web_ui"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n        web_ui_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n        web_input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("uin")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("登录用QQ号")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("登录用密码")])]),t._v(" "),a("tr",[a("td",[t._v("encrypt_password")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否对密码进行加密.")])]),t._v(" "),a("tr",[a("td",[t._v("password_encrypted")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("加密后的密码(请勿修改)")])]),t._v(" "),a("tr",[a("td",[t._v("enable_db")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否开启内置数据库, 关闭后将无法使用 "),a("strong",[t._v("回复/撤回")]),t._v(" 等上下文相关接口")])]),t._v(" "),a("tr",[a("td",[t._v("access_token")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("同CQHTTP的 "),a("code",[t._v("access_token")]),t._v("  用于身份验证")])]),t._v(" "),a("tr",[a("td",[t._v("relogin")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否自动重新登录")])]),t._v(" "),a("tr",[a("td",[t._v("relogin_delay")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("重登录延时（秒）")])]),t._v(" "),a("tr",[a("td",[t._v("max_relogin_times")]),t._v(" "),a("td",[t._v("uint")]),t._v(" "),a("td",[t._v("最大重登录次数, 若0则不设置上限")])]),t._v(" "),a("tr",[a("td",[t._v("_rate_limit")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否启用API调用限速")])]),t._v(" "),a("tr",[a("td",[t._v("frequency")]),t._v(" "),a("td",[t._v("float64")]),t._v(" "),a("td",[t._v("1s内能调用API的次数")])]),t._v(" "),a("tr",[a("td",[t._v("bucket_size")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("令牌桶的大小, 默认为1, 修改此值可允许一定程度内连续调用api")])]),t._v(" "),a("tr",[a("td",[t._v("post_message_format")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("上报信息类型")])]),t._v(" "),a("tr",[a("td",[t._v("ignore_invalid_cqcode")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否忽略错误的CQ码")])]),t._v(" "),a("tr",[a("td",[t._v("force_fragmented")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否强制分片发送群长消息")])]),t._v(" "),a("tr",[a("td",[t._v("fix_url")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否对链接的发送进行预处理, 可缓解链接信息被风控导致无法发送的情况, 但可能影响客户端着色(不影响内容)")])]),t._v(" "),a("tr",[a("td",[t._v("use_sso_address")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("是否使用服务器下发的地址")])]),t._v(" "),a("tr",[a("td",[t._v("heartbeat_interval")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("心跳间隔时间, 单位秒。小于0则关闭心跳, 等于0使用默认值(5秒)")])]),t._v(" "),a("tr",[a("td",[t._v("http_config")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("HTTP API配置")])]),t._v(" "),a("tr",[a("td",[t._v("ws_config")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("Websocket API 配置")])]),t._v(" "),a("tr",[a("td",[t._v("ws_reverse_servers")]),t._v(" "),a("td",[t._v("object[]")]),t._v(" "),a("td",[t._v("反向 Websocket API 配置")])]),t._v(" "),a("tr",[a("td",[t._v("log_level")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("指定日志收集级别, 将收集的日志单独存放到固定文件中, 便于查看日志线索 当前支持 warn,error")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("开启密码加密后程序将在每次启动时要求输入解密密钥, 密钥错误会导致登录时提示密码错误.")]),t._v(" "),a("p",[t._v("解密后密码将储存在内存中, 用于自动重连等功能. 所以此加密并不能防止内存读取.")]),t._v(" "),a("p",[t._v("解密密钥在使用完成后并不会留存在内存中, 所以可用相对简单的字符串作为密钥")]),t._v(" "),a("p",[t._v("分片发送为原酷Q发送长消息的老方案, 发送速度更优/兼容性更好, 但在有发言频率限制的群里, 可能无法发送。关闭后将优先使用新方案, 能发送更长的消息, 但发送速度更慢, 在部分老客户端将无法解析.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("关闭心跳服务可能引起断线, 请谨慎关闭")])]),t._v(" "),a("h2",{attrs:{id:"设备信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备信息"}},[t._v("#")]),t._v(" 设备信息")]),t._v(" "),a("p",[t._v("默认生成的设备信息如下所示:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"display"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"finger_print"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"boot_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proc_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imei"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在大部分情况下 我们只需要关心 "),a("code",[t._v("protocol")]),t._v(" 字段:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("限制")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("iPad")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Android Phone")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Android Watch")]),t._v(" "),a("td",[t._v("无法接收 "),a("code",[t._v("notify")]),t._v(" 事件、无法接收口令红包、无法接收撤回消息")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("MacOS")]),t._v(" "),a("td",[t._v("无")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("根据协议的不同, 各类消息有所限制")])]),t._v(" "),a("h2",{attrs:{id:"自定义服务器ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义服务器ip"}},[t._v("#")]),t._v(" 自定义服务器IP")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("某些海外服务器使用默认地址可能会存在链路问题, 此功能可以指定 go-cqhttp 连接哪些地址以达到最优化.")])]),t._v(" "),a("p",[t._v("将文件 "),a("code",[t._v("address.txt")]),t._v(" 创建到 "),a("code",[t._v("go-cqhttp")]),t._v(" 工作目录, 并键入 "),a("code",[t._v("IP:PORT")]),t._v(" 以换行符为分割即可.")]),t._v(" "),a("p",[t._v("示例:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.1.1.1:53\n1.1.2.2:8899\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);