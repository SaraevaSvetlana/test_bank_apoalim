import React from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {Avatar, Button, Grid, TextField} from "@material-ui/core";
import {StyledGrid, StyledPaper} from "../styles/RegistrationStyles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {Autocomplete} from "@mui/material";

const FormCloseOrder = ({handleOrderClose}) => {

    const {
        register,
        formState: {},
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const {tablesList} = useSelector(state => state);

    const onSubmit = (data) => {
        handleOrderClose(data.tableClose);
        reset();
    }
    return (
        <>
            <Grid key='grid_c'>
                <StyledPaper elevation={24}>
                    <StyledGrid>
                        <Avatar>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <h1>Close order</h1>
                    </StyledGrid>
                    <form onSubmit={handleSubmit(onSubmit)} key={'formClose'}>
                        <Autocomplete
                           {...register('tableClose')}
                            freeSolo
                            id="free-solo-2"
                            disableClearable
                            options={tablesList.filter(item => item.Status).map(item => item.Table.toString())}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    {...register('tableClose')}
                                    label="Search input"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />


                        <Button type='submit'
                                variant='contained'
                                color='primary'
                        >Close order</Button>
                    </form>
                </StyledPaper>
            </Grid>
        </>
    );
};


export default FormCloseOrder;