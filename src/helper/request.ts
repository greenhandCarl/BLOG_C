import axios, { Axios, AxiosRequestConfig } from 'axios'
import { devDomain, prodDomain } from '../config/http'

// eslint-disable-next-line
type requestType = (options: any) => any;
class HttpRequest {
    private baseURL: string
    public constructor (baseURL: string) {
        this.baseURL = baseURL
    }

    // 基础配置
    private readonly getBaseConfig = () => {
        return {
            baseURL: this.baseURL,
            header: { 'Content-type': 'application/json;charset=utf-8' },
            timeout: 20000
        }
    }

    private readonly interceptors = (instance: Axios) => {
        // 添加请求拦截器
        instance.interceptors.request.use((config) => {
            // 在发送请求之前做些什么
            return config
        }, async err => {
            // 对请求错误做些什么
            return Promise.reject(err)
        })
    
        // 添加响应拦截器
        instance.interceptors.response.use(async res => {
            // 对响应数据做点什么
            if (res.status === 200) {
                return Promise.resolve(res.data)
            } else {
                return Promise.reject(res)
            }
        }, async err => {
            // 对响应错误做点什么
            return Promise.reject(err)
        })
    }

    /**
     * 创建实例
     */
    public readonly request: requestType = async (options: AxiosRequestConfig) => {
        const instance = axios.create()
        const newOptions = { ...this.getBaseConfig(), ...options }
        this.interceptors(instance)
        return instance(newOptions)
    }
}

const baseURL = process.env.NODE_ENV === 'production' ? prodDomain : devDomain

const request = new HttpRequest(baseURL).request

export default request
