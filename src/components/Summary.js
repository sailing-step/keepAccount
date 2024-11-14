// src/components/Summary.js
import React from 'react';
import CategoryChart from './CategoryChart';

const Summary = ({ bills }) => {
  const totalIncome = bills.filter(bill => bill.type === '收入').reduce((sum, bill) => sum + bill.amount, 0);
  const totalExpense = bills.filter(bill => bill.type === '支出').reduce((sum, bill) => sum + bill.amount, 0);

  const categories = bills.reduce((acc, bill) => {
    if (bill.type === '支出') {
      acc[bill.category] = (acc[bill.category] || 0) + bill.amount;
    }
    return acc;
  }, {});

  return (
    <div>
      <h2>月度汇总</h2>
      <p>总收入: {totalIncome} 元</p>
      <p>总支出: {totalExpense} 元</p>
      <CategoryChart categories={categories} />
    </div>
  );
};

export default Summary;