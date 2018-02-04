[![Build Status](https://travis-ci.org/DanielHabenicht/ngx-click-stop-propagation.svg?branch=master)](https://travis-ci.org/DanielHabenicht/ngx-click-stop-propagation)

# ngx-click-stop-propagation

A npm-packet for a stopping Click Event Propagation.

## Installation

Install from NPM

```bash
$ npm install ngx-click-stop-propagation --save
```

Do not forget to add it to your app.module.ts:

```typescript
import { ClickStopPropagationDirective } from 'ngx-click-stop-propagation';

@NgModule({
  declarations: [
    ClickStopPropagationDirective
  ]
})
```

## How to use

Just add the `clickStopPropagation` directive to your element and the outer elements click event wont get triggered.

```html
<div (click)="outerElementClicked()">
    <div clickStopPropagation (click)="innerElementClicked()"></div>
</div>
```

This project is based on a StackOverflow answer: https://stackoverflow.com/questions/35274028/stop-mouse-event-propagation-in-angular
