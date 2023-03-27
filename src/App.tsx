import { useState } from "react";
import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseFilter } from "./components/ExpenseFilter";
import { ExpenseForm } from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Icecream", amount: 1.59, category: "Groceries" },
    {
      id: 2,
      description: "Cinema Tickets",
      amount: 15.9,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "Electricity Bill",
      amount: 48,
      category: "Utilities",
    },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="container mt-3">
      <ExpenseForm
        onSave={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      ></ExpenseList>
    </div>
  );
}

export default App;
