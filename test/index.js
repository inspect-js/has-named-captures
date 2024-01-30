'use strict';

var test = require('tape');
var semver = require('semver');
var hasNamedCaptures = require('../');

test('hasNamedCaptures', function (t) {
	t.equal(typeof hasNamedCaptures, 'function', 'is a function');
	t.equal(typeof hasNamedCaptures(), 'boolean', 'returns a boolean');

	t.equal(
		hasNamedCaptures(),
		semver.satisfies(process.version, '>= 10'),
		'matches expected result in node'
	);

	t.end();
});

test('has named captures', { skip: !hasNamedCaptures() }, function (t) {
	var re = new RegExp('(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})');
	var groups = /** @type {RegExpExecArray} */ (re.exec('2024-01-29')).groups; // eslint-disable-line no-extra-parens

	t.deepEqual(groups, { __proto__: null, year: '2024', month: '01', day: '29' }, 'returns named captures');

	t.end();
});

test('no named captures', { skip: hasNamedCaptures() }, function (t) {
	t['throws'](function () {
		return new RegExp('(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})');
	});

	t.end();
});
