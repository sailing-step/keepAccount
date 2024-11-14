// src/components/AddBillForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddBillForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('食物');
  const [type, setType] = useState('支出');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBill = {
      id: uuidv4(),
      name,
      amount: parseFloat(amount),
      category,
      type,
      date: new Date().toISOString().split('T')[0]
    };
    onAdd(newBill);
    setName('');
    setAmount('');
    setCategory('食物');
    setType('支出');
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
      <button type="submit">添加账单</button>
    </form>
  );
};

export default AddBillForm;