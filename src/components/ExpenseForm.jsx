import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || amount === "") {
      setError("Please fill title and amount");
      return;
    }
    if (Number(amount) <= 0) {
      setError("Amount must be more than 0");
      return;
    }

    onAdd({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date,
    });

    // reset the form
    setTitle("");
    setAmount("");
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What did you spend on?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Expense</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default ExpenseForm;
