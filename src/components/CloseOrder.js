import React from 'react';
import {useDispatch} from "react-redux";
import {closeOrder} from "../store/Actions";
import FormCloseOrder from "./forms/FormCloseOrder";

const CloseOrder = (props) => {
    const dispatch = useDispatch();


    const handleOrderSubmit = (table) => {
        dispatch(closeOrder(table));
        props.handleClose();
    }
    return (
        <div>
            <FormCloseOrder
                handleOrderClose={handleOrderSubmit}
            />
        </div>
    );
};

export default CloseOrder;