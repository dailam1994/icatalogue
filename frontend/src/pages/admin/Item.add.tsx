import React, { useState } from "react";
import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import { Box, Button, Input, TextField, Typography } from '@mui/material';
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import Navbar from '../../components/admin/Navbar'
import { Footer } from "../../components/Footer";
import { useAddItem } from "../../hooks/admin/useItem.add";

// Declaring type for Form Values
export type FormValues = {
    title: string;
    description: string;
    quantity: string;
    price: string;
};

export const AddItem = () => {
    const [previewSource, setPreviewSource] = useState('')
    const {
        register,
        handleSubmit,
    } = useForm<FormValues>()

    const { mutate } = useAddItem()

    // Function to handle Inputs
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files !== null) {
            const file: File = event.target.files[0]
            previewFile(file)
        }
    }

    // Function to handle form submission
    const onSubmit: SubmitHandler<FormValues> = (formData) => {
        const { title, description, quantity, price } = formData

        const data = {
            url: previewSource,
            title,
            description,
            quantity,
            price
        }

        mutate(data)
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
                Add Item
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {previewSource && (
                    <img id="upload-image" src={previewSource} alt='Image Preview' />
                )}
            </Box>
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
                    {...register("title", { required: true })}
                />
                <TextField
                    id="description"
                    sx={{ m: "10px" }}
                    variant="outlined"
                    label="Description"
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
                    {...register("quantity", {
                        required: true
                    })}
                />
                <TextField
                    id="price"
                    sx={{ m: "10px" }}
                    variant="outlined"
                    label="Price"
                    {...register("price", {
                        required: true
                    })} />
                <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        sx={{ width: "50%" }}
                        style={{ textTransform: "none" }}>
                        Create
                    </Button>
                </Box>
            </form>
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
