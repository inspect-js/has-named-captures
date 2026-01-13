# has-named-captures <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does the JS environment support named capture groups in regexes?

Returns `true` in node 10+, and equivalent engines.

## Example

```js
var hasNamedCaptures = require('has-named-captures');
var assert = require('assert');

assert.equal(typeof hasNamedCaptures(), 'boolean', 'returns true or false');
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-named-captures
[npm-version-svg]: https://versionbadg.es/inspect-js/has-named-captures.svg
[deps-svg]: https://david-dm.org/inspect-js/has-named-captures.svg
[deps-url]: https://david-dm.org/inspect-js/has-named-captures
[dev-deps-svg]: https://david-dm.org/inspect-js/has-named-captures/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-named-captures#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-named-captures.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-named-captures.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-named-captures.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-named-captures
[codecov-image]: https://codecov.io/gh/inspect-js/has-named-captures/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-named-captures/
[actions-image]: https://img.shields.io/github/check-runs/inspect-js/has-named-captures/main
[actions-url]: https://github.com/inspect-js/has-named-captures/actions
