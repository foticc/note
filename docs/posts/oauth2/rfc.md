| 方法                | 描述                                                         | 实现方式                                                     | 规范               |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ |
| client_secret_basic | 客户端通过HTTP Basic认证方式发送client_id和client_secret。   | 将client_id和client_secret用冒号拼接后Base64编码，置于Authorization请求头中。 | RFC 6749           |
| client_secret_post  | 客户端在请求体中以表单参数形式提交client_id和client_secret。 | 在POST请求的Body中发送client_id和client_secret字段。         | RFC 6749           |
| client_secret_jwt   | 客户端生成JWT断言，使用共享密钥（client_secret）签名，证明身份。 | JWT包含声明（如iss, sub, aud, exp），签名使用HMAC算法。      | RFC 7523           |
| private_key_jwt     | 客户端生成JWT断言，使用自身私钥签名，授权服务器通过预注册的公钥验证。 | JWT结构类似client_secret_jwt，但签名使用非对称加密（如RSA或ECDSA）。 | RFC 7523           |
| tls_client_auth     | 基于TLS双向认证（mTLS），客户端提供证书供服务器验证。        | 客户端在TLS握手时发送证书，授权服务器通过证书信息（如Subject DN）识别客户端。 | RFC 8705           |
| none                | 无客户端认证，适用于公共客户端（如SPA或移动应用）。          | 仅发送client_id，需结合PKCE（Proof Key for Code Exchange）增强安全。 | RFC 6749, RFC 7636 |