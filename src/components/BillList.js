// src/components/BillList.js
import React from 'react';
import EditBillForm from './EditBillForm';

const BillList = ({ bills, onEdit, onDelete }) => {
  const handleEdit = (bill) => {
    onEdit(bill);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <ul>
      {bills.map((bill) => (
        <li key={bill.id}>
          <strong>{bill.name}</strong>: {bill.amount} 元 - {bill.category} - {bill.type}
          <button onClick={() => handleEdit(bill)}>编辑</button>
          <button onClick={() => handleDelete(bill.id)}>删除</button>
        </li>
      ))}
    </ul>
  );
};

export default BillList;