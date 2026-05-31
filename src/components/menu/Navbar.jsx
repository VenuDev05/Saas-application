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
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import '../menu/Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b">


            <h1 className="text-2xl font-bold">
                Edu<span className="title">Hub</span>
            </h1>


            <div className="hidden sm:block">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#">
                                <Link to='/'>Course</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="#">
                                Cart
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href="#">
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>


            <div className="hidden sm:block">
                <Button variant="ghost">Login</Button>
            </div>


            <div className="sm:hidden ">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[60%] bg-white">
                        <div className="flex flex-col h-full">                            
                            <div className="flex flex-col gap-2 mt-8">
                                <a href="#" className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all">
                                    📚 Courses
                                </a>
                                <a href="#" className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all">
                                    💎 Pricing
                                </a>
                                <a href="#" className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all">
                                    📞 Contact
                                </a>
                                <a href="#" className="px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all">
                                    ℹ️ About
                                </a>
                            </div>
                            <div className="mt-auto pt-6 border-t">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </nav>
    );
}

export default Navbar;