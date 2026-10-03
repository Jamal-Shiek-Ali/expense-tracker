function Summary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  // total per category
  const byCategory = {};
  expenses.forEach((e) => {
    byCategory[e.category] = (byCategory[e.category] || 0) + e.amount;
  });

  return (
    <div className="summary">
      <h2>Total spent: ₹{total}</h2>
      <div className="chips">
        {Object.keys(byCategory).map((cat) => (
          <span key={cat} className="chip">
            {cat}: ₹{byCategory[cat]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Summary;
