import "./Notfound.scss";
import { useNavigate } from "react-router-dom";
export default function Notfound() {
  //   return (
  //     <div className="notfound">
  //       <div className="notfound-content">
  //         <h1>page notfound</h1>
  //       </div>
  //     </div>
  //   );
  const Navigate = useNavigate();
  return (
    <div>
      <main>
        <div className="container">
          <div className="col-md-6 align-self-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>
            <button
              type="butotn"
              onClick={() => Navigate("/")}
              className="btnn green"
            >
              HOME
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
