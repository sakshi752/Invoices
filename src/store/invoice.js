import { createSlice } from "@reduxjs/toolkit";
import data from '../assets/data/data.json';

const generateUniqueId = () => {
  return  Math.random().toString(36).substr(2, 9);
};

const forwardDate = (numDaysForward) => {
  const today = new Date();
  const forwardDate = new Date(today);
  forwardDate.setDate(today.getDate() + numDaysForward);
  return forwardDate.toLocaleDateString();
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState: {
    allInvoices: [],
    filteredInvoices: [],
    invoiceById: null,
    filterVal: '', // Assuming you have filterVal in your state
  },
  reducers: {
    filterInvoice: (state, action) => {
      const { allInvoices } = state;
      if (action.payload.status === "") {
        state.filteredInvoices = allInvoices;
      } else {
        state.filteredInvoices = allInvoices.filter((invoice) => invoice.status === action.payload.status);
      }
      state.filterVal = action.payload.status; // Update filterVal in state
    },
    getInvoiceById: (state, action) => {
      const { allInvoices } = state;
      state.invoiceById = allInvoices.find((item) => item.id === action.payload.id);
    },
    deleteInvoice: (state, action) => {
      state.allInvoices = state.allInvoices.filter((invoice) => invoice.id !== action.payload.id);
      state.filteredInvoices = state.filteredInvoices.filter((invoice) => invoice.id !== action.payload.id);
    },
    updateStatusPaid: (state, action) => {
      const { id } = action.payload;
      const invoice = state.allInvoices.find((obj) => obj.id === id);
      if (invoice) {
        invoice.status = "paid";
      }
      state.invoiceById = invoice;
    },
    addInvoice: (state, action) => {
      const { senderCity, senderStreet, senderCountry, senderPostCode, clientCity, clientCountry, clientPostCode, clientStreet, clientName, clientMail, description, paymentTerms, items } = action.payload;

      const today = new Date().toISOString().split('T')[0];
      const newInvoice = {
        id: generateUniqueId(),
        createdAt: today,
        paymentDue: forwardDate(paymentTerms),
        description,
        paymentTerms,
        clientName,
        clientMail,
        status: "pending",
        senderAddress: {
          street: senderStreet,
          city: senderCity,
          postCode: senderPostCode,
          country: senderCountry,
        },
        clientAddress: {
          street: clientStreet,
          city: clientCity,
          postCode: clientPostCode,
          country: clientCountry,
        },
        items,
        total: items.reduce((acc, item) => acc + Number(item.total), 0),
      };

      state.allInvoices.push(newInvoice);
      if (state.filterVal === '' || newInvoice.status === state.filterVal) {
        state.filteredInvoices.push(newInvoice);
      }
    },
    editInvoice:(state,action)=>{
      
    }
  },
});


export default invoiceSlice;
