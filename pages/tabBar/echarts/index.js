Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  },
  data: {
    list: [
      {
        id: "bar",
        name: "柱状图",
        open: false,
        pages: ['bar']
      },
    ]
  }
})
