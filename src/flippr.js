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
      default: 500
    },
    height: {
      default: 300
    },
    frontFontMult: {
      default: 8
    },
    backFontMult: {
      default: 4
    },
    unit: {
      default: "px"
    }
  },
  computed:{
    frontFont(){
      let frontFont = (this.height * this.frontFontMult)/20   
      return frontFont+this.unit
    },
    backFont(){
      backFont = (this.height * this.backFontMult)/30
      return backFont+this.unit
    },
    widthWithUnit(){
      return this.width + this.unit
      },
    heightWithUnit(){
      return this.height + this.unit
      },
    containerStyle(){
      let style = {
        perspective: "1000px",
        "-webkit-perspective": "1000px",
        "-moz-perspective": "1000px",
        "-o-perspective": "1000px",
        width: this.widthWithUnit,
        height: this.heightWithUnit,
        margin: "10px 0px"
      }
      return style
    },
    flipperStyle(){
      let style = {
        "-moz-transform": "perspective(1000px)",
        "-moz-transform-style": "preserve-3d",
        position: "relative",
        width: this.widthWithUnit,
        height: this.heightWithUnit,
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
        width: this.widthWithUnit,
        height: this.heightWithUnit,
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
        display: "flex",
        flexDirection: "column",
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
      return {...this.frontAndBack,...style}
    },
    backStyle(){
      let style = {
        color: 'black',
        textDecoration: "none",
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
        <div :style="frontStyle">
          <slot name="front">
            something
          </slot>
        </div>
        <a slot="back" :href="link" :style="backStyle">
          <slot name="back">
            something-back
          </slot>
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
