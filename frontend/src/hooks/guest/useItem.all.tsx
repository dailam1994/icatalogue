import { useQuery } from "@tanstack/react-query"

const fetchItems = async () => {
    // Fetch API GET items
    const results = await fetch("/api/items", {
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

export const useItemAllData = () => {
    return useQuery(["item-all"], fetchItems, {
        refetchOnWindowFocus: false,
    })
}