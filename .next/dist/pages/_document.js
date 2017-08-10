'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _ReactInjection = require('react-dom/lib/ReactInjection');

var _DOMProperty = require('react-dom/lib/DOMProperty');

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// By default React limit the set of valid DOM elements and attributes
// (https://github.com/facebook/react/issues/140) this config whitelist
// Amp elements/attributes
if (typeof _DOMProperty.properties.amp === 'undefined') {
  _ReactInjection.DOMProperty.injectDOMPropertyConfig({
    Properties: { amp: _ReactInjection.DOMProperty.MUST_USE_ATTRIBUTE },
    isCustomAttribute: function isCustomAttribute(attributeName) {
      return attributeName.startsWith('amp-');
    }
  });
}

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var html = this.props.html;

      return _react2.default.createElement('html', { amp: '' }, _react2.default.createElement(_document.Head, null, _react2.default.createElement('meta', { charset: 'utf-8' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/react-md.blue-red.min.css' }), _react2.default.createElement('link', { rel: 'canonical', href: '/' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,minimum-scale=1' }), _react2.default.createElement('style', { 'amp-boilerplate': '' }, 'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'), _react2.default.createElement('noscript', null, _react2.default.createElement('style', { 'amp-boilerplate': '' }, 'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}')), _react2.default.createElement('style', { 'amp-custom': '' }, 'body {font-family: Roboto, sans-serif; padding: 30px; color: #444;} h1 {margin-bottom: 5px;} .byline { color: #aaa; margin-bottom: 25px; } p {font-size: 18px; line-height: 30px; margin-top: 30px;} .caption {color: #ccc; margin-top: 0; font-size: 14px; text-align: center;}'), _react2.default.createElement('script', { async: true, src: 'https://cdn.ampproject.org/v0.js' })), _react2.default.createElement('body', null, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head;

      var styles = (0, _server2.default)();
      return { html: html, head: head, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;