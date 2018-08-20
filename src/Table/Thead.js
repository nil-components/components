import React from 'react';
import tableMultipleHeader from 'table-multiple-header';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Colgroup extends React.Component {

    render() {
        const { columnsStore, headerNowrap } = this.props;

        const rows = tableMultipleHeader(columnsStore);

        return (
            <thead className="nil-table-thead-el">
                {
                    rows.map(row => {

                        return (
                            <tr>
                                {
                                    row.map(cell => {
                                        const node = columnsStore.getNode(cell.id);
                                        const thCls = classNames({
                                            'nil-table-cell': true,
                                            'nil-table-thead-cell': true,
                                            'nil-table-cell-leaf': columnsStore.isLeaf(cell.id)
                                        });

                                        const innerCls = classNames({
                                            'nil-table-cell-inner': true,
                                            'nil-table-cell-nowrap': headerNowrap
                                        });

                                        return <th className={thCls} {...cell}>
                                            <div className={innerCls}>{node.title}</div>
                                        </th>
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </thead>
        );
    }
}