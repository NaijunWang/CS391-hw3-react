import "../index.css";
import { NavBar } from "../components/navbar";
export function Home() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1> Welcome to Spark! BookPals</h1>
        <p>You will update stuff in here.</p>
      </div>
    </div>
  );
}
