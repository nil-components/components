import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Colgroup extends React.Component {

    render() {
        const { columnsStore } = this.props;
        const columns = columnsStore.getAllLeaf();


        return (
            <colgroup>
                {
                    columns.map(cid => {
                        const column = columnsStore.getNode(cid);
                        const styles = {
                            width: column.width,
                            textAlign: column.align,
                        };

                        return <col style={styles} />
                    })
                }
            </colgroup>
        );
    }
}