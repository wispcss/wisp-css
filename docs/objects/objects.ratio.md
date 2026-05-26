# Ratio

## Overview

Applies a fixed aspect ratio on any element.

```html
<div class="o-ratio o-ratio--16-9">
</div>
```

## Modifiers

### Ratio

Sets the aspect ratio.

| Name              | Description |
|-------------------|-------------|
| `o-ratio--1-1`    | 1:1.        |
| `o-ratio--4-3`    | 4:3.        |
| `o-ratio--16-9`   | 16:9.       |
| `o-ratio--21-9`   | 21:9.       |

```html
<div class="o-ratio o-ratio--16-9">
</div>
```

### Cover

Fills the ratio box.

| Name             | Description                    |
|------------------|--------------------------------|
| `o-ratio--cover` | Stretches the content to fill. |

```html
<div class="o-ratio o-ratio--16-9 o-ratio--cover">
    <img class="o-ratio__content">
</div>
```