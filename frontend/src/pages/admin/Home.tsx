import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';
import Navbar from '../../components/admin/Navbar'
import { Footer } from '../../components/Footer';
import { useItemAllData } from '../../hooks/guest/useItem.all';

// Function to handle Error type
function isError(error: unknown): error is Error {
    return error instanceof Error;
}

export const Home = () => {
    const { isLoading, error, data, isFetching } = useItemAllData()

    return (
        <>
            <Navbar />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: 2 }}>
                Manage Items
            </Typography>
            <Link
                style={{
                    textDecoration: "none",
                }}
                to={'add-item'}>
                <Button sx={{ mx: 1 }}>
                    Add New Item
                </Button>
            </Link>
            <Box className="guest-items">
                {isLoading || isFetching ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <CircularProgress color="secondary" />
                        </Box>
                    </Box>
                ) : isError(error) ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <Typography style={{ color: "rgb(0,0,0)" }}>Error {error.message}</Typography>
                        </Box>
                    </Box>
                ) : data ? (
                    data.map((item: any) => {
                        return (
                            <Card key={item.itemID} className='card' sx={{ maxWidth: 345, m: 1 }} style={{ border: '1px solid rgb(247,195,102)', boxShadow: '3px 5px rgb(247,195,102)' }}>
                                <CardHeader
                                    title={item.title}
                                    subheader={new Date(item.date).toLocaleDateString()}
                                />
                                <CardMedia
                                    className='card-media'
                                    component="img"
                                    height="194"
                                    src={item.url}
                                    alt={item.title}
                                />
                                <CardContent id='item-description'>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ m: 1 }}>
                                    <Typography variant='caption'>Qty: {item.quantity}</Typography>
                                    <Typography>Price: ${item.price}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        pr: "5px",
                                        my: 0,
                                        py: 0,
                                        m: 1
                                    }}>
                                    <Link to={`/update-item/${item.itemID}`} style={{ textDecoration: "none" }}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="warning"
                                            style={{ textTransform: "none" }}>
                                            Update
                                        </Button>
                                    </Link>
                                    <Link
                                        style={{
                                            marginLeft: "3px",
                                            marginRight: "0",
                                            float: "right",
                                            textDecoration: "none",
                                        }}
                                        to={`/delete-item/${item.itemID}`}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="error"
                                            style={{ textTransform: "none" }}>
                                            Delete
                                        </Button>
                                    </Link>
                                </Box>
                            </Card >
                        )
                    })) : null
                }
            </Box>
            <Footer />
        </>
    )
}
