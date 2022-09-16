import { Routes, Route } from "react-router-dom"
import { Guest } from "../../pages/guest/Guest"
import { Login } from "../../pages/guest/Login"

const GuestRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Guest />} />
            </Routes>
        </>
    )
}

export default GuestRoutes