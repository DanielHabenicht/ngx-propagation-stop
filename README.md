[![npm version](https://badge.fury.io/js/ngx-propagation-stop.svg)](https://badge.fury.io/js/ngx-propagation-stop)
[![Build Status](https://dev.azure.com/DanielHabenicht/ngx-propagation-stop/_apis/build/status/DanielHabenicht.ngx-propagation-stop?branchName=master)](https://dev.azure.com/DanielHabenicht/ngx-propagation-stop/_build/latest?definitionId=3&branchName=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![codecov](https://codecov.io/gh/DanielHabenicht/ngx-propagation-stop/branch/master/graph/badge.svg)](https://codecov.io/gh/DanielHabenicht/ngx-propagation-stop)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDanielHabenicht%2Fngx-propagation-stop.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FDanielHabenicht%2Fngx-propagation-stop?ref=badge_shield)

# ngx-propagation-stop

A npm-packet for a stopping Click Event Propagation.

## Installation

Install from NPM

```bash
$ npm install ngx-propagation-stop --save
```

Do not forget to add it to your app.module.ts:

```typescript
import { PropagationStopModule } from 'ngx-propagation-stop';

@NgModule({
  imports: [
    PropagationStopModule
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

## Thanks to

This project is based on a StackOverflow answer: https://stackoverflow.com/questions/35274028/stop-mouse-event-propagation-in-angular

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FDanielHabenicht%2Fngx-propagation-stop.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FDanielHabenicht%2Fngx-propagation-stop?ref=badge_large)
