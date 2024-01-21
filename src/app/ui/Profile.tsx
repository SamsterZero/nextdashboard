import Image from "next/image";
import th from "@/app/lib/th.jpg";

export default function Profile() {
    return (
        <div className="">
            <Image src={th} alt={"profile"} className="rounded-full" width={32} height={32}/>
        </div>
    )
}