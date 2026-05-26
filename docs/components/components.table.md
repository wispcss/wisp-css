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

## Modifiers

### Border

| Name                      | Description                     |
|---------------------------|---------------------------------|
| `c-table--border-cells`   | Sets a border around all cells. |
| `c-table--border-rows`    | Sets a border above all rows.   |

```html
<table class="c-table c-table--border-rows">
    ...
</table>
```

## Notes

Wrap the table with the `scroll` behavior to allow horizontal scrolling on small screens.

```html
<div class="b-scroll">
    <table class="c-table b-scroll__body">
        ...
    </table>
</div>
```