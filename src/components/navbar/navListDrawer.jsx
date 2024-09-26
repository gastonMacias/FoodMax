import { Drafts } from "@mui/icons-material";
import Inbox from "@mui/icons-material/Inbox";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";




const NavlistDrawer = ({ navLinks }) => {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    
                    {
                        navLinks.map(item => (
                            <ListItem disablePadding key={item.title}>
                                <ListItemButton component="a" href={item.path}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}


export default NavlistDrawer;