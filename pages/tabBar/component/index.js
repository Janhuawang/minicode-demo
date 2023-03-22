Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  data: {
    list: [
      {
        id: "view",
        name: "视图容器",
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      },
      {
        id: "conent",
        name: "基础内容",
        open: false,
        pages: ['text', 'icon', 'progress']
      },
      {
        id: "form",
        name: "表单组件",
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      },
    ]
  }
})
