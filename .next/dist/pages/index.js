'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Avatars = require('react-md/lib/Avatars');

var _Avatars2 = _interopRequireDefault(_Avatars);

var _Button = require('react-md/lib/Buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FontIcons = require('react-md/lib/FontIcons');

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _ListItem = require('react-md/lib/Lists/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _NavigationDrawers = require('react-md/lib/NavigationDrawers');

var _NavigationDrawers2 = _interopRequireDefault(_NavigationDrawers);

var _SelectFields = require('react-md/lib/SelectFields');

var _SelectFields2 = _interopRequireDefault(_SelectFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png';

var drawerHeaderChildren = [_react2.default.createElement(_Avatars2.default, {
  key: avatarSrc,
  src: avatarSrc,
  role: 'presentation',
  iconSized: true,
  style: { alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0 }
}), _react2.default.createElement(_SelectFields2.default, {
  id: 'account-switcher',
  defaultValue: 'Jonathan',
  menuItems: ['Jonathan', 'Fred'],
  key: 'account-switcher',
  position: _SelectFields2.default.Positions.BELOW,
  className: 'md-select-field--toolbar'
})];

var NavigationLink = function (_PureComponent) {
  (0, _inherits3.default)(NavigationLink, _PureComponent);

  function NavigationLink() {
    (0, _classCallCheck3.default)(this, NavigationLink);

    return (0, _possibleConstructorReturn3.default)(this, (NavigationLink.__proto__ || (0, _getPrototypeOf2.default)(NavigationLink)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavigationLink, [{
    key: 'render',

    // NOTE: Don't try using Stateless (function) component here. `ref` is
    // required by React-MD/AccessibleFakeButton, but Stateless components
    // don't have one by design:
    // https://github.com/facebook/react/issues/4936
    value: function render() {
      var _props2 = this.props,
          href = _props2.href,
          as = _props2.as,
          children = _props2.children,
          _props = (0, _objectWithoutProperties3.default)(_props2, ['href', 'as', 'children']);

      return _react2.default.createElement('div', (0, _extends3.default)({}, _props, { style: { padding: 0 } }), _react2.default.createElement(_link2.default, { href: href, as: as }, _react2.default.createElement('a', { className: 'md-list-tile md-list-tile--mini', style: { width: '100%', overflow: 'hidden' } }, children)));
    }
  }]);

  return NavigationLink;
}(_react.PureComponent);

exports.default = function () {
  var closeButton = _react2.default.createElement(_Button2.default, {
    icon: true,
    tooltipLabel: 'Close the interactive demo',
    tooltipDelay: 150,
    tooltipPosition: 'left'
  }, 'close');

  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/react-md.light_blue-yellow.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' })), _react2.default.createElement(_NavigationDrawers2.default, {
    navItems: [_react2.default.createElement(_ListItem2.default, {
      key: '0',
      component: NavigationLink,
      href: '/',
      leftIcon: _react2.default.createElement(_FontIcons2.default, null, 'inbox'),
      tileClassName: 'md-list-tile--mini',
      primaryText: 'Root'
    }), _react2.default.createElement(_ListItem2.default, {
      key: '1',
      component: NavigationLink,
      href: '/non-existing-page',
      leftIcon: _react2.default.createElement(_FontIcons2.default, null, 'star'),
      tileClassName: 'md-list-tile--mini',
      primaryText: '404 page'
    })],
    contentClassName: 'md-grid',
    drawerHeaderChildren: drawerHeaderChildren,
    mobileDrawerType: _NavigationDrawers2.default.DrawerTypes.TEMPORARY_MINI,
    tabletDrawerType: _NavigationDrawers2.default.DrawerTypes.PERSISTENT_MINI,
    desktopDrawerType: _NavigationDrawers2.default.DrawerTypes.PERSISTENT_MINI,
    toolbarTitle: 'Hello, World!',
    toolbarActions: closeButton
  }, _react2.default.createElement('h1', null, 'Hello Next.js!')));
};