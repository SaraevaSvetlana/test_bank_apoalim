import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import {OrderSubmit} from "./OrderSubmit";
import {style} from "./styles/ButtonsModalStyles";


const ButtonAddOrder = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='button1'>

            <Button onClick={handleOpen}>Add order</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <OrderSubmit
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>

        </div>
    );
};


export default ButtonAddOrder;