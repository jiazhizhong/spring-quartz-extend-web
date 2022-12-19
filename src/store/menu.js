import Cookies from "js-cookie"
export default {
    state: {
        isCollapse: false,
        menuData: []
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        setMenu(state, val) {
            state.menuData = val
            Cookies.set('menu', JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state, router) {
            if (!Cookies.get('menu')) return
            
            const menu = JSON.parse(Cookies.get('menu'))
            state.menuData = menu

            const menuArray = []
            menu.forEach(item => {
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