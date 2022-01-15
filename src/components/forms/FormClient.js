import React from 'react';
import {
    Grid,
    Avatar,
    TextField,
    Button,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import {StyledGrid, StyledPaper} from "../styles/RegistrationStyles";
import {ErrorBlock} from "../styles/ErrorStyles";
import {validationSchema} from "../../utils/constants";



const FormClient = ({handleAddClient}) => {

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        handleAddClient(data.diners, data.mobile);
        reset();
    }
    return (
        <div>
            <Grid>
                <StyledPaper elevation={24}>
                    <StyledGrid>
                        <Avatar>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <h1>Client</h1>
                    </StyledGrid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            {...register('diners')}
                            fullWidth label='Diners'
                            placeholder="Enter diners"
                            color="secondary"
                        />
                        <ErrorBlock>{errors?.diners && <p>{errors?.diners?.message || "Error!"}</p>}</ErrorBlock>
                        <TextField
                            {...register('mobile')}
                            fullWidth label='Phone'
                            placeholder="Enter your phone"
                            color="secondary"
                        />
                        <ErrorBlock>{errors?.mobile && <p >{errors?.mobile?.message || "Error!"}</p>}</ErrorBlock>

                        <Button type='submit'
                                variant='contained'
                                color='primary'
                        >Add client</Button>
                    </form>
                </StyledPaper>
            </Grid>
        </div>
    )

};

export {FormClient};







