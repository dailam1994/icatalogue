import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { FormValues } from "../../pages/admin/Item.add"

const addItem = async (item: FormValues) => {
    // Fetch API POST user
    await fetch("/api/item", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
        credentials: "include",
    })
        .then((res) => {
            switch (res.status) {
                case 200:
                    return res.json()
                case 400:
                    throw new Error("400 Status Code")
                case 401:
                    throw new Error("401 Status Code")
                case 429:
                    throw new Error("429 Status Code")
                case 500:
                    throw new Error("500 Status Code")
            }
        })
        .then((json) => {
            // If statement to handle alert on success && return json data
            if (json) {
                return json
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export const useAddItem = () => {
    const navigate = useNavigate()

    return useMutation(["item-add"], addItem, {
        onSuccess: () => {
            navigate("/")
        },
    })
}
