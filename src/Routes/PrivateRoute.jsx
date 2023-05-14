import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;