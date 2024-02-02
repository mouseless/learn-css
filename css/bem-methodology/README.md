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
bind the prefix with two underscores. For example `form__title`.

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

> :bulb:
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

## So what did BEM solve?

- When we look at the code written with the Bem methodology, we can see that it
  is self-documenting.
- It makes it easy to see the hierarchical relationships within a block.
- Makes it easy to give unique names

[alternative-schemes]: https://en.bem.info/methodology/naming-convention/#alternative-naming-schemes
[principles]: https://en.bem.info/methodology/css/#dividing-code-into-parts
