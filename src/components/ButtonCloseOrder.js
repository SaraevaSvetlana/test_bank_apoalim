import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseOrder from "./CloseOrder";
import {style} from "./styles/ButtonsModalStyles";

const ButtonCloseOrder = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='button1'>

            <Button onClick={handleOpen}>Close order</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseOrder
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>

        </div>
    );
};



export default ButtonCloseOrder;