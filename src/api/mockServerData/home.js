import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                    华为: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: '三星',
                        value: 5999
                    },
                    {
                        name: '华为',
                        value: 6999
                    },
                    {
                        name: '苹果',
                        value: 7999
                    },
                    {
                        name: 'oppo',
                        value: 2799
                    },
                    {
                        name: '魅族',
                        value: 2099
                    },
                    {
                        name: 'vivo',
                        value: 2699
                    }
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: 157,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 50,
                        active: 300
                    },
                    {
                        date: '周三',
                        new: 150,
                        active: 400
                    },
                    {
                        date: '周四',
                        new: 250,
                        active: 600
                    },
                    {
                        date: '周五',
                        new: 100,
                        active: 200
                    },
                    {
                        date: '周六',
                        new: 50,
                        active: 300
                    },
                    {
                        date: '周日',
                        new: 60,
                        active: 100
                    },
                ],
                // 折线图
                orderData: {
                    date: ['20221201', '20221202', '20221203', '20221204', '20221205', '20221206', '20221207'],
                    data: List
                },
                // 表格数据
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: 'vivo',
                        todayBuy: 1300,
                        monthBuy: 3300,
                        totalBuy: 8300
                    },
                    {
                        name: '苹果',
                        todayBuy: 1500,
                        monthBuy: 3500,
                        totalBuy: 8500
                    },
                    {
                        name: '小米',
                        todayBuy: 1200,
                        monthBuy: 3200,
                        totalBuy: 8200
                    },
                    {
                        name: '三星',
                        todayBuy: 1100,
                        monthBuy: 3100,
                        totalBuy: 8100
                    },
                    {
                        name: '华为',
                        todayBuy: 500,
                        monthBuy: 3000,
                        totalBuy: 8000
                    }
                ],
                // 订单数据
                countData: [
                    {
                        name: '今日支付订单',
                        value: 12,
                        icon: 'success',
                        color: '#2ec7c9'
                    },
                    {
                        name: '今日收藏订单',
                        value: 210,
                        icon: 'star-on',
                        color: '#ffb980'
                    },
                    {
                        name: '今日未支付订单',
                        value: 1234,
                        icon: 's-goods',
                        color: '#5ab1ef'
                    },
                    {
                        name: '本月支付订单',
                        value: 1234,
                        icon: 'success',
                        color: '#2ec7c9'
                    },
                    {
                        name: '本月收藏订单',
                        value: 210,
                        icon: 'star-on',
                        color: '#ffb980'
                    },
                    {
                        name: '本月未支付订单',
                        value: 1234,
                        icon: 's-goods',
                        color: '#5ab1ef'
                    },
                ]
            }
        }
    }
}