import http from '../utils/request'

// 任务API
export const getSchedNames = () => {
    return http.get('/job/sched-names')
}
export const getJobs = (params) => {
    return http.get('/job/list', params)
}
export const triggerJob = (data) => {
    console.log(data, 'triggerJob')
    return http.post('/job/trigger', data)
}