import { useContext } from "react"
import FamilyContext from "../context/FamilyContext"

export default function GrandSon() {
    const familyContext = useContext(FamilyContext);
    return (
        <div>
            {familyContext.name}
        </div>
    )
}