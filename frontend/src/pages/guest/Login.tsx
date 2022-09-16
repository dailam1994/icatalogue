import { useForm, SubmitHandler } from "react-hook-form";
import { InputAdornment, Typography, Button, Box, TextField } from "@mui/material"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined"
import LoginNav from '../../components/guest/LoginNav'
import { Footer } from "../../components/Footer";
import { useAdmin } from "../../hooks/guest/useAdmin.login"

// Declaring Form Type
export type FormValues = {
    username: string;
    password: string;
};

// Custom Error Input Styling
export const errorInput = {
    backgroundColor: "#fbe9e7",
    padding: "10px",
    borderLeft: "5px solid #ff5722",
    color: "#ff5722",
    fontSize: "13px",
    width: "100%",
}

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const { mutate } = useAdmin()

    // Handling Form Submission
    const submitForm: SubmitHandler<FormValues> = (formData) => {
        mutate(formData)
    }

    return (
        <div className='login-component'>
            <LoginNav />
            <Box className='login-container' style={{ background: "rgb(255,255,255)" }}>
                <img className='login-img' src="https://res.cloudinary.com/lqd2708/image/upload/v1658827732/login_rzowy5.png" alt="Login Image" height='650' width='1000' />
                <form
                    className="admin-login"
                    onSubmit={handleSubmit(submitForm)}>
                    <Typography sx={{ m: "10px" }} variant="h4" style={{ color: "rgb(0,0,0)", textAlign: "center" }}>
                        <strong>Login</strong>
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            m: "10px",
                        }}>
                        <TextField
                            type="text"
                            id="username"
                            sx={{ color: "rgb(255,255,255)", m: 1 }}
                            className="form-control"
                            placeholder="Username"
                            label="Username"
                            {...register("username", { required: true, pattern: /^[a-zA-Z]{3,255}$/i })}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PersonOutlineOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {errors.username && <span style={errorInput}>! Please check username ...</span>}
                        <TextField
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                                pattern: /((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,200})\S$/i,
                            })}
                            label="Password"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <KeyOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {errors.password && <span style={errorInput}>! Please check password ...</span>}
                        <Button
                            sx={{ display: "block", width: "100px", mt: "30px" }}
                            type="submit"
                            style={{
                                background: "#2196f3",
                                border: "3px solid rgb(255,255,255)",
                                color: "rgb(255,255,255)",
                                textTransform: "none",
                            }}>
                            Sign in
                        </Button>
                    </Box>
                </form>
            </Box>
            <Footer />
        </div>
    )
}