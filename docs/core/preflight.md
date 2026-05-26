# Preflight

Preflight is the only required file in Wisp. It establishes the minimum browser behaviors that the rest of the framework depends on. Without it, objects and components will not size or behave correctly.

It sets box-sizing: border-box globally so that padding and borders are included in an element's dimensions rather than added on top. This is a non-negotiable foundation for predictable layout.

It also normalizes a handful of critical element behaviors: focus styles for keyboard accessibility, cursor feedback for disabled elements, typography inheritance for form controls, and collapsed borders for tables. None of these are opinions. These are the baseline every project needs.