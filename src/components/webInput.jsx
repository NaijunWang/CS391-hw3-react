import { useState } from "react";

export function WebInput({addPhone}){
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.length !== 10 || isNaN(input)){
            alert("You didn't enter a valid 10 digit number. Please try again if you wish to be notified.");
            return;
        }
        addPhone(input)
        setInput("")
    }

    return(
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}