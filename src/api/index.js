import http from '../utils/request'

// 任务API
export const getSchedNames = () => {
    return http.get('/job/sched-names')
}
export const getJobs = (params) => {
    return http.get('/job/list', params)
}
export const triggerJob = (data) => {
    return http.post('/job/trigger', data)
}
export const removeJob = (data) => {
    return http.post('/job/removeLocal', data)
}
export const pauseJob = (data) => {
    return http.post('/job/pause', data)
}
export const resumeJob = (data) => {
    return http.post('/job/resume', data)
}
export const deleteJob = (data) => {
    return http.post('/job/delete', data)
}
export const refreshJob = (data) => {
    return http.post('/job/refresh', data)
}

// 实例API
export const getInstances = (params) => {
    return http.get('/instance/list', params)
}
export const deleteInstance = (data) => {
    return http.post('/instance/delete', data)
}