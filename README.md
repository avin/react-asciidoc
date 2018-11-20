# react-asciidoc

> React wrapper around Asciidoctor.js

[![NPM registry](https://img.shields.io/npm/v/react-asciidoc.svg?style=for-the-badge)](https://yarnpkg.com/en/package/react-asciidoc) [![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge)](LICENSE)

## Demo

Here is an [examples page](https://avin.github.io/react-asciidoc)

## Install

```bash
# Yarn
yarn add react-asciidoc

# NPM
npm install --save react-asciidoc
```

## Usage

```js
import React from 'react';
import Asciidoc from 'react-asciidoc';
import 'react-asciidoc/style.css'; // base Asciidoc style

const DemoComponent = () => <Asciidoc>*Asciidoc* content here...</Asciidoc>;
```

## Styling

Use can use custom CSS. More info [here...](https://github.com/asciidoctor/asciidoctor-stylesheet-factory)

## API

#### Props

| Property     | Type   | Required? | Description                                                                                                                                                       |
| :----------- | :----- | :-------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children     | String |     ✓     | Asciidoc content as string                                                                                                                                        |
| style        | Object |           | Optional inline style to attach to outermost element.                                                                                                             |
| className    | String |           | Optional CSS className to attach to outermost element.                                                                                                            |
| outerTagName | string |           | Tag name passed to document.createElement to create the outer container element. This is an advanced property; in most cases, the default ("div") should be used. |

## License

MIT © [avin](https://github.com/avin)
