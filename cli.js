#!/usr/bin/env node
'use strict';
const meow = require('meow');
const opn = require('opn');
const readPkgUp = require('read-pkg-up');

const cli = meow(`
	Usage
	  $ qiita-home [name]
	  $ qh [name]
	Examples
	  $ qiita-home
	  $ qiita-home akameco
`);

function open(name) {
	opn(`http://qiita.com/${name}`, {wait: false});
}

if (cli.input.length > 0) {
	open(cli.input[0]);
} else {
	readPkgUp().then(x => open(x.pkg.author.name));
}
