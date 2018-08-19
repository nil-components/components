import React from 'react';
import PropTypes from 'prop-types';
import TreeStore from 'simple-tree-store';
import classNames from 'classnames';

import Colgroup from './Colgroup';
import Thead from './Thead';
import Tbody from './Tbody';

export default class Table extends React.Component {

    static propTypes = {
        prefixCls: PropTypes.string,
        //表格数据
        data: PropTypes.array,
        //表格头
        columns: PropTypes.array,
        //是否固定表头
        fixedHeader: PropTypes.bool,
        //是否显示表头
        showHeader: PropTypes.bool,
        //无数据提示内容
        emptyText: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    }

    static defaultProps = {
        prefixCls: 'nil-table',
        data: [],
        columns: [],
        fixedHeader: false,
        showHeader: true,
        emptyText: 'No Data',
    }

    static getDerivedStateFromProps(props, state) {

        const newState = {};

        if (props.columns !== state.columns) {
            newState.columnsStore = new TreeStore(props.columns || []);
        }

        newState.columns = props.columns;

        return newState;
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { columnsStore } = this.state;
        const { data } = this.props;

        return (
            <div className="nil-table">
                <div className="nil-table-dataview">
                    <div className="nil-table-dataview-body">
                        <table className="nil-table-el" cellSpacing={0} cellPadding={0} border={0}>
                            <Colgroup columnsStore={columnsStore} />
                            <Thead columnsStore={columnsStore} />
                            <Tbody columnsStore={columnsStore} data={data} />
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}