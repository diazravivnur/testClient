import IconDropdownAction from "../../components/pictures/IconDropdownAction.svg";
import { NavDropdown } from "react-bootstrap";

const DropdownAction = () => {
  return (
    <div>
      <NavDropdown
        title={
          <div>
            <img src={IconDropdownAction} alt="dropdownAction"></img>
          </div>
        }
      >
        <li>
          <NavDropdown.Item>
            <div
              style={{
                display: "flex",
                color: "green",
              }}
            >
              <p>Approve</p>
            </div>
          </NavDropdown.Item>
        </li>
        <li>
          <NavDropdown.Item>
            <div
              style={{
                display: "flex",
                color: "red",
              }}
            >
              <p>Decline</p>
            </div>
          </NavDropdown.Item>
        </li>
      </NavDropdown>
    </div>
  );
};

export default DropdownAction;
