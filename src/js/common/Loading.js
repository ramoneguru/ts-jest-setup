import React from 'react';
import './styles.less';

/**
 * Standard Loading component for showing spinning icon animation
 *
 * Usage:
 *
 * import {Loading} from 'ui-components';
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
	if (!props.when) {
		return null;
	}

	return (
		<div className="row">
			<div className={'col-md-offset-11 col-md-2 text-center m-t-lg ' + props.classList}>
				<div className="loading-text">{props.text}</div>
				<i className="icon icon-spinner icon-spin icon-3x icon-fw margin-bottom"></i>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}

Loading.propTypes = {
	when: React.PropTypes.bool,
	text: React.PropTypes.string,
	style: React.PropTypes.object,
	classList: React.PropTypes.string
};

Loading.defaultProps = {
	classList: '',
	when: true,
	style: {}
};

Loading.displayName = 'Loading';

export default Loading;