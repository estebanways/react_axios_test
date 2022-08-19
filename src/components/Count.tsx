import { useState } from "react"


export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="countId">{count}</p>
      <button data-testid="plus" onClick={() => setCount((count) => count + 1)}>+</button>
      <button data-testid="less" onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  )
}