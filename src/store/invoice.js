import { createSlice } from "@reduxjs/toolkit";
import data from '../assets/data/data.json'

const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

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
        state.filteredInvoices = allInvoices;
      } else {
        const filteredData = allInvoices.filter((invoice) => {
          return invoice.status === action.payload.status;
        });
        state.filteredInvoices = filteredData;
      }
    },
    getInvoiceById: (state, action) => {
      const { allInvoices } = state;
      const invoice = allInvoices.find((item) => item.id === action.payload.id);
      state.invoiceById = invoice;
    },
    deleteInvoice: (state, action) => {
      state.allInvoices = state.allInvoices.filter((invoice) => invoice.id !== action.payload.id);
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
      const { senderCity, senderStreet, senderCountry, senderPostCode, clientCity, clientCountry, clientPostCode, clientStreet, clientName, clientMail, description, deliveryDate, paymentTerms, items } = action.payload;
      const newInvoice = {
        id: generateUniqueId(),
        senderAddress: {
          street: senderStreet,
          city: senderCity,
          postCode: senderPostCode,
          country: senderCountry
        },
        clientAddress: {
          street: clientStreet,
          city: clientCity,
          postCode: clientPostCode,
          country: clientCountry
        },
        clientName,
        clientMail,
        description,
        deliveryDate,
        paymentTerms,
        items,
        status: "pending" // or some default status
      };
      state.allInvoices.push(newInvoice);
    }
  }
});

export default invoiceSlice;
