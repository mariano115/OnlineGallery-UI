import React from "react";
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@material-ui/core";
import {
    CheckBoxOutlineBlankOutlined, DraftsOutlined, HomeOutlined, InboxOutlined, MailOutline, ReceiptOutlined,
} from "@material-ui/icons";
import HomePage from '../Views/Home/Home';

const data = [
    {
        name: "Home",
        icon: <HomeOutlined />,
    },
    { name: "Inbox", icon: <InboxOutlined /> }
];

const MainLayout = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

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
        <div>
            <Button onClick={() => setDrawerOpen(true)}>Menu</Button>
            <Drawer
                anchor='left'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                {getList()}
            </Drawer>
        </div>
    )
}

export default MainLayout;