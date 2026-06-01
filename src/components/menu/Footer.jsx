import './Navbar.css'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">                    <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                        Edu<span className="text-black">Hub</span>
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Empowering learners with quality courses and
                        industry-ready skills.
                    </p>
                </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            <li><a href="/">Courses</a></li>
                            <li><a href="/plan">Plan</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Popular Courses
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            <li>Web Development</li>
                            <li>Python Full Stack</li>
                            <li>MERN Stack</li>
                            <li>Kotlin Application</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            <li>venu.dev63@gmail.com</li>
                            <li>+91 63815 67863</li>
                            <li>Dharmapuri, India</li>
                        </ul>
                    </div>

                </div>


                <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © {year} EduHub. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;