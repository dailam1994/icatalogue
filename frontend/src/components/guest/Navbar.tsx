import { Link } from "react-router-dom"
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='nav-bar'>
                <Toolbar>
                    <Avatar alt="Logo" src={logo} sx={{ width: 56, height: 56 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ICatalogue
                    </Typography>
                    <Link to='login' style={{ textDecoration: 'none' }}><Button color="success">Login</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}