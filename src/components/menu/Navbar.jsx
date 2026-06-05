import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import "../menu/Navbar.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

function Navbar() {
  const [username, setUsername] = useState(
    sessionStorage.getItem("username")
  );

  const [role, setRole] = useState(
    sessionStorage.getItem("role")
  );

  useEffect(() => {
    const updateUser = () => {
      setUsername(sessionStorage.getItem("username"));
      setRole(sessionStorage.getItem("role"));
    };

    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-2xl font-bold">
        Edu<span className="title">Hub</span>
      </h1>

      
      <div className="hidden sm:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Courses</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/plan">Plan</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

    
      <div className="hidden sm:block">
        <a href="/login">
        <Button variant="ghost"
        > {username ? (
        <div>
          <span>
            {role === "admin" ? "👑 " : ""} {username}
          </span>
        </div>
      ) : (
        <Link to="/">Login</Link>
      )}</Button></a>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[60%] bg-white">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-2 mt-8">

                <SheetClose asChild>
                  <Link
                    to="/"
                    className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    📚 Courses
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    to="/plan"
                    className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    💎 Plan
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    📞 Contact
                  </Link>
                </SheetClose>

              </div>

              <div className="mt-auto pt-6 border-t">
                <a href="/login">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Login
                </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar