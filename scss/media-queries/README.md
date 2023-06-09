# Media Queries

This is an extension to [Css / Media
Queries](../../css/media-queries/README.md). Please refer to that document
before reading this one.

## Deciding on screen sizes

Here, we demonstrate using variables for different screen sizes to be used in
media queries.

```scss
$page-l: 1920px;
$page-m: 1280px;

@media (max-width: $page-l) {
  ...
}

@media (max-width: $page-m) {
  ...
}
```
