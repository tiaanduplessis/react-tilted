
# react-tilted
[![package version](https://img.shields.io/npm/v/react-tilted.svg?style=flat-square)](https://npmjs.org/package/react-tilted)
[![package downloads](https://img.shields.io/npm/dm/react-tilted.svg?style=flat-square)](https://npmjs.org/package/react-tilted)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-tilted.svg?style=flat-square)](https://npmjs.org/package/react-tilted)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A smooth 3D tilt for React

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## About

Wrapper around [vanilla-tilt](https://micku7zu.github.io/vanilla-tilt.js/index.html) for [React](https://reactjs.org/).

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";

import Tilt from 'react-tilted'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Tilt onTiltChange={console.log} >
        <h1>Tilting 1</h1>
      </Tilt>

      <Tilt reverse >
        <h1>Tilting 2</h1>
      </Tilt>

      <Tilt scale={2}>
        <h1>Tilting 3</h1>
      </Tilt>

      <Tilt glare>
        <h1>Tilting 3</h1>
      </Tilt>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```


Supported props:


```js
{
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    startX: 0, // the starting tilt on the X axis, in degrees.
    startY: 0, // the starting tilt on the Y axis, in degrees.
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
    glare: false, // if it should have a "glare" effect
    maxGlare: 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    glarePrerender: false, // false = VanillaTilt creates the glare elements for you, otherwise
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    mouseEventElement: null, // css-selector or link to HTML-element what will be listen mouse events
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    gyroscope: true, // Boolean to enable/disable device orientation detection,
    gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at
    onTiltChange: () => {}
}
```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install react-tilted
$ # OR
$ yarn add react-tilted
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
