import { Routes, Route } from "react-router-dom"
import { Home } from "../../pages/admin/Home"
import { AddItem } from "../../pages/admin/Item.add"
import { DeleteItem } from "../../pages/admin/Item.delete"
import { UpdateItem } from "../../pages/admin/Item.update"

const AdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/delete-item/:id" element={<DeleteItem />} />
                <Route path="/update-item/:id" element={<UpdateItem />} />
                <Route path="/add-item" element={<AddItem />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default AdminRoutes