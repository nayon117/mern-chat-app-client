import { IoLogOut } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const {loading, logout} = useLogout();
    return(
        <div className="mt-auto">
            {!loading ? ( <IoLogOut onClick={logout} className="text-2xl cursor-pointer text-white"/>) : (<div className="text-2xl text-white animate-spin">Loading...</div>)}
        </div>
    )}
export default LogoutButton;