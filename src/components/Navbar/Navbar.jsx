import "../../index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="../../../assets/letterboxd-logo.svg"
        alt=""
      />
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 text-sm text-white font-bold tracking-widest cursor-pointer">
          <li>SIGN IN</li>
          <li>CREATE ACCOUNT</li>
          <li>FILMS</li>
          <li>LISTS</li>
          <li>MEMBERS</li>
          <li>JOURNAL</li>
        </ul>
        <div>search bar</div>
      </div>
    </div>
  );
};

export default Navbar;
