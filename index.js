
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
  module.exports.PropTypes = require('prop-types');
  module.exports.createClass = require('create-react-class');
} else {
  module.exports = require('./cjs/react.development.js');
  module.exports.PropTypes = require('prop-types');
  module.exports.createClass = require('create-react-class');
}
