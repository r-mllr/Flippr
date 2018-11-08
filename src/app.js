new Vue({
  el: "#app",
  data: {
    "window": {
      "height": 0,
      "width": 0
    }
  },
  methods:{
    handleResize(){
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  created(){
    window.addEventListener('resize', this.handleResize, false);
    this.handleResize();
  },
  destroyed(){
      window.removeEventListener('resize', this.handleResize);
  }
});

