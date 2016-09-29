# firefox-tabs [![Build Status](https://travis-ci.org/justfielding/firefox-tabs.svg?branch=master)](https://travis-ci.org/justfielding/firefox-tabs)[![Coverage Status](https://coveralls.io/repos/github/justfielding/firefox-tabs/badge.svg?branch=master)](https://coveralls.io/github/justfielding/firefox-tabs?branch=master)
> Get Firefox tab information from sessionstore's recovery.js file.


## Install

```
$ npm install --save firefox-tabs
```


## Usage

```js

const firefoxTabs = require('firefox-tabs');

console.log(firefoxTabs.sync());
/*
{
  deviceName: 'sage',
  modified: 2016-09-26T18:49:13.682Z,
  tabCount: 2,
  tabs: [
    {
      title: 'imbue.studio',
      url: 'https://imbue.studio'
    },
    {
      title: 'Google',
      url:  'https://www.google.com'
    }
  ]
}
*/
```


## API
Tabs are fetched from firefox's `sessionstore-backup` folder for the current profile.

### firefoxTabs()

Returns a promise for an array of `devices`.

### firefoxTabs.sync()

Returns an array of `devices`.

## Related

- [firefox-tabs-cli](https://github.com/justfielding/firefox-tabs-cli) - CLI for this module

## License

BSD 3-Clause © [Fielding Johnston](http://justfielding.com)
