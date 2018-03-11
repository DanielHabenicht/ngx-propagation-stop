[![Build Status](https://travis-ci.org/DanielHabenicht/ngx-propagation-stop.svg?branch=master)](https://travis-ci.org/DanielHabenicht/ngx-propagation-stop)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/DanielHabenicht/ngx-propagation-stop.svg)](https://greenkeeper.io/)
# ngx-propagation-stop



A npm-packet for a stopping Click Event Propagation.

## Installation

Install from NPM

```bash
$ npm install ngx-propagation-stop --save
```

Do not forget to add it to your app.module.ts:

```typescript
import { PropagationStopDirective } from 'ngx-propagation-stop';

@NgModule({
  declarations: [
    PropagationStopDirective
  ]
})
```

## How to use

Just add the `propagationStop` directive to your element and the outer elements click event wont get triggered.

```html
<div (click)="outerElementClicked()">
    <div propagationStop (click)="innerElementClicked()"></div>
</div>
```

## Contribute

This project is based on a StackOverflow answer: https://stackoverflow.com/questions/35274028/stop-mouse-event-propagation-in-angular
