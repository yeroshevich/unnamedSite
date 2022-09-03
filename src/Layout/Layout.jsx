import React, {useEffect, useState} from 'react';
import classes from './Layout.module.scss';
import {Button, Container, createTheme, Grid, NextUIProvider, Text} from "@nextui-org/react";
import Header from "./Header/Header";





const Layout = (props) => {
    const [isLightTheme,setLightTheme] = useState(true)


    const themes = [
        createTheme({
            type: 'light',
            theme: {
                colors: {
                    headerBack:'#3083DC',
                    background:'#F8FFE5',
                    color:'#FFF',
                },
                fontSizes:{
                    size:'16',
                }
            }
        }),createTheme({
            type: 'dark',
            theme: {
                colors: {
                    headerBack:'#4E4187',
                    background:'#1F1728'
                },
            },
        })]
    const changeTheme=()=>setLightTheme(prev=>!prev);

    const getTheme=()=>themes[Number(isLightTheme)];

    return (
        <NextUIProvider theme={getTheme()}>
            <>

                <div className={classes.header}>
                    <Header changeTheme={changeTheme}/>
                </div>
                <div className={classes.content}>
                    {props.children}
                </div>
                <footer>

                </footer>
            </>
        </NextUIProvider>

    );
};

export default Layout;