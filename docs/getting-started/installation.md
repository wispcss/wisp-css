# Installation

## Overview

There are two methods to adding Wisp.

### Full Framework

The simplest option if you want everything. 

```html
<link rel="stylesheet" href="wisp.min.css">
```

### Individual Modules

The recommended option. Wisp is modular by design and nothing assumes anything else is
present. Pulling in what you need will keep your stylesheet lean and allow you to add 
modules to an existing project. Always include `preflight.css` first as it's the only 
required dependency.

```css
@import 'wisp/preflight.css';
@import 'wisp/objects.stack.css';
@import 'wisp/components.button.css';
```

 