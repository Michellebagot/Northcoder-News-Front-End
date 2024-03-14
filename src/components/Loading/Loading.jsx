import { useState, useEffect } from "react"


const Loading = () => {

    const [message, setMessage] = useState("Page Is Loading...")

    useEffect(() => {
        const timeout = setTimeout(() =>{
            setMessage("Page is still loading...  This is most likely due to the server reinitialising after a period of inactivity.  Thank you for your patience")
        }, 2500)
    }, [])

return (
    <h3>{message}</h3>
)

}

export default Loading