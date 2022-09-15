import { useCallback } from "react";

export const useHttp = () => {
    const request = useCallback(async (url, method="GET", body = null, headers={"Content-type": "application/json"}) => {
        try {
            const response = await fetch(url, {mehtod, body, headers})
            if(!response.ok) {
                throw new Error(`Something went Wrong! ${url}, status ${response.status}`)
            }
            const data = await response.json()
            return data;
        }catch (e) {

        }
    }, []) 
}