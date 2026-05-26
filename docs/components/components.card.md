# Card

## Overview

Arranges content in a contained card layout.

```html
<div class="c-card">
    <div class="c-card__image"></div>
    <div class="c-card__head"></div>
    <div class="c-card__body"></div>
    <div class="c-card__foot"></div>
</div>
```

## Modifiers

### Border

| Name                | Description                       |
|---------------------|-----------------------------------|
| `c-card--bordered`  | Applies a border around the card. |
| `c-card--rounded`   | Applies a border radius.          |

```html
<div class="c-card c-card--bordered c-card--rounded">
    <div class="c-card__image"></div>
    <div class="c-card__head"></div>
    <div class="c-card__body"></div>
    <div class="c-card__foot"></div>
</div>
```

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