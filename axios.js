import Vue from 'vue'
import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import router from '../router'
import tokenUtils from '../utils/token'

// 请求头保存token的key
const TOKEN_KEY = 'access-token'

// 基本配置
axios.defaults.baseURL = '/fa-gai-wei-rq-webapi'
axios.defaults.responseType = 'json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.timeout = 1000000

// request拦截器
axios.interceptors.request.use(
    config => {
        let index = config.url.indexOf('/login')
        if (index === -1) {
            config.headers[TOKEN_KEY] = tokenUtils.getToken()
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response拦截器
axios.interceptors.response.use(
    response => {
        const isIE9 = response.data == undefined
        console.log(response)

        // IE9+环境下responseType是否为blob的处理
        if (!isIE9) {
            // 若responseType=blob
            if (response.config.responseType === 'blob') {
                if (response.data.type === 'application/octet-stream') {
                    return response
                    // exportFileByResponse(response)
                } else {
                    let reader = new FileReader()
                    reader.onload = e => {
                        const res = JSON.parse(e.target.result)
                        Message.error({
                            dangerouslyUseHTMLString: true,
                            message: '<p>' +
                            '<div>发生错误.</div>' +
                            '<div>错误码: <strong>' + res.error.code + '</strong></div>' +
                            '<div>错误信息: <strong>' + res.error.message + '</strong></div>' +
                            '</p>',
                            duration: 5000
                        })
                    }
                    reader.readAsText(response.data)
                }
                return
            }
        } else {   // IE9下
            if (response.config.responseType === 'blob') {
                if (response.headers['content-type'] === 'application/octet-stream') {
                    response.data = response.request.responseText
                    return response
                    // exportFileByResponse(response)
                }
            }
        }

        const res = isIE9 ? JSON.parse(response.request.responseText) : response.data
        // 成功返回数据
        if (res.success === 1) {
            return res
        }
        if (res.error.code.indexOf('03') === 0) {
            MessageBox.alert('token错误', '请重新登录', {
                confirmButtonText: '确定',
                callback: () => {
                    router.push({name: 'login'})
                }
            })
        } else {
            // 失败提示信息
            Message.error({
                dangerouslyUseHTMLString: true,
                message: '<p>' +
                '<div>发生错误.</div>' +
                '<div>错误码: <strong>' + res.error.code + '</strong></div>' +
                '<div>错误信息: <strong>' + res.error.message + '</strong></div>' +
                '</p>',
                duration: 5000
            })
        }
        return Promise.reject(res.error)
    },
    error => {
        Message.error({
            message: '网络错误'
        })
        return Promise.reject(error)
    }
)

Vue.prototype.axios = axios
export default axios
