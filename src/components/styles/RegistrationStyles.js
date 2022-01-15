import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";



export const StyledPaper = styled(Paper, {
    name: "StyledPaper",
    slot: "Wrapper"
})({
    padding: "30px 20px",
    width: 400,
    margin: "20px auto"
});

export const StyledGrid = styled(Grid, {
    name: "StyledGrid",
    slot: "Wrapper"
})({

    justifyContent:'center',
    alignItems:'center'
});