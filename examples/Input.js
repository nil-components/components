import "normalize.css";
import '../src/Input/style/index.scss';
import "../src/Button/style/index.scss";
import "./Input.scss";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src/Icon';
import { Button, ButtonGroup } from '../src/Button';
import Input from '../src/Input/Input';


ReactDOM.render(
    <div className="demo-button">
        <div>
            <Input style={{
                width: 150
            }} size="xsmall" />
            <Input style={{
                width: 150
            }} size="small" />
            <Input style={{
                width: 150
            }} />
            <Input style={{
                width: 150
            }} size="large" />
            <Input style={{
                width: 150
            }} size="xlarge" />
        </div>

        <div style={{
            width: 300
        }}>
            <Input placeholder="search..." />
            <Input type="password" onPressEnter={() => console.log(1)} onChange={(v) => console.log(v)} />
            <Input disabled />
            <Input value="sunday" autoFocus />

            <Input component="textarea" />
        </div>

    </div>,
    demo
);