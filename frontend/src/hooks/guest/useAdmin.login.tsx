import { useMutation } from "@tanstack/react-query"
import { FormValues } from '../../pages/guest/Login'

const loginAdmin = async (guest: FormValues) => {
    // Fetch API POST Admin Login Data
    await fetch("/api/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(guest),
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
            // If statement to handle json message and redirect
            if (json) {
                alert(json.message)
                window.location.href = "https://catalogue19940827.herokuapp.com/"
            }
        })
        .catch((err) => alert(err))
}

export const useAdmin = () => {
    return useMutation(["guest-login"], loginAdmin)
}