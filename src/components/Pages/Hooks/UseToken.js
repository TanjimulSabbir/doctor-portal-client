import { useState } from "react";
import { useEffect } from "react";

const UseToken = (email) => {
    const [accessToken, setAccessToken] = useState('')
    useEffect(() => {
        setAccessToken('');
        fetch('https://doctor-portal-server-seven-brown.vercel.app/jwt', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem("accessToken", data.accessToken);
                    setAccessToken(data.accessToken);
                }
            });

    }, [email]);

    return accessToken;
}

export default UseToken;