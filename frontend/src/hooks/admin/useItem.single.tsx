import { QueryFunctionContext, useQuery } from "@tanstack/react-query"

const fetchItem = async ({ queryKey }: QueryFunctionContext) => {
    const id = queryKey[1]

    // If statement to handle existing id
    if (id) {
        // Fetch API GET user by ID
        const results = await fetch(`/api/item/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
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
                // If statement to handle return json data
                if (json) {
                    return json
                }
            })
            .catch((err) => {
                console.log(err)
            })

        return results
    }
}

export const useItemData = (id: string | undefined) => {
    return useQuery(["item-single", id], fetchItem, {
        refetchOnWindowFocus: false,
    })
}