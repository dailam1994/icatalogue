import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

const deleteItem = async (item: Array<string>) => {
    const id = item[1]

    const data = {
        title: item[0],
        id: item[1]
    }

    // Fetch API DELETE Item by ID
    const results = await fetch(`/api/item/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
    })
        .then((res) => {
            switch (res.status) {
                case 200:
                    return
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
        .catch((err) => {
            console.log(err)
        })

    return results
}

export const useDeleteItem = () => {
    const navigate = useNavigate()

    return useMutation(['delete-item'], deleteItem, {
        onSuccess: () => {
            navigate("/")
        },
    })
}