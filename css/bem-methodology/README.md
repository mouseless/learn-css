# BEM Methodology

We prefer BEM(Block Element Modifier) for its legibility, self-documentation,
common standard and flexibility.

## Block

We give the block name to the outermost html element of a whole that is
meaningful in its own right, representing a block that we have made or can make
a separate component.

## Element

We give the element name to the elements of that block in the block where it is
located. We should also give the block name(s) as a prefix in the naming and we
bind the prefix with two underscores. For example `form__input`.

> :information_source:
>
> An element is always part of a block, not another element.

## Modifier

We use modifiers to specify special cases that indicate the state and position
of html elements. When naming, if it is a block, we use the block name as a
prefix and if it is an element, we use the element name as a prefix and connect
it with two hyphens. For example, `form__input--secret` for element.

> :warning:
>
> A modifier can't be used in isolation from the modified block or element. A
> modifier should change the appearance, behavior, or state of the entity, not
> replace it.

### Types of modifiers

#### Boolean

Used when only the presence or absence of the modifier is important, and its
value is irrelevant. For example, `disabled`.

#### Key-value

Used when the modifier value is important. For example, `color_light`.

## Mix

Mix is a solution to code that is duplicated because different elements with the
same behavior are named differently. As a solution, it says to mix a block name
that is universal with a block name in local and use it. It is explained below
with the `car` example.

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
