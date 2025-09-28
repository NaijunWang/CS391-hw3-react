import "../index.css";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { WebInput } from "../components/webInput";
import { useState } from "react";
export function Home() {
  const [phoneList, setPhoneList] = useState([]);

  function addPhone(newPhone) {
    setPhoneList([...phoneList, newPhone]);
  }

  const listItems = [];

  for (let i = 0; i < phoneList.length; i++) {
    listItems.push(<li key={i}>{phoneList[i]}</li>);
  }

  return (
    <div>
      <NavBar />
      <div className="content">
        <h1> Welcome to Spark! BookPals</h1>
        <p>Spark! BookPals is a revolutionary platform for Boston University's 
          community. BU students and affliates can connect with each other to 
          share book recommendations, start in-depth discussions, and more! Our 
          unique features allows usersto filter books based on genres and complexity,
          among other things. Stay up-to-date through SMS, Signal, and whatsapp notifications
          whenever a book you may be interested in is discussed!
        </p>
        <h2>Sign up</h2>
        <p>Sign up for notifications</p>
        <WebInput addPhone={addPhone} />
        <p className="validation">Please enter a valid 10-digit phone number.</p>
        <h2>Numbers that have signed up</h2>
          <ul>
            {listItems}
          </ul>
      </div>
      <div className="cta">
        <h2>Want to try it out?</h2>
      </div>
      <Footer />
    </div>
  );
}