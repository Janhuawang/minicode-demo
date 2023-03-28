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
        id: "page",
        name: "单页面承载",
        open: false,
        pages: ['bar', 'line']
      },
    ]
  }
})
