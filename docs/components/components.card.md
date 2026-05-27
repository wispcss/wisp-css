# Card

## Overview

Arranges content in a contained card layout.

```html
<div class="c-card">
    <img class="c-card__image">
    <div class="c-card__head"></div>	
    <div class="c-card__body"></div>
    <div class="c-card__foot"></div>	
</div>
```

<a href="https://codepen.io/wispcss/pen/azBVJJg?editors=1100" class="wisp-codepen-link">Demo on CodePen</a>
 
## Modifiers

### Border

| Name                | Description                       |
|---------------------|-----------------------------------|
| `c-card--bordered`  | Applies a border around the card. |
| `c-card--rounded`   | Applies a border radius.          |

```html
<div class="c-card c-card--rounded c-card--bordered">
    <img class="c-card__image">
    <div class="c-card__head"></div>	
    <div class="c-card__body"></div>
    <div class="c-card__foot"></div>	
</div>
```

<a href="https://codepen.io/wispcss/pen/ByQmWdw" class="wisp-codepen-link">Demo on CodePen</a>
 
## Notes

You can add both elevation and animations by applying the `press` behavior.

```html
<div class="c-card b-press">
    <div class="c-card__image"></div>
    <div class="c-card__head"></div>
    <div class="c-card__body"></div>
    <div class="c-card__foot"></div>
</div>
```

<a href="https://codepen.io/wispcss/pen/dPOZvVG" class="wisp-codepen-link">Demo on CodePen</a>
