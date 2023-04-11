## Image-Container

Sometimes we need to use containers for displaying images in html, in order 
to properly position and limit their dimensions. We can provide certain 
width and height to the image, but for every variation of a container, 
we need to specify the dimensions which may result excessive 
repetition of css code.


### Fixed Size Container

If we have a fixed sized container we can use full width and height.

```css
.image-container-fixed img {
    width: 100%;
    height: 100%;
}
```

This way, the image fully matches the dimensions of the container, 
however the aspect ratio of the image may be lost. We can alter the _object-fit_ 
property to protect the aspect ratio to overcome this issue. 

#### Margin/Padding Issue

A problem that occurs with this approach is, if we want some margin or padding for 
the image, the image will shift inside the container. We can set padding of the 
parent container and reduce its size accordingly but in some cases it may 
not be the best solution.

A way to solve this problem is to use ```@container``` queries. These 
queries can provide size information about a html element. If we get the size
of the container, we can calculate the necessary dimensions and margin for the 
image to achieve the visual we need.

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
different approach than the fixed size container. If we simply use full width or 
height, we may see the container expanding fully to match the size of the child
image.

In order to overcome this, we should prevent the overflow of the container.

```css
.grid .grid-item {
     overflow: hidden;
}
```

By preventing the overflow, the container will no longer grow to match the
image size and than we can use the full width and height.




