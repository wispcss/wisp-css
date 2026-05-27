# Table

## Overview

Applies styles to create a table.

```html
<table class="c-table">
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
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
        <tr>
            <th>Head 1</th>
            <th>Head 2</th>
            <th>Head 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
        </tr>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
        </tr>
    </tbody>
</table>
```

<a href="https://codepen.io/wispcss/pen/vEyWxxK" class="wisp-codepen-link">Demo on CodePen</a>

## Notes

Wrap the table with the `scroll` behavior to allow horizontal scrolling on small screens.

```html
<div class="b-scroll">
    <table class="c-table b-scroll__body">
        ...
    </table>
</div>
```