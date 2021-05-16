import { AxiosRequestConfig } from "../types";

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = "get" } = config
  // 创建 request 对象
  const request = new XMLHttpRequest()
  // 打开请求
  request.open(method.toUpperCase(), url, true)

  // 发送请求

  request.send(data)
}
