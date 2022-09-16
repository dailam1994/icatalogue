import { lazy, Suspense } from "react"
import { LinearProgress, Container } from "@mui/material"
import GuestRoutes from "./guest/guest.route"
import { useAuthData } from "../hooks/useAdmin.auth"

const AdminRoutes = lazy(() => import("../components/admin/admin.route"))

const renderLoader = () => <p>Loading</p>

const AuthRoute = () => {
    const { isLoading, isFetching, data } = useAuthData()
    let user

    // If statement to handle existing Authentication Restriction data
    if (data) {
        user = { loggedIn: data.authenticated }

        // If statement to handle data inside data object of Authentication Restriction data
        if (data.user) {
            user = { loggedIn: data.authenticated }
        }
    }

    // If statements to handle the display of the single page
    if (isLoading || isFetching) {
        return (
            <Container sx={{ mt: "80%", width: "100%" }}>
                <LinearProgress color="secondary" />
            </Container>
        )
    }
    if (user && user.loggedIn) {
        return (
            <Suspense fallback={renderLoader()}>
                <AdminRoutes />
            </Suspense>
        )
    }
    return <GuestRoutes />
}

export default AuthRoute