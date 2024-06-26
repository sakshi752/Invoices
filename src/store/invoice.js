import { createSlice } from "@reduxjs/toolkit";
import data from '../assets/data/data.json'

const invoiceSlice = createSlice({
  name: "invoices",
  initialState: {
    allInvoices: data,
    filteredInvoices: [],
    invoiceById: null
  },
  reducers: {
    filterInvoice: (state, action) => {
      const { allInvoices } = state;
      if (action.payload.status === "") {
        state.filteredInvoices = allInvoices
      }
      else {
        const filteredData = allInvoices.filter((invoice) => {
          return invoice.status === action.payload.status;
        });
        console.log(filteredData);
        state.filteredInvoices = filteredData
      }
    },
    getInvoiceById: (state, action) => {
      const { allInvoices } = state;
      const invoice = allInvoices.find((item) => item.id === action.payload.id)
      state.invoiceById = invoice
    },
    deleteInvoice: (state, action) => {
      state.allInvoices = state.allInvoices.filter((invoice) => invoice.id !== action.payload.id);
      // state.filteredInvoices = state.filteredInvoices.filter((invoice) => invoice.id !== action.payload.id);
    },
    updateStatusPaid:(state,action)=>{
      const {id,status}=action.payload
      const invoice=state.allInvoices.find((obj)=>obj.id===id);
      if (invoice) {
        invoice.status="paid"
      }
      state.invoiceById = invoice;
    }
  }
});

export default invoiceSlice;