import { AxiosRequestConfig } from "./types/index";
import xhr from "./xhr/xhr";

function axios(config: AxiosRequestConfig) {
  xhr(config)
}

export default axios
