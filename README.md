# Flippr

![alt text][logo]

A small [Vue](https://vuejs.org/) component for easily implementing flipping tiles


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
  
## Code example

```html
<div id="app">
  <flipper link="https://github.com/r-mllr/Flippr" front-color="#8E43E8" front-font-mult="6">
    <template slot="front">
       Flippr
    </template>
    <template slot="back">
      <b>Flippr</b>
      A small Vue-component for easily implementing flipping tiles
    </template>
  </flipper>
</div>
```

## Credits

- inspired by https://davidwalsh.name/css-flip

## Licence

GPL3 © [r-mllr](https://github.com/r-mllr)
