'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * render() (
 * 		// Return loading animation
 * 		return <Loading />
 *
 * 		// OR using dynamically
 * 		// Will run animation if when = true.
 * 		return <Loading when={boolState} />
 * );
 *
 *
 */

function Loading(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'row' },
		_react2.default.createElement(
			'div',
			{ className: 'col-md-offset-11 col-md-2 text-center m-t-lg ' + props.classList },
			_react2.default.createElement(
				'div',
				{ className: 'loading-text' },
				props.text
			),
			_react2.default.createElement('i', { className: 'icon icon-spinner icon-spin icon-3x icon-fw margin-bottom' }),
			_react2.default.createElement(
				'span',
				{ className: 'sr-only' },
				'Loading...'
			)
		)
	);
}

Loading.propTypes = {
	when: _react2.default.PropTypes.bool,
	text: _react2.default.PropTypes.string,
	style: _react2.default.PropTypes.object,
	classList: _react2.default.PropTypes.string
};

Loading.defaultProps = {
	classList: '',
	when: true,
	style: {}
};

Loading.displayName = 'Loading';

exports.default = Loading;