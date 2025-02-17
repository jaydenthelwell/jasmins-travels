Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// hello_react.jsx

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _srcRichTextRenderer = require('../src/RichTextRenderer');

var _srcRichTextRenderer2 = _interopRequireDefault(_srcRichTextRenderer);

// contentfulClient.js

var _contentful = require('contentful');

var Hello = function (props) {
  return _react2['default'].createElement(
    'div',
    null,
    'Hello ',
    props.name,
    '!'
  );
};

Hello.defaultProps = {
  name: 'David'
};

Hello.propTypes = {
  name: _propTypes2['default'].string
};

document.addEventListener('DOMContentLoaded', function () {
  var rootElement = document.getElementById('react-root');
  if (rootElement) {
    _reactDom2['default'].render(_react2['default'].createElement(Hello, { name: 'React' }), document.body.appendChild(document.createElement('div')));
  }

  // Check if richTextDocument exists and render RichTextRenderer if it does
  var richTextDocument = window.richTextDocument || null; // Ensure it’s set or fallback
  if (richTextDocument && rootElement) {
    _reactDom2['default'].render(_react2['default'].createElement(_srcRichTextRenderer2['default'], { richTextDocument: richTextDocument }), rootElement);
  }
});

var client = (0, _contentful.createClient)({
  space: 'qvwo3s6zz3y2',
  accessToken: 'gf2Pskk-4gfnzt2T54F1LZSwD52uLnckrm1IrMcHXfM' });

// Move to an env var in prod
exports['default'] = client;
module.exports = exports['default'];
