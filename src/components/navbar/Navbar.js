import React, {useState} from "react";
import { Link } from "react-router-dom";
import cx from "classnames"; 
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid"; 
import NavItem from "./NavItem"; 

export default function Navbar() {

    const handleClick = () => {
        setOpen( ! open); 
    }

    const [open, setOpen] = useState(false); 

    const iconClasses = "h-6 w-6"; 
    const items = ["Home", "CV", "Goals"];

    return (
        <nav className="bg-lightblue border-gray-200 px-2 sm:px-4 py-2.5">
            <div onClick={handleClick} className="px-2 md:hidden">
                {( ! open) && (
                    <Bars2Icon className={iconClasses} />
                )}
                {(open) && (
                    <XMarkIcon className={iconClasses} />
                )}

            </div>
            <div className={cx("md:grid grid-flow-col gap-2 justify-evenly mx-auto", {"hidden": ! open })}>
                <Link to="/"><h1 className="text-xl hover:text-white">SOFIE OHLSSON</h1></Link>
                {items.map((name) => {
                    return (
                        <NavItem name={name}/>
                    )
                })}
            </div>
            
        </nav>
    )
}
