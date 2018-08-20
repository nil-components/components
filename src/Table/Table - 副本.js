import React from 'react';
import PropTypes from 'prop-types';
import TreeStore from 'simple-tree-store';
import classNames from 'classnames';

export default class Table extends React.Component {

    render() {
        return (
            <table
                className="nil-table-el"
                cellSpacing={0}
                cellPadding={0}
                border={0}
                {...this.props}
            />
        );
    }
}