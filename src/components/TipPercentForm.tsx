type TipPercentFormType = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

const TipPercentForm = ({ setTip }: TipPercentFormType) => {
  const tipOptions = [
    {
      id: "tip-10",
      value: 0.1,
      label: "10%",
    },
    {
      id: "tip-20",
      value: 0.2,
      label: "20%",
    },
    {
      id: "tip-50",
      value: 0.5,
      label: "50%",
    },
  ];

  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(tip => (
          <div key={`radio-${tip.id}`}>
            <input
              id={tip.id}
              type="radio"
              name="tipPercentage"
              value={tip.value}
              onChange={e => setTip(Number(e.target.value))}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentForm;
