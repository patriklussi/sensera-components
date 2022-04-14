import React, { FC, useContext, useState } from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { Link as RouterLink } from "react-router-dom";
import EventIcon from "@mui/icons-material/Event";
import Badge from "@mui/material/Badge";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
/* import RightSideCalenderDrawer from "./RightSideMenu"; */
import UseSwitchesCustom from "./UseSwitchesCustom";
import { Chat, RootModel } from './RootModel';
import { Home as HomeIcon } from '@material-ui/icons';
import { BrowserRouter as Router } from 'react-router-dom';
import RightSideCalenderDrawer from "./RightSideMenu";
import { SwitchLeftOutlined } from '@mui/icons-material';

export interface Iprops {
    portal: "admin" | "teacher" | "student";
    onIconMenuClicked?: () => void;
    LinkToChatView: (string: string) => string;
    LinkToHome: () => string;
    LinkToProfileMainView: () => string;
    rootData: RootModel
}

export const Header = ({ rootData, ...props }: Iprops) => {

    const [anchorElPopup, setAnchorElPopup] = useState<null | HTMLElement>(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [openCalenderRightSideMenu, setOpenCalenderRightSideMenu] = useState(false);

    const handleClickOpenPopup = (event: React.MouseEvent<HTMLElement>) => {
        setOpenPopup(true)
        setAnchorElPopup(event.currentTarget)
    };

    const handleClosePopup = () => {
        setOpenPopup(false)
        setAnchorElPopup(null)
    };

    const toggleRightSideMenu = () => {
        setOpenCalenderRightSideMenu(!openCalenderRightSideMenu)
    };

    const getPopupsByTextLabel = (rootData: RootModel, textLabel: string) => {
        switch (textLabel) {
            case "Chat":
                return chatPopupMenu(rootData.chat)
            case "Profile":
                return ProfilePopupMenu()
            case "More":
                return morePopupMenu(rootData)
        }
    };

    const chatPopupMenu = (chatMessages: Chat[]) => {
        return (
            chatMessages.map(msg => {
                return (<div>
                    <MenuItem component={RouterLink} to={props.LinkToChatView(msg.id)}>
                        <ListItemIcon>
                            <Avatar />
                        </ListItemIcon>
                        {msg.chatMessage}
                    </MenuItem>
                </div>
                )
            })
        )
    };

    const ProfilePopupMenu = () => {
        return (
            <div>
                <MenuItem component={RouterLink} to={props.LinkToProfileMainView()}>
                    <ListItemIcon>
                        <Avatar />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </div>
        )
    };

    const morePopupMenu = (rootData: RootModel) => {
        return (
            <div>
                <MenuItem component={RouterLink} to={props.LinkToProfileMainView()}>
                    <ListItemIcon>
                        <Avatar />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </div>
        )
    };

    return (
        <Router>
            <AppBar position="fixed" elevation={0} /*sx={{backgroundColor: '#dcdcdd'}}*/>
                <Toolbar disableGutters >
                    <IconButton onClick={props.onIconMenuClicked} sx={{ mr: 'none', display: { md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton size={"large"} sx={{ padding: 3 }} component={RouterLink} to={props.LinkToHome()}>
                        <HomeIcon color="action" />
                    </IconButton>
                    <Box flexGrow={1} />

                    {props.portal !== "student" ? (
                        <Tooltip title={`${props.portal === "admin" ? "Byt till Lärare" : "Byt till Admin"}`}>
                            <IconButton aria-label="calendar" color="inherit">
                                <SwitchLeftOutlined />
                            </IconButton>
                        </Tooltip>
                    ) : null}
                    <Tooltip title="Calender">
                        <IconButton color="inherit"
                            onClick={toggleRightSideMenu}>
                            <EventIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Chat">
                        <IconButton
                            size="large"
                            color="inherit"
                            component={RouterLink} to={props.LinkToChatView("chat")}
                        >
                            <Badge badgeContent={4} color="warning">
                                <ChatIcon />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    {/*   <Grid item>
                       <Tooltip title="Messages">
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={e => handleClickOpenPopup(e)}
                            >
                                <Badge badgeContent={6} color="warning">
                                    <ForumIcon/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Grid>   */}
                    {/*   <Grid item>
                        <Tooltip title="Notifications">
                            <IconButton
                                size="large"
                                color="inherit"
                                 onClick={e => handleClickOpenPopup(e)}
                            >
                                <Badge badgeContent={6} color="error">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Grid>    */}

                    <Tooltip title="Profile">
                        <IconButton size="large" color="inherit" onClick={e => handleClickOpenPopup(e)}>
                            <AccountCircle />
                        </IconButton>
                    </Tooltip>
                    {/*     <IconButton
                    size="large"
                    color="inherit"
                    aria-label={"More"}
                    onClick={e => handleClickOpenPopup(e)}
                    sx={{display: {md: "none"}}}
                >
                    <MoreIcon/>
                </IconButton>*/}
                    <UseSwitchesCustom />
                    <Menu
                        anchorEl={anchorElPopup}
                        open={openPopup}
                        onClose={handleClosePopup}
                        onClick={handleClosePopup}
                        PaperProps={{
                            elevation: 1,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <ProfilePopupMenu />
                    </Menu>
                </Toolbar>
                <RightSideCalenderDrawer rootData={rootData} openDrawer={openCalenderRightSideMenu} closeDrawer={toggleRightSideMenu} />
            </AppBar>
        </Router>
    );
};


export default Header;