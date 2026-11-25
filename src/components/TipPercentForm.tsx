type TipPercentFormType = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

const TipPercentForm = ({ tip, setTip }: TipPercentFormType) => {
  const tipOptions = [
    {
      id: "tip-5",
      value: 0.05,
      label: "5%",
    },
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
        {tipOptions.map(tipOption => (
          <div key={`radio-${tipOption.id}`}>
            <input
              id={tipOption.id}
              type="radio"
              name="tipPercentage"
              value={tipOption.value}
              checked={tip === Number(tipOption.value)}
              onChange={e => setTip(Number(e.target.value))}
            />
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentForm;
