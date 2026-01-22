import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Todo App</h1>
                    <div className="flex gap-4">
                        <Link
                            to="/"
                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActive("/")
                                    ? "bg-white text-purple-600 shadow-md"
                                    : "hover:bg-white/20"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${isActive("/about")
                                    ? "bg-white text-purple-600 shadow-md"
                                    : "hover:bg-white/20"
                                }`}
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
