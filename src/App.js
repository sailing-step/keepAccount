// src/App.js
import React, { useState } from 'react';
import AddBillForm from './components/AddBillForm';
import BillList from './components/BillList';
import Summary from './components/Summary';
import initialBills from './data';
import EditBillForm from './components/EditBillForm';
const App = () => {
  const [bills, setBills] = useState(initialBills);
  const [isEditing, setIsEditing] = useState(false);
  const [editBill, setEditBill] = useState(null);

  const handleAdd = (newBill) => {
    setBills([...bills, newBill]);
  };

  const handleEdit = (bill) => {
    setIsEditing(true);
    setEditBill(bill);
  };

  const handleUpdate = (updatedBill) => {
    setBills(bills.map((bill) => (bill.id === updatedBill.id ? updatedBill : bill)));
    setIsEditing(false);
    setEditBill(null);
  };

  const handleDelete = (id) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditBill(null);
  };

  return (
    <div>
      <h1>账单管理</h1>
      {isEditing ? (
        <EditBillForm bill={editBill} onUpdate={handleUpdate} onCancel={handleCancelEdit} />
      ) : (
        <AddBillForm onAdd={handleAdd} />
      )}
      <hr />
      <BillList bills={bills} onEdit={handleEdit} onDelete={handleDelete} />
      <hr />
      <Summary bills={bills} />
    </div>
  );
};

export default App;