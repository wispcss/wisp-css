# Grid

## Overview

Applies a grid layout.

```html
<div class="o-grid">
    <div></div>
    <div></div>
</div>
```

## Modifiers

### Columns

Sets equal-width columns at specific breakpoints.

| Name                     | Description                                |
|--------------------------|--------------------------------------------|
| `o-grid--cols-2-md`      | 2 equal columns from medium screens up.    |
| `o-grid--cols-3-md`      | 3 equal columns from medium screens up.    |
| `o-grid--cols-auto-md`   | Auto equal columns from medium screens up. |
| `o-grid--cols-4-lg`      | 4 equal columns from large screens up.     |
| `o-grid--cols-5-lg`      | 5 equal columns from large screens up.     |
| `o-grid--cols-auto-lg`   | Auto equal columns from large screens up.  |

```html
<div class="o-grid o-grid--cols-2-md">
    <div></div>
    <div></div>
</div>
```

### Ratio

Sets asymmetric column ratios from medium screens up.

| Name                     | Description  |
|--------------------------|--------------|
| `o-grid--ratio-2-1-md`   | 2:1 columns. |
| `o-grid--ratio-1-2-md`   | 1:2 columns. |
| `o-grid--ratio-3-1-md`   | 3:1 columns. |
| `o-grid--ratio-1-3-md`   | 1:3 columns. |

```html
<div class="o-grid o-grid--ratio-2-1-md">
    <div></div>
    <div></div>
</div>
```

### Gap

Sets the gap between grid items.

| Name              | Description |
|-------------------|-------------|
| `o-grid--gap-sm`  | Small.      |
| `o-grid--gap-md`  | Medium.     |
| `o-grid--gap-lg`  | Large.      |

```html
<div class="o-grid o-grid--gap-sm">
    <div></div>
    <div></div>
</div>
```

### Align

Sets the cross-axis alignment of grid items.

| Name                    | Description |
|-------------------------|-------------|
| `o-grid--align-start`   | Start.      |
| `o-grid--align-center`  | Center.     |
| `o-grid--align-end`     | End.        |

```html
<div class="o-grid o-grid--align-center">
    <div></div>
    <div></div>
</div>
```