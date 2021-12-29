import react from "react";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <>
      <Link to="/Child">page Child</Link>
      <Link to="/Parent">page Parent</Link>
      <Link to="/KindergartenTeacher ">page KindergartenTeacher </Link>
    </>
  );
};
export default NavBarComponent;
