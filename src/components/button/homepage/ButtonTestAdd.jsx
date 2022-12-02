import { useEffect, useState } from "react"

export default function ButtonTest(props) {

    const [Button, AddButton] = useState(0);


  return (
    <div>
      <button onClick={() => AddButton(Button + 1)}>
        {props.name}
      </button>
    </div>
  );
} 