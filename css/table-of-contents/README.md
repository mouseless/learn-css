# Table of Contents

Here is an example of how to create a sticky table of contents (toc) section
which observes and highlights visible items.

## Layout

We used `header` for a sticky header, `nav` for the toc and `article` for the
content. Layout is uses `display: grid` with `grid-template-areas`;

```css
body {
  display: grid;
  grid-template-areas:
      "top top"
      "side content";
}

header {
  grid-area: top;
}

nav {
  grid-area: side;
}

article {
  grid-area: content
}
```

### Anchors

Simply give your `h` tags a unique id, e.g. `#title-1`. Table of contents
should have anchors that links to this hash;

```html
<a href="#title-1">Title 1</a>
```

## Making it stick

To have a sticky item `position: sticky` is the simplest way;

```css
nav {
  position: sticky;
  align-self: start;
  top: 75px;
}
```

### Rolling under the sticky header

To have the content the feel of rolling under the sticky header, we used a
white background and shadow that gives the feel;

```css
header {
  background-color: white;
  box-shadow: 0px 2px 2px white;
}
```

### Scroll margin

When you have a sticky header, you need to let the browser know about this.
Otherwise `h` tags would scroll too much and be hidden under the header.

```css
article h1, article h2 {
  scroll-margin-top: 75px;
}
```

## Observing scroll position

In order to listen to scroll position changes, you need to make use of
`IntersectionObserver` API. It is an observer object that simply observes the
elements you give to it, and fires an event when that elements enters or leaves
the visible area.

First create an observer with a callback;

```javascript
const options = { rootMargin: "-75px" };
const observer = new IntersectionObserver(onIntersection, options);
```

> :bulb:
>
> Here `rootMargin` gives us the opportunity to create an offset. Since our
> header is of `75px` height, we don't want to wait until the element actually
> leaves the window. Passing `-75px` to `rootMargin` causes the observer to
> fire the event right after it dissappears under the header.

Now, when window loads, you need to query the elements that you want to observe;

```javascript
window.addEventListener("load", () => {
  document
    .querySelectorAll("article h1, article h2")
    .forEach(element => observer.observe(element));
});
```

> :information_source:
>
> It is good to `disconnect` observer when the window unloads.

Now the only thing remaining is the callback function that is responsible for
highlighting the visible elements;

```javascript
function onIntersection(entries) {
  ...
}
```

Here you are given an element list on which you can apply `forEach` function so
that you do whatever manipulation you want. `isIntersecting` member is `true`
when the element is now visible, `false` when it leaves the visible area.

What we did was to add `highlight` class to an intersecting element, and clear
it when it is not intersecting any more.

## Full example

Full example can be found in [index.html](index.html), [style.css](style.css)
and [index.js](index.js).

## Final note

This example implementation highlights all links that are visible. In order to
highlight only the first item visible is a bit more challanging. You need to
observe `p` elements as well as `h` elements, so that you know that a heading
should still be highlighted even if its `h` element is not intersecting any
more.
