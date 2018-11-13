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
  
## Usage

The Flippr component creates a flipping link. You need a front _template_ and a back _template_ tag:
```html
  <flippr>
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
```

### Props/HTML-attributes
You can customize your Flipprs by setting Props/HTML-attributes:
```html
<flippr your-props=here>
  
</flippr>
```

Valid attributes are:

Name | What it does | Default | Datatype 
---- | ------------ | ------- | -------- 
width | defines the width of the flipping tile | 500 | Number (String might be working, too) 
height | defines the height of the flipping tile | 300 | Number (String might be working, too) 
unit | in which unit the width and height is defined | px | String 
link | Where does the tile lead to | # | String 
front-font-mult | The font of the front side is defined by the (height * front-font-mult) / 20 | 8 | Number (String might be working, too) 
back-font-mult | The font of the back side is defined by the (height * back-font-mult) / 30 | 4 | Number (String might be working, too) 
front-color | Background-color of the front side and border color of back side | #4CAF50 | String 
back-color | Background-color of the back side and border color of the front side | #FFFFFF | String |
is-disabled | the pointer will be set to 'not-allowed' and the opacity of the back side is 0.6 | false | Boolean 

## Credits

- inspired by https://davidwalsh.name/css-flip

## Licence

GPL3 © [r-mllr](https://github.com/r-mllr)
