## Image-Container

Sometimes we need to use containers for displaying images in html, for
properly positioning and limiting their dimensions. We can provide certain 
width and height to the image, but for every variation of container we need 
to specify the dimensions and which may result excessive repetition of css 
styles.


### Fixed Size Container

If we have a fixed sized container we can use full width and height.

```css
.image-container-fixed img {
    width: 100%;
    height: 100%;
}
```

With this way, the image fully fits inside the container, however the aspect 
ratio of the image may be lost. We can use _object-fit_ property to overcome
that issue. 

#### Margin/Padding Issue
Another problem with this style is, if we want some margin or padding for the
image, the image will shift inside the container. We can set padding of the 
parent container but in some cases it may not be the best solution.

There way to solve this problem is to use ```@container``` queries. Those 
queries can provide size information about a html element. If we get the size
of the container, we can calculate the necessary size and margin for the image

```css
@container image-container-fixed (min-width:1px) {
    img.padding-10 {
        padding: var(--image-padding);
        width: calc(100cqw - (var(--image-padding) * 2));
        height: calc(100cqh - (var(--image-padding) * 2));
    }
}
```

The unit _cqw_ and _cqh_ provides width and height of the queried container. 
Than we simply reduce the size of the image by the amount of padding or margin
we want to use.

### Variable Size Container

Using an image inside a variable size containers such as flex or grid needs a 
different approachthan the fixed size container. If we simply use full width or 
height, we may see the container expanding fully to match the size of the child
image.

In order to prevent this, we should prevent the overflow.

```css
.grid .grid-item {
     overflow: hidden;
}
```

By preventing the overflow, the container will no longer grow to match the
image size and we can use the full width and height.


