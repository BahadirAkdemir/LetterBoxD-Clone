import "../../index.css";
import { Link } from "react-router-dom";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";
import React, { useRef } from "react";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

const Navbar = ({ isMainpage }) => {
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Message Content",
      life: 3000,
    });
  };
  return (
    <div className="navbar text-xs">
      <Toast ref={toast} />
      <Link to={"/"}>
        <img
          className="navbar-logo"
          src="../../../assets/letterboxd-logo.svg"
          alt=""
        />
      </Link>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 text-xs text-white font-bold tracking-widest cursor-pointer">
          {isMainpage && (
            <li>
              <Link to="/sign-in">SIGN IN</Link>
            </li>
          )}
          {isMainpage && (
            <li>
              <Link to="/create-account">CREATE ACCOUNT</Link>
            </li>
          )}
          {!isMainpage && (
            <li>
              <Link to="/user-info">USER INFO LIST ⚡️</Link>
            </li>
          )}
          <li>
            <Link to="/films">FILMS</Link>
          </li>
          <li>
            <Link to="/lists">LISTS</Link>
          </li>
          <li>
            <Link to="/members">MEMBERS</Link>
          </li>
          <li>
            <Link to="/journal">JOURNAL</Link>
          </li>
        </ul>
        <div>search bar</div>
        {!isMainpage && (
          <SplitButton
            label="LOG "
            icon="pi pi-plus"
            onClick={() => {
              showSuccess();
            }}
            model={[
              {
                label: "Start a new list...",
                command: () => {
                  showSuccess();
                },
              },
            ]}
            severity="success"
            className="p-splitbutton-success p-1 bg-dark-green text-white text-xs font-bold tracking-widest "
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
