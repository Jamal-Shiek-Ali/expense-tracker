function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="empty">No expenses yet. Add one above.</p>;
  }

  return (
    <ul className="list">
      {expenses.map((item) => (
        <li key={item.id} className="item">
          <div>
            <strong>{item.title}</strong>
            <p className="meta">
              {item.category} - {item.date}
            </p>
          </div>
          <div className="right">
            <span className="amount">₹{item.amount}</span>
            <button className="delete" onClick={() => onDelete(item.id)}>
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
