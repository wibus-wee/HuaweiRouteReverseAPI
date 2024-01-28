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

## Technical Details

### Login

Before logging in, the client initiates a request to `/api/system/user_login_nonce`. The request body includes the `csrf`. If `csrf` is not included or is incorrect, the response will contain `Menu.csrf_err`. In this case, the client needs to obtain the `csrf_token` and `csrf_param` from the response body and make the request again.

Subsequently, the client makes a request to `/api/system/user_login_proof`. In this request, the response will include a `Set-Cookie` header containing a `SessionID_R3`. This `SessionID_R3` must be included in the headers of subsequent requests; otherwise, no content will be returned.

> [!WARNING]
> It has been observed that these requests always include `csrf_token` and `csrf_param`. In the event of encountering `Menu.csrf_err`, proceed by obtaining the `csrf_token` and `csrf_param` from the response body and making the request again.
>
> Additionally, after each request, it is necessary to save the latest `csrf_token` and `csrf_param`.

The following example is valid (assuming `SessionID_R3` is valid):

```shell
curl 'http://192.168.3.1/api/system/heartbeat' --cookie 'SessionID_R3=xxxxxx'
# Response: {"interval":"5000"}
```

The following is invalid:

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
