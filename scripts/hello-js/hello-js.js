// @title Hello (JavaScript)
// @desc An example: a command that says hello, in JavaScript. Replace it with your own scripts
// @author Your name
// @version 1.0
// @command
// @usage [name]
// @tags example
//
// The same as hello.lua, in JavaScript. Type `hello-js`, or `hello-js Ada`.
// Delete this folder when you have scripts of your own.

// The words after the command's name, as one string.
const name = argline !== "" ? argline : "world";

log(`Hello, ${name}!`);
