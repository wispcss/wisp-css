# Extending
 
Wisp is designed to be extended. You can add your own objects, behaviors, components, and utilities by writing into the same layers Wisp uses. Your code will slot into the cascade naturally alongside the framework without any conflicts.

The layer order is defined in `preflight.css` and applies globally. Any styles you write into these layers will respect that order regardless of where your stylesheet is loaded.

```css
@layer objects {
    .o-sidebar {
        display: flex;
        gap: var(--wisp-spacing-md, 1rem);
    }
}

@layer components {
    .c-alert {
        padding: var(--wisp-spacing-md, 1rem);
        border-radius: 4px;
    }
}

@layer utilities {
    .u-truncate {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
```