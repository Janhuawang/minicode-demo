Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  data: {
    list: [
      {
        id: "network",
        name: "网络",
        open: false,
        pages: ['login']
      },
    ]
  }
})
