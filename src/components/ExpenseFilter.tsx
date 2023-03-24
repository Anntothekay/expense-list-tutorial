import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select"
    >
      <option value="">All categories</option>
      <option value="Utilities">Utilities</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};
