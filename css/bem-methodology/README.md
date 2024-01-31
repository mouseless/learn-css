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
