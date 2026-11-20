-- @title Hello
-- @desc An example: a command that says hello. Replace it with your own scripts
-- @author Your name
-- @version 1.0
-- @command
-- @usage [name]
-- @tags example
--
-- An example script, so the repository has one to publish. Type `hello`, or `hello Ada`.
-- Delete this folder when you have scripts of your own.

-- The words after the command's name, as one string.
local name = argline ~= "" and argline or "world"

log("Hello, " .. name .. "!")
