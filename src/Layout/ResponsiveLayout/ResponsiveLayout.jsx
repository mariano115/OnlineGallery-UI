import React from "react";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@material-ui/core";
import {
    HomeOutlined, InboxOutlined
} from "@material-ui/icons";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from '../../Views/Home/Home';
import './ResponsiveLayout.css';
import Logo from '../../Assets/Logo.png';

const data = [
    {
        name: "Home",
        icon: <HomeOutlined />,
    },
    { name: "Inbox", icon: <InboxOutlined /> }
];

const MainLayout = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
            {data.map((item, index) => (
                <ListItem button key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </div>
    );

    return (
            <div className="layout">
                <Button onClick={() => setDrawerOpen(true)}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Button>
                <Drawer
                    anchor='left'
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    {getList()}
                </Drawer>
                <img src={Logo} alt="Mariano Guerrero Developer Logo" className="mariano-logo"/>
            </div>
    )
}

export default MainLayout;