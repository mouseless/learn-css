# learn-css

## learn-sass

Learning how to use scss styles in html pages.

### Using `scss` in Html Page

When we use [Sass](https://sass-lang.com/), we prefer Scss syntax. For Css,
we convert Scss to Css with Sass. We prefer to install `npm` instead of `brew`
or `choco` to have a simple single run file. We use `npx sass` for convenience.

### Using Variables

We use variables so that applying theme and reading code becomes more
convenient. See [variable.scss](sass/variable.scss) for an example usage.

### Using Modules

We use modules to keep the styles of parts that make sense on their own (these
can be components, classes, etc.) in a unique file. We combine `.scss` files
into a single file with `@import`. We convert the file to css and use it. See
[style.scss](sass/style.scss) for an combine example usage.

### Nesting

We use it because it helps us to see and manage hierarchy. See
[nested.scss](sass/nested.scss) for an example usage.

#### Using Ampersand

We using ampersand in the nested structure, when styling the behavior of the
parent or child. See
[nested-ampersand.scss](sass/nested-ampersand.scss)
