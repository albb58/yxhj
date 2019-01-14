import axios from 'axios'

const ajax = (options,all) => {
    return axios(options)
        .then(res => {
            if(res.data.message === "成功" || "获取成功") {
                console.log('获取成功')
            } else {
                console.log('获取失败')
            }
            return all ? res : res.data.data
        })
        .catch(err => {
            return err
        })
}

export default ajax