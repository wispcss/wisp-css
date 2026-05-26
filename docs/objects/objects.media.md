# Media

## Overview

Aligns an image next to content.

```html
<div class="o-media">
    <img class="o-media__image">
    <div class="o-media__body"></div>
</div>
```

## Modifiers

### Reverse

Places the image after the content.

| Name                  | Description                 |
|-----------------------|-----------------------------|
| `o-media--reversed`   | Moves the image to the end. |

```html
<div class="o-media o-media--reversed">
    <img class="o-media__image">
    <div class="o-media__body"></div>
</div>
```

### Gap

Sets the gap on the inline axis.

| Name                | Description |
|---------------------|-------------|
| `o-media--gap-sm`   | Small.      |
| `o-media--gap-md`   | Medium.     |
| `o-media--gap-lg`   | Large.      |

```html
<div class="o-media o-media--gap-sm">
    <img class="o-media__image">
    <div class="o-media__body"></div>
</div>
```

### Align

Sets the cross-axis alignment of the image and content.

| Name                     | Description |
|--------------------------|-------------|
| `o-media--align-start`   | Start.      |
| `o-media--align-center`  | Center.     |
| `o-media--align-end`     | End.        |

```html
<div class="o-media o-media--align-center">
    <img class="o-media__image">
    <div class="o-media__body"></div>
</div>
```