import React from 'react';
import {useDispatch} from "react-redux";
import {changeUserToServeWaitingList} from "../store/Actions";
import {FormClient} from "./forms/FormClient";


const AddClient = (props) => {
    const dispatch = useDispatch();


    const handleAddClient = (diners, mobile) => {
        const client =  {
            Diners: diners,
            Mobile: mobile,
            Concat : []
        }
        dispatch(changeUserToServeWaitingList(client));
        props.handleClose();
    }
    return (
        <div>
            <FormClient
                handleAddClient={handleAddClient}
            />
        </div>
    );
};

export  {AddClient};