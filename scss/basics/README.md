# Basics

## Using `scss` in Html Page

When we use [Sass](https://sass-lang.com/), we prefer Scss syntax. For Css, we
convert Scss to Css with Sass. We prefer to install `npm` instead of `brew` or
`choco` to have a simple single run file. We use `npx sass` for convenience.

## Using Variables

We use variables so that applying theme and reading code becomes more
convenient. See [variable.scss](sass/variable.scss) for an example usage.

## Using Modules

We use modules to keep the styles of parts that make sense on their own (these
can be components, classes, etc.) in a unique file. We combine `.scss` files
into a single file with `@use`. We convert the file to css and use it. See
[style.scss](sass/style.scss) for combine example usage.

## Nesting

We use it because it helps us to see and manage hierarchy. See
[nested.scss](sass/nested.scss) for an example usage.

### Using Ampersand

You can use `&` where appropriate. See
[nested-ampersand.scss](sass/nested-ampersand.scss)

## Using Operators

We use operators to calculate a new value based on a property. For example, we
calculate the new value by increasing/decreasing the height of the element we
give style. See [style.scss](sass/style.scss) for an example usage.

## Vite

We use vite in presentation because it reflects changes on the fly, making
development easier, and provides direct sass support. But, you still need to add
the `sass-embedded` package.
