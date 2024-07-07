import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        {" "}
        User Profile
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        {" "}
        Manage Restaurant
      </Link>
      <Button
        className="flex items-center px-3 font-bold hover:bg-gray-500 w-full"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
