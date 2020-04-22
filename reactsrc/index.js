import React from 'react';
import ReactDOM from "react-dom";
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function App(props){
    return (
        <Container>
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab label="Item One"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                </Tabs>
            </AppBar>
        </Container>
    );
}

ReactDOM.render(<App/>, document.getElementById("react"));
