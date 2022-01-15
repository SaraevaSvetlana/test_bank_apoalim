import {styled} from "@mui/system";
import {Grid} from "@material-ui/core";

export const StyledGrid = styled(Grid, {
    name:'StyledGrid',
    slot: 'Wrapper'
})({
    height:"80%"
})