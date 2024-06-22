import { createSlice } from "@reduxjs/toolkit";
import data from '../assets/data/data.json'

const invoiceSlice=createSlice({
    name:"invoices",
    initialState:{
        allInvoices:data,
        filteredInvoices:[],
        invoiceById:null
    },
    reducers:{
      filterInvoice:(state,action)=>{
        const {allInvoices}=state;
        if (action.payload.status==="") {
            state.filteredInvoices=allInvoices
        }
        else{
            const filteredData=allInvoices.filter((invoice)=>{
                return invoice.status===action.payload.status;
            });
            console.log(filteredData);
            state.filteredInvoices=filteredData   
        }
      },
      getInvoiceById:(state,action)=>{
        const {allInvoices}=state;
        const invoice=allInvoices.find((item)=>item.id===action.payload.id)
        state.invoiceById=invoice
      }
    }
});

export default invoiceSlice;