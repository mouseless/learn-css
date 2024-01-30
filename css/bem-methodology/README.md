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

## Modifier

The "M" in BEM stands for Modifier, representing the adjectives that qualify the
block and element. Continuing with the car example, when we say "light-colored
car" the "light-colored" part becomes our modifier. In naming, we again use
snake case, connecting the modifier to the element or block with two dashes. For
example, `car__window--open`.
