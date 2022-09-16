import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

export default function ButtonAppBar() {
    // Function to handle the logout feature
    const handleLogout = async () => {
        // Fetch API POST user logout
        await fetch("/api/admin/logout", {
            method: "POST",
            credentials: "include",
        })
            .then((res) => {
                if (res.status === 200) {
                    // Handling the successful logut & refirect
                    console.log("Logged out successfully!")
                    window.location.href = "https://catalogue19940827.herokuapp.com/"
                } else {
                    console.log("Error Logging out!")
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='nav-bar'>
                <Toolbar>
                    <Avatar alt="Logo" src={logo} sx={{ width: 56, height: 56 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ICatalogue
                    </Typography>
                    <Button onClick={handleLogout} color="error">Logout</Button>
                </Toolbar>

            </AppBar>
        </Box>
    );
}