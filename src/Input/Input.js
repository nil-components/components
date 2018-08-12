import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function fixControlledValue(value) {
    //undefined null
    if (value == null) return '';
    // if (typeof value === 'undefined' || value === null) {
    // 	return '';
    // }
    return value;
}

const propTypes = {
    size: PropTypes.string,
    type: PropTypes.string, //text password ...
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    inputRef: PropTypes.func,
};

export default class Input extends React.Component {
    static propTypes = propTypes;

    static defaultProps = {
        disabled: false,
        type: 'text',
        size: '', //'xsmall', 'small', 'large'
        component: 'input',
        prefixCls: 'nil-input'
    };

    handleKeyDown = (e) => {
        const { onPressEnter, onKeyDown } = this.props;
        if (e.keyCode === 13 && onPressEnter) {
            onPressEnter(e);
        }
        if (onKeyDown) {
            onKeyDown(e);
        }
    }

    handleChange = (e) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(e.target.value, e);
        }
    }

    render() {
        const props = this.props;
        const {
            prefixCls,
            type,
            size,
            disabled,
            className,
            onChange,
            onKeyDown,
            inputRef,
            component,
            ...rest
        } = props;

        const classes = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${size}`]: size,
            [className]: className
        });

        const Component = component;

        return <Component
            {...rest}
            ref={inputRef}
            className={classes}
            type={type}
            disabled={disabled}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
        />;
    }

}