import Mock, { mock } from 'mockjs'

function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' + decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
            +'"}'
    )
}

let List = []
const count = 200

for (let i = 0; i < count; i++) {
    List.push(
        {
            id: Mock.Random.guid(),
            name: Mock.Random.cname(),
            addr: Mock.mock('@county(true)'),
            age: Mock.Random.integer(0, 99),
            birth: Mock.Random.date(),
            sex: Mock.Random.integer(0, 1)
        }
    )
}

export default {
    /**
     * 获取用户数据
     */
    getUserList: config => {
        const { name, pageNo = 1, pageSize = 20 } = param2Obj(config.url)
        console.log('name: ' + name, 'pageNo: ' + pageNo, 'pageSize: ' + pageSize)
        const mockList = List.filter(user => {
            if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1)
                return false
            return true
        })
        const pageList = mockList.filter((item, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1))
        return {
            code: 20000,
            count: mockList.length,
            list: pageList
        }
    },
    /**
     * 增加用户
     */
    createUser: config => {
        const { name, addr, age, birth, sex } = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
        List.unshift({
            id: Mock.Random.guid(),
            name: name,
            age: age,
            addr: addr,
            birth: birth,
            sex: sex
        })
        return {
            code: 20000,
            data: {
                message: '添加成功'
            }
        }
    },
    /**
     * 删除用户
     */
    deleteUser: config => {
        const { id } = JSON.parse(config.body)
        if (!id) {
            return {
                code: -999,
                message: '参数不正确'
            }
        } else {
            List = List.filter(u => u.id !== id)
            return {
                code: 20000,
                data: {
                    message: '删除成功'
                }
            }
        }
    },
    /**
     * 批量删除用户
     */
    batchremove: config => {
        let { ids } = param2Obj(config.url)
        ids = ids.split(',')
        List = List.filter(u => !ids.includes(u.id))
        return {
            code: 20000,
            data: {
                message: '批量删除成功'
            }
        }
    },

    /**
     * 更新用户
     */
    updateUser: config => {
        const { id, name, addr, age, birth, sex } = JSON.parse(config.body)
        const sex_num = parseInt(sex)
        List.some(u => {
            if (u.id === id) {
                u.name = name
                u.addr = addr
                u.age = age
                u.birth = birth
                u.sex = sex_num
                return true
            }
        })
        return {
            code: 20000,
            data: {
                message: '编辑成功'
            }
        }
    }
}