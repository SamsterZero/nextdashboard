import Link from "next/link";
import NavLinks from "./NavLinks";

export default function NavMenu() {
    return (
        <div className="grid overflow-auto gap-2 grid-flow-col md:grid-flow-row">
            <NavLinks/>
        </div>
    )
}