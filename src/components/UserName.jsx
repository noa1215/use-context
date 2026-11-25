import { useContext } from "react";
import { userContext } from "./UserContext";

export default function UserName() {
    const userName=useContext(userContext)
    return (
        <>
            <p>userName: {userName}</p>
        </>
    );
}