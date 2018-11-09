# Flippr

![alt text][logo]

A small [Vue](https://vuejs.org/) component for easily implementing flipping tiles


## Examples


[Flipper Example 1](https://flippr.now.sh/example/flippr_tile.html "Flipper example 1")

## Motivation
I just needed some nice-looking entry points for my website. Just putting links on the navbar was not enough. 
Several iterations of discussion with my colleagues later, we came up with tiles, which flip, while hovering over them.

## Screenshots

![alt text][front]

![alt text][back]


[logo]: https://github.com/r-mllr/Flippr/raw/master/img/LogoFlippr.png "Flippr logo"
[front]: https://github.com/r-mllr/Flippr/raw/master/img/front.png "Front view of tile"
[back]: https://github.com/r-mllr/Flippr/raw/master/img/back.png "Back view of tile"

## Framework used

- [Vue](https://vuejs.org)

## Features

- Flipping Tile with
  - Frontside
  - Backside
  - Flipping Event
  - Easy to integrate
  - Easy to customize
  - Only inline CSS 
  
## Code examples

### HTML

The Flippr component creates a flipping link. You need a front _template_ and a back _template_ tag:
```html
  <flippr>
    <template slot="front">
      <div>
        Flippr
      </div>
    </template>
    <template slot="back">
      <div style="padding: 50px;">
        <b>Flippr</b>:
        A small Vue-component for easily implementing flipping tiles
      </div>
    </template>
    
  </flippr>
```


```html
<div id="app" style="position: absolute;left: 50%; top: 50%">
  <flippr link="https://github.com/r-mllr/Flippr" front-color="#8E43E8" front-font-mult="10">
    <template slot="front">
      <!--
      this goes to the front side
      -->
    </template>
    <template slot="back">
      <!--
      this goes to the back side
      -->
    </template>
  </flippr>
</div>
```
### Vue instance
The Vue instance need a window property with width and height

```javascript
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
```
## Credits

- inspired by https://davidwalsh.name/css-flip

## Licence

GPL3 © [r-mllr](https://github.com/r-mllr)
