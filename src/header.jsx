// import "./App.css";
// function Header() {
//   return <h1>this is header from another file</h1>;
// }

// export default Header;
import "./App.css";
function Header(props, children) {
  let { hraderinfo } = props;
  return (
    <div>
      {props.children}
      <h1>
        name is {hraderinfo.name} <br />
        and phone number is {hraderinfo.phone}
      </h1>
    </div>
  );
}

export default Header;
