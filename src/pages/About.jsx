import "../index.css";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
export function About() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1>About Spark! BookPals</h1>
        <p>Spark! BookPals was conceived with a simple idea in mind - to make it easy for Boston University community members to find new books to read. We recognizedthe potential of connectingthose who have reada lot with those are just dipping their feet into reading.</p>
        <h1>About the Author</h1>
        <div className="author-info">
          <img className="author-img" src = "/author-image.jpg" />
          <ul>
            <li><strong>Bio:</strong> Naijun Wang is a junior majoring in Computer Science at Boston University. He has a passion for exploring new technologies and building innovative projects!</li>
            <li><strong>Interests:</strong> I enjoy playing vedio games with my friends, jogging, and cooking!</li>
            <li><strong>Goals:</strong> I hope to share the projects I build with a wider community, so more people can freely use and learn from them.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
