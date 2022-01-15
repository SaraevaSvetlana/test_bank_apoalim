import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    changeServeWaitingListDiners, changeStatusTable,
    concatTables,
    removeClientFromServeWaitingList,
    rezervedTables
} from "../store/Actions";
import {FormOrder} from "./forms/FormOrder";


const OrderSubmit = (props) => {
    const dispatch = useDispatch();
    const {serveWaitingList} = useSelector(state => state);
    const {tablesList} = useSelector(state => state);

    const handleOrderSubmit = (table, mobile) => {

        const client = serveWaitingList.find(item => item.Mobile === mobile);
        const t = tablesList.find(item => item.Table === +table);
        let d = client.Diners>t.Diners? t.Diners: client.Diners;
        let concat = client.Concat;
        concat.push(table);

        const order = {
            Table: table,
            Diners: d ,
            Time: new Date().toLocaleTimeString(),
            Mobile: mobile,
            Concat: concat
        }
        dispatch(rezervedTables(order));

        dispatch(changeStatusTable(table))
        if (client.Diners > t.Diners){
            d =client.Diners-t.Diners;
            const newClient = {
                Diners: d ,
                Mobile: mobile,
                Concat: concat
            }
        dispatch (changeServeWaitingListDiners(newClient));
        }else {
            dispatch(concatTables(concat));
            dispatch(removeClientFromServeWaitingList(client));
        }

        props.handleClose();

    }
    return (
            <FormOrder
                handleOrderClick={handleOrderSubmit}
            />
    );
};

export  {OrderSubmit};
