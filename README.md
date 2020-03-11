# Netsells Storybook Decorators

This module provides a few helper decorators for your stories. 

## Decorators

The following decorators are available:

### CenteredDecorator

Vertically centers your story markup in the view.

### ContainerDecorator

Wraps your story markup in a `.container` class.

## Installation

```sh
yarn add @netsells/storybook-decorators
```

## Usage

Enable globally:

```js
import { CenteredDecorator, ContainerDecorator } from '@netsells/storybook-decorators';
import { addDecorator } from '@storybook/vue';

addDecorator(ContainerDecorator);
addDecorator(CenteredDecorator);
```

Enable in a single story:

```js
import { CenteredDecorator, ContainerDecorator } from '@netsells/storybook-decorators';
import MyComponent from '../../../components/MyComponent';

export const myComponent = () => ({
    components: { MyComponent },

    template: '<my-component />',
});

myComponent.story = {
    decorators: [CenteredDecorator, ContainerDecorator],
};
```

