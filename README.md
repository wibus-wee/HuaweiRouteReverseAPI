# HuaweiRouteReverseAPI

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Reverse API of Huawei router management panel

<pre align="center">
🧪 Working in Progress
</pre>

## 技术细节

### 登录

Client 在登陆前会先请求一次 `/api/system/user_login_nonce`，这个时候请求 Body 中会附带 `csrf`，如果不附带 `csrf` 或者 `csrf` 不正确，那么会返回 `Menu.csrf_err`，这个时候需要拿到响应 Body 的 `csrf_token` 和 `csrf_param` 再请求一次

Client 会请求一个 `/api/system/user_login_proof`，这个时候返回会出现 `Set-Cookie` 请求标头，这个标头会包含一个 `SessionID_R3`，这个标头必须要在后续的请求中包含，否则不会返回任何内容

> [!INFO]
> 我们发现，这些请求都会附带 `csrf_token` 和 `csrf_param`，如果出现 `Menu.csrf_err`，继续拿到响应 Body 的 `csrf_token` 和 `csrf_param` 再请求一次即可，同时，每一次请求后也需要保存到最新的 `csrf_token` 和 `csrf_param`

以下这是合法的：

```shell
curl 'http://192.168.3.1/api/system/heartbeat' \
--cookie 'SessionID_R3=IpNe4u8XVy54F0eFcJdtMRUMK5cw0zOHIBVlDtdFIWAVSY30X0wxcg0LijcxzbuTBBb07KJ0h9uoUE8n0pamNsadwsYqMV0LCaiYvEr0opRZZwwsa5sd9n0rf754tad7'

# Response: {"interval":"5000"}
```


以下是无效的：

```shell
curl 'http://192.168.3.1/api/system/heartbeat'

# No Response
```



## License

[MIT](./LICENSE) License © 2023-PRESENT [wibus-wee](https://github.com/wibus-wee)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/HuaweiRouteReverseAPI?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/HuaweiRouteReverseAPI
[npm-downloads-src]: https://img.shields.io/npm/dm/HuaweiRouteReverseAPI?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/HuaweiRouteReverseAPI
[bundle-src]: https://img.shields.io/bundlephobia/minzip/HuaweiRouteReverseAPI?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=HuaweiRouteReverseAPI
[license-src]: https://img.shields.io/github/license/wibus-wee/HuaweiRouteReverseAPI.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/wibus-wee/HuaweiRouteReverseAPI/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/HuaweiRouteReverseAPI
