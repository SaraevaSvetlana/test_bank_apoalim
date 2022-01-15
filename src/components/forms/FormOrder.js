import React from 'react';
import {
    Grid,
    Avatar,
    TextField,
    Button,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {useForm} from 'react-hook-form';
import {StyledGrid, StyledPaper} from "../styles/RegistrationStyles";
import {Autocomplete} from "@mui/material";
import {useSelector} from "react-redux";


const FormOrder = ({handleOrderClick}) => {

    const {
        register,
        formState: {},
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const {tablesList} = useSelector(state => state);
    const {serveWaitingList} = useSelector(state => state);


    const onSubmit = (data) => {
        const client = data.client.split(' ');

        handleOrderClick(data.table, client[0])
        reset();
    }

    return (
        <>
            <Grid>
                <StyledPaper elevation={24}>
                    <StyledGrid>
                        <Avatar>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <h1>Add order</h1>
                    </StyledGrid>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Autocomplete
                            {...register('client')}
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={serveWaitingList.map(item => item.Mobile.toString()+ ' diners'+ item.Diners)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    {...register('client')}
                                    label="Search input"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                        <Autocomplete

                            {...register('table')}
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={tablesList.filter(item => !item.Status).map(item => item.Table.toString())}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    {...register('table')}
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
                        >Take order</Button>
                    </form>
                </StyledPaper>
            </Grid>
        </>
    );
};

export {FormOrder};








