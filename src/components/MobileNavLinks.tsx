import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo:
          import.meta.env.VITE_AUTH0_CALLBACK_URL || window.location.origin,
      },
    });
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      <Link
        to="/order-status"
        className="flex bg-white items-center justify-center font-bold hover:text-orange-500 w-full"
      >
        Order Status
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center justify-center font-bold hover:text-orange-500 w-full"
      >
        User Profile
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center justify-center font-bold hover:text-orange-500 w-full"
      >
        Manage Restaurant
      </Link>
      <Button
        className="flex items-center px-3 font-bold hover:bg-gray-500 w-full"
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
