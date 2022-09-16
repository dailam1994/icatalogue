import React, { useState, useTransition } from 'react'
import { Box, CircularProgress, Card, CardHeader, CardMedia, CardContent, TextField, Typography } from '@mui/material';
import { useItemAllData } from '../../hooks/guest/useItem.all';

// Function to handle Error type
function isError(error: unknown): error is Error {
    return error instanceof Error;
}

export const ItemList = () => {
    const [value, setValue] = useState("")
    const [query, setQuery] = useState("")
    const [isPending, startTransition] = useTransition()
    const { isLoading, error, data, isFetching } = useItemAllData()
    let filteredItems

    // Function to handle search feature
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value.toLowerCase())
        startTransition(() => setValue(event.target.value.toLowerCase()))
    }

    // Checking if data exists
    if (data) {
        // Filtering through the data and returning firstName and lastName
        filteredItems = data.filter((item: any) => {
            return item.title.toLowerCase().includes(value)
        })
    }

    return (
        <Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: 2 }}>
                Browse
            </Typography>
            <Box sx={{ m: "10px" }} style={{ backgroundColor: "rgb(255,255,255)" }}>
                <TextField
                    className='search-box'
                    sx={{ width: 1 }}
                    variant="filled"
                    label="Search"
                    value={query}
                    onChange={searchHandler}
                />
            </Box>
            <Box className="guest-items">
                {isLoading || isPending || isFetching ? (
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
                ) : filteredItems ? (
                    filteredItems.map((item: any) => {
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
                            </Card >
                        )
                    })) : null
                }
            </Box>
        </Box>
    )
}
