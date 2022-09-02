import React, {useEffect} from 'react';
import classes from "./Header.module.scss";
import {Button, Container, Grid, Text} from "@nextui-org/react";
import {useState} from "react";

const Header = ({changeTheme}) => {
    const [isMenuShowed,setShowMenu] = useState(false)
    const showMenu = ()=>setShowMenu(prev=>!prev)
    const closeMenu = ()=>setShowMenu(false)


    return (
        <div >
            <Container className={classes.header} css={{background:'$headerBack'}}>
                <Grid.Container justify={'center'} className={classes.headerGrid}>
                    <Grid xs={5} className={classes.logo}>
                        <Text h3>logo</Text>
                    </Grid>
                    <Grid className={classes.menuGrid}>
                        <div className={classes.nav + " "+classes.headerGrid}>
                            <Text h4>Главная</Text>
                            <Text h4>Главная</Text>
                            <Text h4>Главная</Text>
                            <div>
                                <Button
                                    onPress={changeTheme}
                                >
                                    Change theme
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid.Container>
                <div
                    className={classes.menuButtonBlock} >
                    <div
                        className={classes.menuButton}
                         onClick={showMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Container
                        css={{background:'$headerBack'}}
                        className={classes.cont + ' ' +((isMenuShowed)?classes.visible:classes.hidden)}>
                        <ul
                            onBlur={closeMenu}
                            className={classes.wrapMenuList }
                        >
                            <li>Главная</li>
                            <li>Главная</li>
                            <li>Главная</li>
                            <li>
                                <Button
                                    onPress={changeTheme}
                                    color="error"
                                    auto
                                >
                                    Change theme
                                </Button>
                            </li>
                        </ul>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default Header;