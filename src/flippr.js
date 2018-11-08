Vue.component("flippr", {
  props: {
    isDisabled: {
      default: false
    },
    link: {
      default: "#"
    },
    frontColor: {
      default: "#4CAF50"
    },
    backColor: {
      default: "#FFFFFF"
    },
    width: {
      default: "500px"
    },
    height: {
      default: "300px"
    },
    frontFontMult: {
      default: 3
    },
    backFontMult: {
      default: 2
    },
  },
  computed:{
    biggerWidth(){
      return this.$parent.window.width > this.$parent.window.height
    },
    frontFont(){
      return (this.frontFontMult/((this.biggerWidth)? 1 : 1.5 )) + ((this.biggerWidth)? "vh" : "vw")
    },
    backFont(){
      return (this.backFontMult/((this.biggerWidth)? 1 : 1.5 )) + ((this.biggerWidth)? "vh" : "vw")
    },
    containerStyle(){
      let style = {
        perspective: "1000px",
        "-webkit-perspective": "1000px",
        "-moz-perspective": "1000px",
        "-o-perspective": "1000px",
        width: this.width,
        height: this.height,
        margin: "10px 0px"
      }
      return style
    },
    flipperStyle(){
      let style = {
        "-moz-transform": "perspective(1000px)",
        "-moz-transform-style": "preserve-3d",
        position: "relative",
        width: this.width,
        height: this.height,
        transform: "rotateY("+((this.hovered)?"180":"0")+"deg)",
        "-webkit-transition": "0.6s",
        "-webkit-transform-style": "preserve-3d",
        "-moz-transition": "0.6s",
        "-moz-transform-style": "preserve-3d",
        "-o-transition": "0.6s",
        "-o-transform-style": "preserve-3d",
        "-ms-transition": "0.6s",
        "-ms-transform-style": "preserve-3d",
        transition: "0.6s",
        transformStyle: "preserve-3d",
      }
      return style
    },
    frontAndBack(){
      return {
        display: "flex",
        width: this.width,
        height: this.height,
        flexDirection: "column",
        backfaceVisibility: "hidden",
        "-webkit-backface-visibility": "hidden",
        "-moz-backface-visibility": "hidden",
        "-o-backface-visibility": "hidden",
        position: "absolute",
        "top": 0,
        "left": 0,
        cursor: "pointer",
        textDecoration: "none",
      }
    },
    frontStyle(){
      let style = {
        color: 'white',
        backgroundColor: this.frontColor,
        border: "none",
        justifyContent: "center",
        alignItems: "center",
        fontSize: this.frontFont,
        zIndex: 2,
        "-webkit-transform": "rotateY(0deg)",
        "-moz-transform":    "rotateY(0deg)",
        "-o-transform":      "rotateY(0deg)",
        "-ms-transform":     "rotateY(0deg)",
        transform:          "rotateY(0deg)",
      }
      if(this.isDisabled){
        //style["opacity"]=0.6;
      }
      return {...this.frontAndBack,...style}
    },
    backStyle(){
      let style = {
        color: 'black',
        textDecoration: "none",
        justifyContent: "flex-start",
        alignItems:  "flex-start",
        //padding: "1vh 1vw",
        backgroundColor: this.backColor,
        border: "2px solid "+this.frontColor,
        fontSize: this.backFont,
        "-webkit-transform": "rotateY(180deg)",
        "-moz-transform":    "rotateY(180deg)",
        "-o-transform":      "rotateY(180deg)",
        "-ms-transform":     "rotateY(180deg)",
        transform:          "rotateY(180deg)",
      }
      if(this.isDisabled){
        style["opacity"]=0.6;
        style["cursor"]="not-allowed";
      }
      return {...this.frontAndBack,...style}
    },
  },
  template:
    `
    <div class="flip-container" @mouseover="hovered=true" @mouseleave="hovered=false" :style="containerStyle">
      <div class="flipper" :style="flipperStyle">
        <a :href="link" :style="frontStyle">
          <slot name="front">
            something
          </slot>
        </a>
        <a slot="back" :href="link" :style="backStyle">
          <div style="padding: 10px 10px">
            <slot name="back">
              something-back
            </slot>
          </div>
        </a>
        <!-- -->
      </div>
    </div>
    `,
  data(){
    return {
      hovered: false
    }
  }
});
