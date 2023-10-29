import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  let date = new Date("April 13 2099");
  date.setDate(date.getDate() + count);

  return (
    <>
      <Range step={step} setStep={setStep} />
      <Tanggal count={count} setCount={setCount} date={date} step={step} />
      {step > 1 || count > 0 ? (
        <Tombol setStep={setStep} setCount={setCount} />
      ) : (
        <></>
      )}
    </>
  );
}

function Range({ step, setStep }) {
  return (
    <div className="container">
      <input
        min={1}
        type="range"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      ></input>{" "}
      <p>{step}</p>
    </div>
  );
}

function Tanggal({ count, setCount, date, step }) {
  return (
    <div>
      <div className="container">
        <button onClick={() => setCount((c) => c - step)}>kurang</button>
        <input
          name="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>Tambah</button>
      </div>
      <p className="date">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>{" "}
      </p>
    </div>
  );
}

function Tombol({ setStep, setCount }) {
  return (
    <div className="container">
      <button
        onClick={() => {
          setCount((e) => (e = 0));
          setStep((s) => (s = 1));
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
