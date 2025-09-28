import { Link } from "react-router-dom";
import whatsapplogo from "../../public/whatsapp.svg"

export function WhatsappInput({addPhone}){
    const handleInput = (e) => {
        e.preventDefault();
        const input = prompt("Please enter a phone number to be used for notification by WhatsApp:");
        if (input === null) return;   
        if (input.trim() === "" || input.length !== 10 || isNaN(input)){
            alert("You didn't enter a valid 10 digit nmber. Please try again if you wish to be notified.")
            return;
        }
        addPhone(input);
        alert(`Thank you! We will notify you at ${input} when Spark! BookPals is ready for WhatsApp`)
    };
    return (
      <div>
        <Link onClick={handleInput}><img className="btn-logo" src={whatsapplogo} />Join for Whatsapp</Link>
      </div>
    );
}