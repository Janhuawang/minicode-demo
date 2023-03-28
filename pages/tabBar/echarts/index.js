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
        id: "one",
        name: "单个",
        open: false,
        pages: ['bar', 'line']
      },
      {
        id: "multi",
        name: "多个",
        open: false,
        pages: ['multi']
      },
      
    ]
  }
})
