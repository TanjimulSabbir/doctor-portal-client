import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import NotAdmin from './NotAdmin';
import IsAdmin from './IsAdmin';

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { admin } = IsAdmin(user)
    console.log(admin, 'out useEffect')

    if (admin) {
        if (admin === "Admin") {
            return children;
        }
        else {
            return <NotAdmin />
        }
    }

};

export default AdminRoute;