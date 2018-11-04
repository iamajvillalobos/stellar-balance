import React from "react";
import AddressTextField from "./AddressTextField";
import CheckBalanceButton from "./CheckBalanceButton";
import ResultsTable from "./ResultsTable";
import Footer from "./Footer";

function AddressChecker() {
  return (
    <div>
      <h1>Enter your public xlm address</h1>
      <p>
        Your public address is a safe address you can share with others. Example
        is GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB.
      </p>
      <AddressTextField />
      <CheckBalanceButton />
      <ResultsTable />
      <Footer />
    </div>
  );
}

export default AddressChecker;
