function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _srcRichTextRenderer = require('../src/RichTextRenderer');

var _srcRichTextRenderer2 = _interopRequireDefault(_srcRichTextRenderer);

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
  // Render Hello component
  _reactDom2['default'].render(_react2['default'].createElement(Hello, { name: 'React' }), document.body.appendChild(document.createElement('div')));

  // Check if richTextDocument exists and render RichTextRenderer if it does
  if (window.richTextDocument) {
    _reactDom2['default'].render(_react2['default'].createElement(_srcRichTextRenderer2['default'], { richTextDocument: window.richTextDocument }), document.getElementById('react-root'));
  }
});
