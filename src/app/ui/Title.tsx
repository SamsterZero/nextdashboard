import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Profile from "./Profile";

export default function Title() {
    return (
        <nav className="w-full flex items-stretch justify-between">
            <button>=</button>
            <div className="my-auto">Vinay</div>
            <button className=""><Profile /></button>
        </nav>
    );
}