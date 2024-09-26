import "./navbar.css"

import { AppBar, Box, Button, Drawer, Toolbar, Typography, IconButton } from "@mui/material";
import NavlistDrawer from "./navListDrawer";
import { useState } from "react";
import Menu from "@mui/icons-material/Menu";

import { Inbox } from "@mui/icons-material";

const navLinks = [
    {
        title: "Home",
        path: "/Home",
        icon: <Inbox />
    },
    {
        title: "Mi Recetario",
        path: "/MiRecetario",
        icon: <Inbox />
    },
    {
        title: "Favoritas",
        path: "/Favoritas",
        icon: <Inbox />
    }
]

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="static" color="success" className="appbar">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>FOODMAX</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/* Aquí mueves el IconButton dentro del Box */}
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpen(true)}
                            sx={{ display: { xs: "flex", sm: "none" } }}
                        >
                            <Menu />
                        </IconButton>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {navLinks.map(item => (
                                <Button
                                    color="inherit"
                                    key={item.title}
                                    component="a"
                                    href={item.path}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavlistDrawer navLinks={navLinks} />
            </Drawer>
        </>
    );
};

export default Navbar;
