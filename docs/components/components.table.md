# Table

## Overview

Applies styles to create a table.

```html
<table class="c-table">
    <thead>
        ...
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

<a href="https://codepen.io/wispcss/pen/raWYyjP" class="wisp-codepen-link">Demo on CodePen</a>

## Modifiers

### Border

| Name                      | Description                     |
|---------------------------|---------------------------------|
| `c-table--border-cells`   | Sets a border around all cells. |
| `c-table--border-rows`    | Sets a border above all rows.   |

```html
<table class="c-table c-table--border-cells">
    <thead>
        ...
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

<a href="https://codepen.io/wispcss/pen/vEyWxxK" class="wisp-codepen-link">Demo on CodePen</a>

## Notes

Wrap the table with the `scroll` behavior to allow horizontal scrolling on small screens.

```html
<div class="b-scroll">
    <table class="c-table b-scroll__body">
        <thead>
            ...
        </thead>
        <tbody>
            ...
        </tbody>
    </table>
</div>
```

<a href="https://codepen.io/wispcss/pen/myOpdod" class="wisp-codepen-link">Demo on CodePen</a>