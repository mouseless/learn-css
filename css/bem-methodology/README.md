# BEM Methodology

When we develop a website using a component-based framework like `Vue.js` or
`Nuxt.js`, each component, includes its own styles within the component file.
This approach makes it easier to manage styles within each component. However,
when considering the code as a whole, managing these styles can become
challenging and difficult to recall. To overcome this obstacle, we researched
the BEM(Block Element Modifier) methodology to ensure stable development.

## Block

The "B" in BEM stands for Block, representing the entirety of a functional piece
of code. If we illustrate this with an abstract example, it represents
situations where small components (elements) such as a car, a book, etc., come
together to form a meaningful whole. The outermost element of the block is named
using snake case, for example, `car`.

## Element

The "E" in BEM stands for Element, representing the components that make up the
aforementioned block. If we continue with the example of a car, we can refer to
parts such as the car door, mirror, wheel, etc. Elements are named using snake
case with the block name as a prefix, connected by two underscores. For example,
`car__window`, `car__wheel`, etc.

> :information_source:
>
> An element is always part of a block, not another element.

## Modifier

The "M" in BEM stands for Modifier, that defines the appearance, state, or
behavior of a block or element. Continuing with the car example, when we say
"light-colored car" the "light-colored" part becomes our modifier.The modifier
name is separated from the block or element name by a single underscore For
example, `car__window_open`.

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

### Alternative naming schemes

BEM offers the use of a few more naming schemes as an alternative. One of them
is described below. See [Alternative naming schemes][alternative-schemes] to see
the others.

> :tip:
>
> BEM says we can use our own naming conventions. As long as we can
> programmatically distinguish between `Block`, `Element` and `Modifier`.

#### Two Dashes style

With this style, we separate the modifier with `--` and write the value
separated by `-`.

## Mix

Mix is a solution to code that is duplicated because different elements with the
same behavior are named differently. As a solution, it says to mix a block name
that is universal with a block name in local and use it. It is explained below
with the `car` example.

```html
<div class="car">
    <div class="engine car__engine">
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

## Principles

BEM advises us to follow a few principles. For more flexibility, BEM recommends
the `Single responsibility principle`. For less change and complexity, it
recommends `Open/closed principle`. The `DRY("don't repeat yourself")` principle
recommends not naming and using styles with the same function differently just
because they are slightly different. See [Principles][principles] to see detail.

[alternative-schemes]: https://en.bem.info/methodology/naming-convention/#alternative-naming-schemes
[principles]: https://en.bem.info/methodology/css/#dividing-code-into-parts