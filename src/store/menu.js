import Cookies from "js-cookie"
const sysMenus = [
    {
        name: 'sys-manage',
        label: '系统管理',
        icon: 's-management',
        children: [
            {
                name: 'user-manage',
                label: '用户管理',
                path: '/user-manage',
                icon: 's-management',
                url: 'UserManage.vue',
            },
            {
                name: 'role-manage',
                label: '角色管理',
                path: '/role-manage',
                icon: 's-management',
                url: 'RoleManage.vue',
            },
        ]
    },
    {
        name: 'job-list',
        label: '任务列表',
        path: '/job-list',
        icon: 's-order',
        url: 'JobList.vue',
    },
    {
        name: 'job-manage',
        label: '任务管理',
        path: '/job-manage',
        icon: 's-management',
        url: 'JobManage.vue',
    },
    {
        name: 'instance-manage',
        label: '实例管理',
        path: '/instance-manage',
        icon: 'refrigerator',
        url: 'InstanceManage.vue',
    },
]

export default {
    state: {
        isCollapse: false,
        menuData: []
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        setMenu(state, menu) {
            const menuCodes = menu.map(item => item.menuCode);
            const menuArray = []
            sysMenus.forEach(item => {
                if (item.children) {
                    item.children = item.children.filter(item => menuCodes.indexOf(item.name) !== -1)
                    if (item.children.length > 0) {
                        menuArray.push(item)
                    }
                } else {
                    if (menuCodes.indexOf(item.name) !== -1) {
                        menuArray.push(item)
                    }
                }
            })
            state.menuData = menuArray
            Cookies.set('menu', JSON.stringify(menuArray))
        },

        addMenu(state, router) {
            if (!Cookies.get('menu')) return

            const menu = JSON.parse(Cookies.get('menu'))
            state.menuData = menu

            const menuArray = []
            state.menuData.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            console.log(menuArray, 'menuArray')
            menuArray.forEach((item) => {
                router.addRoute('Main', item)
            })
        }
    }
}