import { userContext } from "./UserContext";
import { useContext } from "react";

export default function UserGreeting(){
    return <p>hello! {useContext(userContext)}</p>
}