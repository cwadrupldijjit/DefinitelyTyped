/// <reference path="./blob-stream.d.ts" />
/// <reference types="node" />

var bl = require('blob-stream');

var blob = bl.toBlob();
var brl = bl.toBlobURL("app/JSON");
