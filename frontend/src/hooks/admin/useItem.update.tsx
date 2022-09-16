import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { ResultDataProps } from "../../pages/admin/Item.update"


const updateItem = async (item: ResultDataProps) => {
    const id = item.id

    // Fetch API PUT Item by ID
    const results = await fetch(`/api/item/${id}`, {
        method: "PUT",
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
                case 404:
                    throw new Error("404 Status Code")
                case 429:
                    throw new Error("429 Status Code")
                case 500:
                    throw new Error("500 Status Code")
            }
        })
        .then((json) => {
            // If statement to handle alert display on succession && return of json data
            if (json) {
                return json
            }
        })
        .catch((err) => {
            // Handling alert display of errors
            console.log(err)
        })

    return results
}

export const useUpdateItem = () => {
    const navigate = useNavigate()

    return useMutation(["update-item"], updateItem, {
        onSuccess: () => {
            navigate("/")
        },
    })
}
