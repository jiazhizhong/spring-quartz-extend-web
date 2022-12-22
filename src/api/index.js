import http from '../utils/request'

// 登录API
export const login = (data) => {
    return http.post('/login', data, { withCredentials: true })
}
export const logout = (data) => {
    return http.post('/logout', data, { withCredentials: true })
}

// 菜单API
export const getMenus = () => {
    return http.get('/menu/list', { withCredentials: true })
}
export const getUserMenu = () => {
    return http.get('/menu/getUserMenu', { withCredentials: true })
}

// 任务API
export const getSchedNames = () => {
    return http.get('/job/sched-names', { withCredentials: true })
}
export const getJobs = (params) => {
    return http.get('/job/list', { ...params, ...{ withCredentials: true } })
}
export const triggerJob = (data) => {
    return http.post('/job/trigger', data, { withCredentials: true })
}
export const removeJob = (data) => {
    return http.post('/job/removeLocal', data, { withCredentials: true })
}
export const pauseJob = (data) => {
    return http.post('/job/pause', data, { withCredentials: true })
}
export const resumeJob = (data) => {
    return http.post('/job/resume', data, { withCredentials: true })
}
export const deleteJob = (data) => {
    return http.post('/job/delete', data, { withCredentials: true })
}
export const refreshJob = (data) => {
    return http.post('/job/refresh', data, { withCredentials: true })
}

// 实例API
export const getInstances = (params) => {
    return http.get('/instance/list', { ...params, ...{ withCredentials: true } })
}
export const deleteInstance = (data) => {
    return http.post('/instance/delete', data, { withCredentials: true })
}

// 角色API
export const getRoles = () => {
    return http.get('/role/list', { withCredentials: true })
}
export const addOrUpdateRole = (data) => {
    return http.post('/role/addOrUpdate', data, { withCredentials: true })
}
export const deleteRole = (roleId) => {
    return http.delete('role/delete/' + roleId, { withCredentials: true })
}

// 角色权限API
export const getPermissions = (roleId) => {
    return http.get('/role/permission/list/' + roleId, { withCredentials: true })
}
export const addOrUpdatePermission = (data) => {
    return http.post('/role/permission/addOrUpdate', data, { withCredentials: true })
}