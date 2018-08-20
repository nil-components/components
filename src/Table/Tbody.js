import React from 'react';
import tableMultipleHeader from 'table-multiple-header';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Colgroup extends React.Component {

    render() {
        const { columnsStore, nowrap, data } = this.props;
        const columns = columnsStore.getAllLeaf();
        console.log(columns);
        return (
            <tbody className="nil-table-tbody-el">
                {
                    data.map(row => {

                        return (
                            <tr>
                                {
                                    columns.map(id => {
                                        const node = columnsStore.getNode(id);

                                        const innerCls = classNames({
                                            'nil-table-cell-inner': true,
                                            'nil-table-cell-nowrap': nowrap
                                        });

                                        return <td className="nil-table-cell">
                                            <div className={innerCls}>{row[node.title]}</div>
                                        </td>
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        );
    }
}