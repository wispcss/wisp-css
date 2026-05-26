# Transition

## Overview

Applies a transition to an element. By default it animates opacity, transform, and box-shadow.

```html
<button class="b-transition"></button>
```

## Modifiers

### For Colors

Switches the transition to color-related properties.

| Name                        | Description                                            |
|-----------------------------|--------------------------------------------------------|
| `b-transition--for-colors`  | Transitions background-color, border-color, and color. |

```html
<button class="b-transition b-transition--for-colors"></button>
```

### Curve

Sets the transition timing function.

| Name                              | Description  |
|-----------------------------------|--------------|
| `b-transition--curve-ease`        | Ease.        |
| `b-transition--curve-ease-in-out` | Ease in out. |

```html
<button class="b-transition b-transition--curve-ease-in-out"></button>
```
 
## Notes

The transition is disabled when `prefers-reduced-motion` is set, or when the element is disabled.