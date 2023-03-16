import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar bg-neutral">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Tweet React</Link>
            </div>
        </div>
    )
}

export default Navbar;
