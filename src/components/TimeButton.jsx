import { useState, useEffect } from "react";

function TimeButton({time, dayState, setDayState}) {
  const [selected, setSelected] = useState(false);

  // so this only runs, on the first render
  // how convenient
  // **smiles intensely, but not to appear creepy**
  useEffect(() => {
    console.log(`${time} first useEffect function runs once.`)
    if (time === dayState) {
      setSelected(true);
    }
  }, []);

  // this runs if dayState was changed
  // and once it does, it automatically determines if
  // it's personal time is also the dayState, which
  // it then adjusts it selected state
  useEffect(() => {
    console.log(`${time} useEffect runs because dayState was changed to ${dayState}`)
    if(selected && time !== dayState) {
      setSelected(false);
    }
  }, [dayState]);

  return (
    <button
      className={`${ selected ? 'text-white' : 'text-neutral-dsat-blue hover:text-neutral-pale-blue' }`}
      onClick={() => {
        if(time !== dayState) {
          console.log(`${time} onclick function runs.`)
          setSelected(currState => !currState);
          setDayState(time);
        }
      }}
    >
      {time}
    </button>
  );
}

export default TimeButton;