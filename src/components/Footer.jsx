import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; Tsukimaru <FontAwesomeIcon icon={fas.faOtter} /> 2024
      </p>
      <p>
        Inspired by <a href="https://todomvc.com/">TodoMVC</a>
      </p>
      <p>
        Powered by <a href="https://vitejs.dev/">Vite</a> +{" "}
        <a href="https://react.dev/">React</a>
      </p>
    </div>
  );
}

export default Footer;
