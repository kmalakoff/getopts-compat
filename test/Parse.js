const getopts = require("..")
const deepEqual = require("testmatrix-compat").deepEqual

const Parse = function (props) { return {
  name: props.name,
  actual: getopts(props.argv, props.opts),
  assert: deepEqual,
  expected: props.expected
} }

exports.Parse = Parse
