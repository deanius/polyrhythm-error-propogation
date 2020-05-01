import React, { useState } from "react";
import { useListener } from "polyrhythm";

export function Listener({ max = 1, throwOnNumber }) {
  const [num, setNum] = useState(0);

  useListener("user/incrementTo", ({ payload: num }) => {
    setNum(num);
    if (num === throwOnNumber) {
      throw new Error("Listener error!");
    }
  });

  return (
    <li style={{ display: "flex" }}>
      <button onClick={() => setNum(n => n + 1)}>+</button>
      <div
        style={{
          backgroundColor: "blue",
          minHeight: 10,
          width: `${(num / max) * 100}%`,
          transition: "width 1s"
        }}
      />
    </li>
  );
}
