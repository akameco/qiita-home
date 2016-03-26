#!/usr/bin/env node
'use strict';
const meow = require('meow');
const opn = require('opn');
const readPkgUp = require('read-pkg-up');

const cli = meow(`
	Usage
	  $ qiita-home [name]
	  $ qh [name]
	Options
	  -t, --tag  Search tags
	Examples
	  $ qiita-home
	  $ qiita-home akameco
	  $ qiita-home -t Node.js
`, {
	alias: {
		t: 'tag'
	}
});

function open(name) {
	opn(`http://qiita.com/${name}`, {wait: false});
}

function openTag(tag) {
	opn(`http://qiita.com/tags/${tag}`, {wait: false});
}

if (cli.flags.tag) {
	openTag(cli.flags.tag);
} else if (cli.input.length > 0) {
	open(cli.input[0]);
} else {
	readPkgUp().then(x => open(x.pkg.author.name));
}
