import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice";

const store=configureStore({
    reducer:{
     invoices:invoiceSlice.reducer   
    }
});

export default store;