import { createSlice } from "@reduxjs/toolkit";
import data from '../assets/data/data.json'

const invoiceSlice=createSlice({
    name:"invoices",
    initialState:{
        allInvoices:data
    },
    reducers:{
        
    }
});

export default invoiceSlice;