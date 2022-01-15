import {
    ADD_CLIENT_TO_SERVE_WAITING_LIST, ARBITRARY_SEATING_OF_CLIENTS,
    CHANGE_SERVE_WAITING_LIST_DINERS,
    CHANGE_STATUS_TABLE,
    CLOSE_ORDER,
    CONCAT_TABLE,
    REMOVE_CLIENT_FROM_SERVE_WAITING_LIST,
    REZERVED_TABLE,
} from "./Actions";


export const initialState = {
    serveWaitingList: [],
    tablesList: [
        {"Table": 101, "Diners": 1, "Concat": [], "Status": false},
        {"Table": 102, "Diners": 1, "Concat": [], "Status": false},
        {"Table": 103, "Diners": 1, "Concat": [], "Status": false},
        {"Table": 201, "Diners": 2, "Concat": [], "Status": false},
        {"Table": 202, "Diners": 2, "Concat": [], "Status": false},
        {"Table": 203, "Diners": 2, "Concat": [], "Status": false},
        {"Table": 301, "Diners": 3, "Concat": [], "Status": false},
        {"Table": 302, "Diners": 3, "Concat": [], "Status": false},
        {"Table": 401, "Diners": 4, "Concat": [], "Status": false},
        {"Table": 402, "Diners": 4, "Concat": [], "Status": false},
        {"Table": 501, "Diners": 5, "Concat": [], "Status": false},
        {"Table": 601, "Diners": 6, "Concat": [], "Status": false}],
    orderList: [],
    writeServedOrders: []
};


function tablesPanui(orderList, tables) {
    orderList.forEach(item => {
        tables.filter(t => t !== +item.Table)
    })
    return tables;
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT_TO_SERVE_WAITING_LIST:
            const list = [...state.serveWaitingList];
            list.push(action.payload)
            return {...state, serveWaitingList: list};

        case CHANGE_SERVE_WAITING_LIST_DINERS:
            const newList = [...state.serveWaitingList];
            let index2 = newList.findIndex(item => item.Mobile === action.payload.Mobile);
            newList[index2] = action.payload;
            return {...state, serveWaitingList: newList};

        case REMOVE_CLIENT_FROM_SERVE_WAITING_LIST:
            const list1 = [...state.serveWaitingList];
            let index3 = list1.findIndex(item => item.Mobile === action.payload.Mobile);
            list1.splice(index3, 1)
            return {...state, serveWaitingList: list1};

        case CHANGE_STATUS_TABLE:
            const newListTab = [...state.tablesList];
            let indexTab = newListTab.findIndex(item => item.Table === +action.payload);
            newListTab[indexTab].Status = !newListTab[indexTab].Status;
            return {...state, tablesList: newListTab};


        case REZERVED_TABLE:
            const newOrderList = [...state.orderList];
            newOrderList.push(action.payload);
            return {...state, orderList: newOrderList};

        case CLOSE_ORDER:
            const newOrderList1 = [...state.orderList];
            const newWriteServedOrders = [...state.writeServedOrders];
            let orderInd = newOrderList1.findIndex(item => !(item.Table - action.payload));
            let order = newOrderList1[orderInd];
            newOrderList1.splice(orderInd, 1);
            order.end_time = new Date().toLocaleTimeString();
            newWriteServedOrders.push(order);

            const newListTabClose = [...state.tablesList];
            const tableCloseIndex = newListTabClose.findIndex(item => !(item.Table - action.payload));
            const concatClose = newListTabClose[tableCloseIndex].Concat;
            newListTabClose[tableCloseIndex].Concat = [];
            newListTabClose[tableCloseIndex].Status = !newListTabClose[tableCloseIndex].Status;
            if (concatClose.length !== 0) {
                for (let i = 0; i < concatClose.length; i++) {
                    let a = concatClose[i];
                    let indexConcatClose = newListTabClose.findIndex(item => item.Table === +a);
                    newListTabClose[indexConcatClose].Concat.filter(item => item !== action.payload);
                }
            }

            console.log(newWriteServedOrders);
            return {
                ...state,
                tablesList: newListTabClose,
                orderList: newOrderList1,
                writeServedOrders: newWriteServedOrders
            };

        case CONCAT_TABLE :
            const newListT = [...state.tablesList];
            const conc = action.payload;
            for (let i = 0; i < conc.length; i++) {
                let a = conc[i];
                let indexT = newListT.findIndex(item => item.Table === +a);
                let rem = conc.slice();
                rem.splice(i, 1);
                newListT[indexT].Concat = rem;
            }
            return {...state, tablesList: newListT};

        case ARBITRARY_SEATING_OF_CLIENTS:
            let tables = [101, 102, 103, 201, 202, 203, 301, 302, 401, 402, 501, 601];
            const newOrderListArbitrary = [...state.orderList];
            const newListTabArbitrary = [...state.tablesList];
            const newServeWaitingList = [...state.serveWaitingList];
            tables = tablesPanui(newOrderListArbitrary, tables);
            state.serveWaitingList.map(item => {
                let din = item.Diners;
                tables = tablesPanui(newOrderListArbitrary, tables);
                let ind;
                for (let i = 0; i < tables.length; i++) {
                    let indA = newListTabArbitrary.findIndex(r => r.Table === tables[i])
                    if (newListTabArbitrary[indA].Diners === din) {
                        ind = i;
                        const client = {
                            Table: String(tables[i]),
                            Diners: din,
                            Time: new Date().toLocaleTimeString(),
                            Mobile: item.Mobile,
                            Concat: [tables[i]]
                        }
                        i = tables.length;
                        newOrderListArbitrary.push(client);
                        newListTabArbitrary[indA].Status = !newListTabArbitrary[indA].Status;
                        let index4 = newServeWaitingList.findIndex(i => i.Mobile === item.Mobile);
                        newServeWaitingList.splice(index4, 1)
                    }
                }
                tables.splice(ind, 1)
            })
            return {
                ...state, orderList: newOrderListArbitrary,
                tablesList: newListTabArbitrary, serveWaitingList: newServeWaitingList
            }


        default:
            return state;
    }
}
