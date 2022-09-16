import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { Box, Button, CircularProgress, Input, TextField, Typography } from '@mui/material';
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import Navbar from '../../components/admin/Navbar'
import { Footer } from "../../components/Footer";
import { useItemData } from "../../hooks/admin/useItem.single";
import { useUpdateItem } from "../../hooks/admin/useItem.update";
import { FormValues } from "./Item.add";

// Function to handle Error type
function isError(error: unknown): error is Error {
    return error instanceof Error;
}

export type ResultDataProps = {
    id: string | undefined;
    url: string;
    title: string;
    description: string;
    quantity: string;
    price: string;
}

export const UpdateItem = () => {
    const { id } = useParams()
    const [previewSource, setPreviewSource] = useState('')
    let secureUrl: string;
    let resultData: ResultDataProps;

    const { isLoading, error, data, isFetching } = useItemData(id)

    useEffect(() => {
        if (data) {
            secureUrl = data.url
        }
    }, [data])

    const {
        register,
        handleSubmit,
    } = useForm<FormValues>()

    const { mutate } = useUpdateItem()

    // Function to handle Image Input
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files !== null) {
            const file: File = event.target.files[0]
            previewFile(file)
        }
    }

    // Function to handle form submission
    const onSubmit: SubmitHandler<FormValues> = (formData) => {
        const { title, description, quantity, price } = formData

        // If statement to handle image
        if (previewSource.startsWith('data')) {
            resultData = {
                id,
                url: previewSource,
                title,
                description,
                quantity,
                price
            }
        } else {
            resultData = {
                id,
                url: secureUrl,
                title,
                description,
                quantity,
                price
            }
        }

        mutate(resultData)
    }

    // Function to preview the Image File
    const previewFile = (file: File) => {
        // Declaring a File Reader
        const reader = new FileReader()

        // Reading the file as a Data URL
        reader.readAsDataURL(file)

        // Onloadend Reader
        reader.onloadend = () => {
            // If statement to check if result exist
            if (reader.result !== null) {
                // Assigning result to state
                setPreviewSource(reader.result.toString())
            }
        }
    }

    return (
        <>
            <Navbar />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: 2 }}>
                Update Item
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {previewSource && (
                    <img id="upload-image" src={previewSource} alt='Image Preview' />
                )}
            </Box>
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
                        <Input
                            id="url"
                            type="file"
                            sx={{ m: "10px" }}
                            placeholder="Image"
                            onChange={handleInput}
                        />
                        <TextField
                            id="title"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Title"
                            defaultValue={data.title}
                            InputProps={{
                                readOnly: true,
                            }}
                            {...register("title", { required: true })}
                        />
                        <TextField
                            id="description"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Description"
                            defaultValue={data.description}
                            multiline
                            rows={4}
                            {...register("description", {
                                required: false
                            })}
                        />
                        <TextField
                            id="quantity"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Quantity"
                            defaultValue={data.quantity}
                            {...register("quantity", {
                                required: true
                            })}
                        />
                        <TextField
                            id="price"
                            sx={{ m: "10px" }}
                            variant="outlined"
                            label="Price"
                            defaultValue={data.price}
                            {...register("price", {
                                required: true
                            })} />
                        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                            <Button
                                variant="contained"
                                color="warning"
                                type="submit"
                                sx={{ width: "50%" }}
                                style={{ textTransform: "none" }}>
                                Update
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
