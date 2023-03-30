Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
            pagePath: "/pages/tabBar/component/index",
            iconPath: "/resources/image/icon_component.png",
            selectedIconPath: "/resources/image/icon_component_HL.png",
            text: "组件"
        }, {
            pagePath: "/pages/tabBar/API/index",
            iconPath: "/resources/image//icon_API.png",
            selectedIconPath: "/resources/image//icon_API_HL.png",
            text: "接口"
        }]
    },
    attached() {
      
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({ url })
            this.setData({
                selected: data.index
            })
        }
    }
})