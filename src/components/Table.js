import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {style} from "./styles/TableModalStyles";
import {closeOrder} from "../store/Actions";


const Table = (props) => {
        const {orderList} = useSelector(state => state);
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        const [color, setColor] = useState(false);
        const dispatch = useDispatch();


        function searchTable(table) {
            const b = orderList.find(item => +item.Table === table);
            const c = {
                "Diners": b? b.Diners:'',
                "Time": b?b.Time:'',
                "Mobile": b?b.Mobile:'',
            }
            return  c;
        };

        useEffect(() => {
            if (props.status){
                setTimeout(() => setColor(true), 60000);
                setTimeout(()=> dispatch(closeOrder(props.table)), 90000);
            }

        }, [props.status])

        const marker = props.status ? (color? 'colorOrange':'colorRed'): 'colorWhite';
        const formTable = Math.round(props.table/100) === 1? 'circle':(
            Math.round(props.table/100) === 2?'oval':(
                Math.round(props.table/100) === 3?'triangle':(
                    Math.round(props.table/100) === 4?'square':'rectangle')))


        return (

                <div  className={`class1 ${formTable} ${marker} xs={12} md={4} `} >

                    <Button onClick={handleOpen}> {props.table}</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            Table {props.table}
                            <br/>
                            {props.status ? 'phone-' +
                                (searchTable(props.table)).Mobile  +
                                '  diners-' + (searchTable(props.table)).Diners  +
                                '  times -' + (searchTable(props.table)).Time
                                : 'order- undefined'
                            }
                        </Box>
                    </Modal>

                </div>

        );

    }
;

export default Table;


