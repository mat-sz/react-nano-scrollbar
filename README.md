<h1 align="center">
react-nano-scrollbar
</h1>

<p align="center">
<img alt="workflow" src="https://img.shields.io/github/workflow/status/mat-sz/react-nano-scrollbar/CI">
<a href="https://npmjs.com/package/react-nano-scrollbar">
<img alt="npm" src="https://img.shields.io/npm/v/react-nano-scrollbar">
<img alt="npm" src="https://img.shields.io/npm/dw/react-nano-scrollbar">
<img alt="NPM" src="https://img.shields.io/npm/l/react-nano-scrollbar">
</a>
</p>

**react-nano-scrollbar** is a minimalist scrollbar library for React, inspired by [perfect-scrollbar](https://github.com/mdbootstrap/perfect-scrollbar), implemented inside of React component with no external dependencies.

## Installation

Install `react-nano-scrollbar` with either npm or yarn:

```
yarn add react-nano-scrollbar
# or
npm install react-nano-scrollbar
```

Then include the CSS with:

```css
/* In your CSS/SCSS file: */
@import 'react-nano-scrollbar/dist/index.css';
```

or:

```js
// In your JS/TS file (assuming your bundler supports loading CSS files):
import 'react-nano-scrollbar/dist/index.css';
```

## Example usage

```tsx
import { ScrollArea } from 'react-nano-scrollbar';

return (
  <ScrollArea className="example">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
      felis libero, maximus interdum lorem hendrerit ornare. In nisl nunc,
      finibus non gravida eu, dictum vitae metus. Proin feugiat enim purus, ac
      auctor elit facilisis et. Etiam sollicitudin lacus sed sollicitudin
      mattis. Maecenas nulla est, malesuada luctus fringilla vitae, feugiat sit
      amet massa. Sed ut tellus gravida, lobortis nunc vel, semper justo. Aenean
      sapien tellus, consectetur ac quam ut, molestie convallis sapien.
    </p>
  </ScrollArea>
);
```
