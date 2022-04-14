import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from '@mui/material/Collapse';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CardActionArea from "@mui/material/CardActionArea";
import { Divider } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { RootModel } from './RootModel';

interface Props {
    mobileViewOpenSideMenu?: boolean,
    onClose: () => void
    LinkToCourseView: (id:string) => string;
    LinkToUnitView: (id:string) => string;
    rootData:RootModel

}

interface TmpArrayCollapseList {
    settings: [{ id: string, open: boolean }]
}

const SideMenu = (props: Props) => {
    const [rootData,setRootData] = useState(props.rootData)
    let theme = useTheme();
    const toggleDrawerVariant = useMediaQuery(theme.breakpoints.down('md'));
    const [coursesList, setCoursesList] = useState<TmpArrayCollapseList>({ settings: [{ id: "", open: false }] });
    const drawerWidth = 240;
    const location = useLocation()

    useEffect(() => {

        let newArray = { settings: [{}] } as TmpArrayCollapseList
        rootData.courses.map(item => {
            let tmpArray = { id: item.id, open: false }
            newArray.settings.push(tmpArray)
        })
        setCoursesList(newArray)
    }, [rootData.courses])

    const onClickToggleOpen = (id: string) => {
        let currentId = location.pathname.replace("/course/", "");

        setCoursesList(state => ({
            ...state,
            settings: state.settings.map(item => item.id === id ? { ...item, open: id !== currentId && item.open ? item.open : !item.open } : item)
        }) as TmpArrayCollapseList);
    };

    const collapseItemIfOpen = (onClickItem: any) => {
        let findById = coursesList.settings.find(item => item.id === onClickItem.id);
        if (findById) return findById.open
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    open={props.mobileViewOpenSideMenu}
                    onClose={props.onClose}
                    variant={toggleDrawerVariant ? "temporary" : "permanent"}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            border: "none"
                        },
                        '& > div': { marginTop: { xs: 0, md: 9 } }
                    }}
                >
                    {/*   <CardActionArea
                        component={RouterLink}
                        to={LinkToHome}
                        sx={{padding: "20px"}}
                    >*/}
                    <Typography variant={"h5"} paddingLeft={2} mt={1} style={{ textAlign: "start" }}>
                        Kurser
                    </Typography>
                    <Divider />
                    {/* </CardActionArea>*/}
                    <List>
                        {/*<Typography variant={"h6"} fontWeight={"bold"} padding={2}>Kurser</Typography>*/}
                        {rootData.courses.map(item => {
                            return (<div key={item.id}>
                                <ListItem
                                    button
                                    onClick={() => onClickToggleOpen(item.id)}
                                    component={RouterLink} to={props.LinkToCourseView(item.id)}
                                    sx={{ padding: "20px" }}

                                >
                                    <Typography variant={"subtitle1"}>{item.name}</Typography>
                                    {collapseItemIfOpen(item) ? <ExpandMore /> : <KeyboardArrowRight />}
                                </ListItem>
                                <Collapse in={collapseItemIfOpen(item)} unmountOnExit>
                                    {item.units.map(unit => {
                                        return (
                                            <div key={unit.id}>
                                                <ListItem
                                                    button
                                                    component={RouterLink}
                                                    to={props.LinkToUnitView(unit.id)}
                                                    sx={{ padding: 2 }}
                                                    onClick={() => toggleDrawerVariant ? props.onClose() : null}
                                                >
                                                    <Typography ml={2} variant={"subtitle2"}>
                                                        {unit.name}
                                                    </Typography>
                                                </ListItem>
                                            </div>
                                        )
                                    })}
                                </Collapse>
                            </div>)
                        })}
                    </List>
                </Drawer>
            </Box>
        </Box>
    );
}

export default SideMenu;
