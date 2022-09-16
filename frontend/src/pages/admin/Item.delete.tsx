import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import Navbar from '../../components/admin/Navbar'
import { Footer } from "../../components/Footer";
import { useItemData } from "../../hooks/admin/useItem.single";
import { useDeleteItem } from "../../hooks/admin/useItem.delete";

// Function to handle Error type
function isError(error: unknown): error is Error {
    return error instanceof Error;
}

export const DeleteItem = () => {
    const { id } = useParams()
    let resultData: Array<string> = [];

    const { isLoading, error, data, isFetching } = useItemData(id)

    useEffect(() => {
        // Checking if data exist
        if (data) {
            resultData.push(data.title)
        }
    }, [data])

    const {
        handleSubmit,
    } = useForm()

    const { mutate } = useDeleteItem()

    // Function to handle form submission
    const onSubmit = () => {
        if (id) {
            resultData.push(id)
        }

        mutate(resultData)
    }

    return (
        <>
            <Navbar />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: 2 }}>
                Delete Item
            </Typography>
            <Box>
                {isLoading || isFetching ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <CircularProgress color="primary" />
                        </Box>
                    </Box>
                ) : isError(error) ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <Typography style={{ color: "rgb(0,0,0)" }}>Error {error.message}</Typography>
                        </Box>
                    </Box>
                ) : data ? (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "rgb(247,195,102)",
                            padding: "20px 10px",
                            margin: "10px 30px",
                            borderRadius: "10px",
                        }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img id="upload-image" src={data.url} alt='Image Preview' />
                        </Box>
                        <TextField
                            id="title"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Title"
                            defaultValue={data.title}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="description"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Description"
                            defaultValue={data.description}
                            multiline
                            InputProps={{
                                readOnly: true,
                            }}
                            rows={4}
                        />
                        <TextField
                            id="quantity"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Quantity"
                            defaultValue={data.quantity}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="price"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Price"
                            defaultValue={data.price}
                            InputProps={{
                                readOnly: true,
                            }} />
                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                            <Button
                                variant="contained"
                                color="error"
                                type="submit"
                                sx={{ width: "50%" }}
                                style={{ textTransform: "none" }}>
                                Delete
                            </Button>
                        </Box>
                    </form>
                ) : null
                }
            </Box>
            <Link style={{ textDecoration: 'none' }} to="/">
                <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
                    <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
                    Back
                </Button>
            </Link>
            <Footer />
        </>
    )
}
