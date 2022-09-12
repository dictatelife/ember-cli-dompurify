ember-cli-dompurify
====================================================================================

[![NPM Version][npm-badge]][npm-badge-url]
[![CI Status][ci-badge]][ci-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![MIT License][license-badge]][license-badge-url]

[npm-badge]: https://img.shields.io/npm/v/ember-cli-dompurify
[npm-badge-url]: https://www.npmjs.com/package/ember-cli-dompurify
[ci-badge]: https://github.com/dictatelife/ember-cli-dompurify/workflows/CI/badge.svg
[ci-badge-url]: https://github.com/dictatelife/ember-cli-dompurify/actions?query=workflow%3ACI
[codeclimate-badge]: https://codeclimate.com/github/dictatelife/ember-cli-dompurify.svg
[codeclimate-badge-url]: https://codeclimate.com/github/dictatelife/ember-cli-dompurify
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license-badge-url]: https://github.com/dictatelife/ember-cli-dompurify/blob/master/LICENSE

Use DOMPurify in your Ember application

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above

## Installation

```
ember install ember-cli-dompurify
```
## Configuration

Most usages of DomPurify should be satisfied by the helper.

If you need to use custom arguments for all of your calls to `.sanitize`, apply the configuration to your **environment.js** under the **domPurify** key. See the [DomPurify documentation](https://github.com/cure53/DOMPurify#can-i-configure-dompurify) for more information about the available options.

```js
# config/environment.js
...
  domPurify: {
    WHOLE_DOCUMENT: true,
    RETURN_DOM: true,
    ADD_URI_SAFE_ATTR: ['my-attr']
    ...
  },
...
```

If you need to use custom arguments for only one of many calls to `.sanitize`, use the service, which allows you to supply custom arguments to each invocation of `.sanitize`. See **Usage** below for more details.

## Usage

### Helper (uses global config)

```hbs
# my-component.hbs

{{dom-purify myTextContent}}
```

### Service (uses global and supplied config)

```js
# my-component.js

import { service } from '@ember/service';

...

@service domPurify;

...

this.domPurify.sanitize(myTextContent, {LOCAL_CONFIG_OPTION: value})

```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
