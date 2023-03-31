Component({
  behaviors: [],
  properties: {
    canvasId: {
      type: String,
      value: 'ec-canvas'
    },
    
    isShow:{
      type: Boolean,
      value: true
    },

    ec: {
      type: Object
    },

    forceUseOldCanvas: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    closeDialog: function(){
      this.setData({isShow:!this.data.isShow})
    }
  },
  created(){
    console.log("dialog created")
  },
  attached(){
    console.log("dialog attached")
  },
  ready(){

    console.log("dialog ready")
    console.log("cid: "+this.properties.canvasId)
  },
  detached(){
    console.log("dialog detached")
  },

});