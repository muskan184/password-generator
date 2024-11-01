import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./header";

function Props() {
  let header = {
    name: "muskan",
    city: "suart",
    phone: "9913866176",
    age: 18,
  };
  return (
    <Header hraderinfo={header}>
      <h2>welcome and practice together</h2>
    </Header>
  );
}

export default Props;
