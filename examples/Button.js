import "normalize.css";
import '../src/Icon/style/index.scss';
import "../src/Button/style/index.scss";
import "./Button.scss";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src/Icon';
import { Button, ButtonGroup } from '../src/Button';


ReactDOM.render(
    <div className="demo-button">
        <div>
            <Button size="xsmall">xsmall</Button>
            <Button size="small">small</Button>
            <Button>default</Button>
            <Button size="large">large</Button>
            <Button size="xlarge">xlarge</Button>
        </div>
        <Button>Secondary</Button>
        <Button disabled>Secondary</Button>
        <div>
            <Button type="primary">Secondary</Button>
            <Button type="danger">测试danger</Button>
            <Button type="warning">测试warning</Button>
            <Button type="success" icon="search">测试success</Button>
            <Button type="success" icon="search" disabled>测试success</Button>
            <Button type="info">测试info</Button>
        </div>

        <div>
            <Button active>Secondary</Button>
            <Button type="primary" active>Secondary</Button>
            <Button type="danger" active>测试danger</Button>
            <Button type="warning" active>测试warning</Button>
        </div>

        <div>
            <Button icon="search" size="xsmall"></Button>
            <Button icon="search" size="small"></Button>
            <Button icon="search" type="primary"></Button>
            <Button icon="search" size="large"></Button>
            <Button icon="search" size="xlarge"></Button>

            <Button>Search...<Icon type="search" /></Button>
        </div>

        <div>
            <Button icon="search" size="xsmall" circle></Button>
            <Button icon="search" size="small" circle></Button>
            <Button icon="search" type="primary" circle></Button>
            <Button icon="search" size="large" circle></Button>
            <Button icon="search" size="xlarge" circle></Button>
        </div>
        <div>
            <Button href="####" target="_blank">Link</Button>
        </div>

        <ButtonGroup>
            <Button active>Home</Button>
            <Button disabled >Gallery</Button>
            <Button >Services</Button>
            <Button disabled>Contact</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button type="primary">Home</Button>
            <Button type="primary" disabled >Gallery</Button>
            <Button type="primary" active>Services</Button>
            <Button type="primary" disabled>Contact</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button type="success">Home</Button>
            <Button type="success" active>Gallery</Button>
            <Button type="success">Services</Button>
            <Button type="success">Contact</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button type="danger">Home</Button>
            <Button type="danger" active>Gallery</Button>
            <Button type="danger">Services</Button>
            <Button type="danger">Contact</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button type="warning">Home</Button>
            <Button type="warning" active>Gallery</Button>
            <Button type="warning">Services</Button>
            <Button type="warning">Contact</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button type="info">Home</Button>
            <Button type="info" >Gallery</Button>
            <Button type="info">Services</Button>
            <Button type="info">Contact</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button >Home</Button>
            <Button type="primary">Home</Button>
            <Button type="success">Home</Button>
            <Button type="danger" >Gallery</Button>
            <Button type="warning">Services</Button>
            <Button type="info">Contact</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button icon="search"></Button>
            <Button icon="search"></Button>
            <Button icon="search" active></Button>
            <Button icon="search"></Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button>Search</Button>
            <Button icon="search" type="primary"></Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button icon="search" type="primary"></Button>
            <Button>Search</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button>Search</Button>
            <Button type="primary" style={{
                padding: "0 3px"
            }}>
                <Icon type="search" />
            </Button>
        </ButtonGroup>

        <div
            style={{
                width: 400,
                margin: "10px auto",
                border: '1px solid #ccc',
                padding: 5
            }}
        >
            <Button block type="danger" >测试danger</Button>
            <Button block type="warning" loading>测试warning</Button>
            <Button block type="success" loading>测试success</Button>
        </div>
    </div>,
    demo
);