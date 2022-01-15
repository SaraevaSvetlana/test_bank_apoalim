import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Table from "./components/Table";
import ButtonAddClient from "./components/ButtonAddClient";
import ButtonAddOrder from "./components/ButtonAddOrder";
import ButtonCloseOrder from "./components/ButtonCloseOrder";
import {Grid} from "@material-ui/core";
import {StyledGrid} from "./AppStyles";
import {useEffect} from "react";
import {myFetch} from "./components/MyTag";
import {arbitrarySeatingOfClients, changeUserToServeWaitingList} from "./store/Actions";

function App() {
    const {tablesList} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        myFetch()
            .then(response => {
                if (response.ok) {
                    response.body.map(item => {
                        const client =  {
                            Diners: item.Diners,
                            Mobile: item.Mobile,
                            Concat : []
                        }
                        dispatch(changeUserToServeWaitingList(client));
                        });

                }
                else {
                    throw new Error(response.errorCode)
                }
                return response.body;
            })
            .then(client =>{
                dispatch(arbitrarySeatingOfClients());
            })

            .catch(e => console.log(e));

    },[]);


    return (
        <div className="App ">
            <ButtonAddClient/>
            <ButtonAddOrder/>
            <StyledGrid container >
                {tablesList.map((item1, index) =>
                    <Grid item xs={2} sm={4} md={4} key={`id_table#${index}`} >
                        <Table
                            table={item1.Table}
                            concat={item1.Concat}
                            status={item1.Status}
                            index={index}

                        />
                    </Grid>
                    )
                }
            </StyledGrid>
            <ButtonCloseOrder/>


        </div>
    );
}

export default App;
