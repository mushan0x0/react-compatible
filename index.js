var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
  module.exports.PropTypes = PropTypes;
  module.exports.createReactClass = createReactClass;
} else {
  module.exports = require('./cjs/react.development.js');
  module.exports.PropTypes = PropTypes;
  module.exports.createReactClass = createReactClass;
}
