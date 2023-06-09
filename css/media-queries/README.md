# Media Queries

Media queries can get messy faster than you think. To organize css files that
has media queries we need to have ground rules to follow.

## Deciding on screen sizes

Introduce 2-4 screen sizes as variables, so that you can refer to these in
media queries without hard-coding your screen sizes.

Follow t-shirt size convention;

```css
:root {
  --page-l: 1920px;
  --page-m: 1280px;
  --page-s: 800px;
}
```

> :information_source:
>
> Variables cannot be used in media queries. So indicate variable name within
> comments along with the screen size value so that you can find and replace
> easily. Or you may prefer using `.scss` as in [Scss / Media
> Queries](../../scss/media-queries/README.md).

## Placement of media queries

Prefer one media query per screen size in a css file. This way it is easier to
find all adjustments for the same screen size at one place.

```css
.container {
  width: var(--page-l);
  margin: auto;
}

.row {
  padding: 0 2em;
}

@media (max-width: 1920px /* --page-l */) {
  .container {
    width: var(--page-m);
  }

  .row {
    padding: 0 1em;
  }
}
```

Media queries should be listed from larger screen to smaller screen.

```css
.container {
  ...
}

@media (max-width: 1920px /* --page-l */) {
  ...
}

@media (max-width: 1280px /* --page-m */) {
  ...
}

@media (max-width: 800px /* --page-s */) {
  ...
}
```
