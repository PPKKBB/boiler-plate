
import React from "react";

import { useDispatch } from "react-redux";

import { authUser } from "../_actions/user_action";

import { useNavigate } from "react-router-dom";

export default function Auth({ SpecificComponent, option, adminRoute = null }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    
    dispatch(authUser()).then(response => {
        if (!response.payload.isAuth) {
            if (option) {

                navigate("/login");
                
            }
        } else {
                if (adminRoute && !response.payload.isAdmin) {

                    navigate("/");
                }else {
                    if (option === false) {

                        navigate("/");
                        
                    }
                }                    
            }
    })
    return <SpecificComponent />;
}