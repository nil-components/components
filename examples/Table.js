import "normalize.css";
import '../src/Table/style/index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '../src/Table';

const columns = [
    {
        title: 'T1',
        field: 'afa',
        width: 400,
        id: 1
    },
    {
        id: 2,
        title: 'T2',
        children: [
            { id: 5, title: 'T5', width: 100, },
            {
                id: 6, title: 'T6', children: [
                    { id: 8, title: 'T8', width: 100, },
                    { id: 9, title: 'T9', width: 100, },
                    { id: 10, title: 'T10', width: 100, },
                ]
            },
            { id: 7, title: 'T7', width: 100, },
        ]
    },
    {
        id: 3, title: 'T3', width: 100,
    },
    {
        id: 4, title: 'T4', width: 100,
    },
];

const dataset = [
    { T1: 'T1', T5: 'T5T5T5T5T5T5T5T5T5T5T5T5T5T5T5T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
    { T1: 'T1', T5: 'T5', T8: 'T8', T9: 'T9', T10: 'T10', T7: 'T7', T3: 'T3', T4: 'T4' },
];

ReactDOM.render(
    <div style={{
        width: '100%',
        height: 420,
        overflow: 'auto'
    }}>
        <Table columns={columns} data={dataset} />
    </div>,
    demo
);