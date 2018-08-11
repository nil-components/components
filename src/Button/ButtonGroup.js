import React from 'react';
import classNames from 'classnames';


const ButtonGroup = (props) => {
	const {
		prefixCls = 'nil-btn-group',
		size = '',
		className,
		...others
	} = props;

	const classes = classNames(prefixCls, {
		[`${prefixCls}-${size}`]: size,
	}, className);

	return <div {...others} className={classes} />;
};

export default ButtonGroup;