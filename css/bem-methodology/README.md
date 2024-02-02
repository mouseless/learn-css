# BEM Methodology

We prefer BEM(Block Element Modifier) for its readability, self-documentation,
common standard and flexibility.

## Block

We give the block name to the outermost html element that makes sense in its
context, representing a block that we have made or can make
a separate component.

## Element

We give the element name to the elements of that block in the block where it is
located. We should also give the block name(s) as a prefix in the naming and we
bind the prefix with two underscores. For example `form__input`.

> :information_source:
>
> An element is always part of a block, not another element.

## Modifier

With modifiers we change the appearance, state and behavior of blocks/elements,
we do not define the blocks/elements themselves. That's why we use modifiers
next to the block or element, not by themselves. When naming, if it is a block,
we use the block name as a prefix and if it is an element, we use the element
name as a prefix and connect it with two hyphens. For example,
`form__input--secret` for element.

> :warning:
>
> The modifier should not be used alone. The modifier should only modify
> properties only in certain cases. It should not define the element by itself.

### Types of modifiers

#### Boolean

Used when only the presence or absence of the modifier is important, and its
value is irrelevant. For example, `form__input--disabled`.

#### Key-value

Used when the modifier value is important. For example,
`form_input--color_light`.

## Mix

We use Mix as a solution for duplicate code due to different elements with the
same behavior being named differently. The solution is to mix a global block
name with a local block name.

```html
<div class="car">
    <div class="car__engine engine">
    ...
    </div>
</div>
```

```css
.engine {
    /* describe engine */
}

.car__engine {
    /* position or something like that */
}
```

> :warning:
>
> When mixing, it is important not to bad use the suggestions provided by BEM. A
> different class should not be given to an element/block out of context just
> because it has the same styles.
