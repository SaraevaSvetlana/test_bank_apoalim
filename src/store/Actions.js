export const ADD_CLIENT_TO_SERVE_WAITING_LIST = 'ADD_CLIENT_TO_SERVE_WAITING_LIST';
export const REMOVE_CLIENT_FROM_SERVE_WAITING_LIST = 'REMOVE_CLIENT_FROM_SERVE_WAITING_LIST';
export const REZERVED_TABLE = 'REZERVED_TABLE';
export const CONCAT_TABLE = 'CONCAT_TABLE';
export const CHANGE_SERVE_WAITING_LIST_DINERS = 'CHANGE_SERVE_WAITING_LIST_DINERS';
export const CHANGE_STATUS_TABLE = 'CHANGE_STATUS_TABLE';
export const CLOSE_ORDER = 'CLOSE_ORDER';
export const ARBITRARY_SEATING_OF_CLIENTS = 'ARBITRARY_SEATING_OF_CLIENTS';

export const changeUserToServeWaitingList = (client) => (
    {
        type: ADD_CLIENT_TO_SERVE_WAITING_LIST,
        payload: client
    }
);
export const changeServeWaitingListDiners = (client) => (
    {
        type: CHANGE_SERVE_WAITING_LIST_DINERS,
        payload: client
    }
);

export const removeClientFromServeWaitingList = (client) => (
    {
        type: REMOVE_CLIENT_FROM_SERVE_WAITING_LIST,
        payload: client
    }
);


export const rezervedTables = (order) => (
    {
        type: REZERVED_TABLE,
        payload: order
    }
);
export const concatTables = ( concat) => (
    {
        type: CONCAT_TABLE,
        payload:  concat
    }
);


export const changeStatusTable = (table) => (
    {
        type: CHANGE_STATUS_TABLE,
        payload: table
    }
);
export const closeOrder = (table) => (
    {
        type: CLOSE_ORDER,
        payload: table
    }
);
export const arbitrarySeatingOfClients = () => (
    {
        type: ARBITRARY_SEATING_OF_CLIENTS,
    }
)



