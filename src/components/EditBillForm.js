// src/components/EditBillForm.js
import React, { useState } from 'react';

const EditBillForm = ({ bill, onUpdate, onCancel }) => {
  const [name, setName] = useState(bill.name);
  const [amount, setAmount] = useState(bill.amount.toString());
  const [category, setCategory] = useState(bill.category);
  const [type, setType] = useState(bill.type);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBill = {
      ...bill,
      name,
      amount: parseFloat(amount),
      category,
      type
    };
    onUpdate(updatedBill);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>账单名称:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>金额:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div>
        <label>类别:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="食物">食物</option>
          <option value="娱乐">娱乐</option>
          <option value="交通">交通</option>
          <option value="其他">其他</option>
        </select>
      </div>
      <div>
        <label>类型:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="支出">支出</option>
          <option value="收入">收入</option>
        </select>
      </div>
      <button type="submit">保存</button>
      <button type="button" onClick={onCancel}>取消</button>
    </form>
  );
};

export default EditBillForm;