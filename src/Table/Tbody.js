import React from 'react';
import tableMultipleHeader from 'table-multiple-header';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Colgroup extends React.Component {

    render() {
        const { columnsStore, data } = this.props;
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
                                        return <td className="nil-table-cell">
                                            <div className="nil-table-cell-inner">{row[node.title]}</div>
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