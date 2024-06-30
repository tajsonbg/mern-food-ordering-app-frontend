import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div className="flex text-center justify-center">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500"></Menu>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
              </span>
            ) : (
              <span> Welcome to MernEats.com!</span>
            )}
            <Separator className="my-3"></Separator>
            <SheetDescription className="flex">
              {isAuthenticated ? (
                <MobileNavLinks />
              ) : (
                <Button
                  className="flex-1 font-bold bg-orange-500"
                  onClick={async () => await loginWithRedirect()}
                >
                  Log In
                </Button>
              )}
            </SheetDescription>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
