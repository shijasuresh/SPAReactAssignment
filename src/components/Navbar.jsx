import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
            <div className="p-3 border-b border-neutral-100">
                <div className="w-[900px] mx-auto flex items-center justify-between">
                    <Link to='/' className="text-2xl font-black">Instagram</Link>
                    <div className="flex gap-3">
                        <Link to='/requests'>Requests</Link>
                        <Link to='/about'>About us</Link>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;