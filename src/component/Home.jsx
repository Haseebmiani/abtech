import React from "react";
import {
  FaWhatsapp,
  FaBriefcase,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaCog,
  FaEnvelope,
} from "react-icons/fa";
import image from "./image/image-1.png";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">ABTech Consulting</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://wa.me/923279161573" // WhatsApp link with country code for Pakistan (+92)
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-teal-400">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-teal-400">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-teal-400">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Text and Image below Header */}
        <div className="container mx-auto mt-44 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left text-lg md:pr-8">
            <h2 className="text-4xl font-bold">Welcome to ABTech Consulting</h2>
            <p className="mt-10">
              Your trusted partner for innovative tech solutions and
              professional services. At ABTech Consulting, we deliver top-notch
              services catering to a wide range of business needs. From SAP and
              Odoo ERP implementations to AI-driven data analysis and custom web
              development, we have the expertise to elevate your business.
            </p>
            <p className="mt-4">
              Explore our services, and let us help you achieve your business
              goals with tailor-made solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </header>
      {/* Services Section */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Services <FaCog className="inline-block text-teal-500 ml-2" />
          </h2>
          <p className="mb-12">
            We offer a comprehensive suite of services designed to meet your
            business needs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaServer className="text-teal-500 mr-2" />
                SAP Support Period Projects
              </h3>
              <p>
                We offer continuous SAP support to ensure smooth business
                operations during crucial project phases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaLaptopCode className="text-teal-500 mr-2" />
                Odoo ERP Implementation
              </h3>
              <p>
                Our team implements Odoo ERP systems, optimizing your business
                processes with streamlined management solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaLaptopCode className="text-teal-500 mr-2" />
                Web Development
              </h3>
              <p>
                From basic websites to complex web applications, we design and
                develop websites that help businesses thrive online.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaMobileAlt className="text-teal-500 mr-2" />
                Mobile Application Development
              </h3>
              <p>
                Get custom-built mobile applications tailored to your business
                requirements, ensuring seamless mobile experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaBriefcase className="text-teal-500 mr-2" />
                Employee Resource Provider
              </h3>
              <p>
                We provide skilled and experienced employees for temporary and
                long-term roles, boosting your workforce capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaBriefcase className="text-teal-500 mr-2" />
                Virtual Assistant Services
              </h3>
              <p>
                Offering academic assistance for assignments, quizzes, research,
                and full semester support for students with flexible,
                budget-friendly packages.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaLaptopCode className="text-teal-500 mr-2" />
                Data Analysis Projects
              </h3>
              <p>
                Data-driven decisions are the future. We specialize in tools
                like Power BI, Tableau, Python, and more to bring powerful
                insights into your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <FaLaptopCode className="text-teal-500 mr-2" />
                AI & Machine Learning Projects
              </h3>
              <p>
                We design AI/ML models tailored to enhance business efficiency
                and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Expertise Section */}
      <section id="expertise" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
          <p className="mb-12">
            At ABTech Consulting, we take pride in our diverse range of
            expertise across multiple domains, ensuring we deliver exceptional
            value to our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={image}
                alt="Graphic Design"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">Graphic Design</h3>
              <p>
                Innovative designs that captivate and communicate your brand’s
                message effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={image}
                alt="Web Development"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">Website Development</h3>
              <p>
                Building functional, responsive, and user-friendly websites that
                engage and convert visitors into customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={image}
                alt="App Development"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">App Development</h3>
              <p>
                Custom mobile and desktop applications tailored to fit your
                business and user needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="/path-to-model-training.jpg"
                alt="Model Training"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">Model Training</h3>
              <p>
                We specialize in training machine learning and AI models to
                solve complex problems and improve operational efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={image}
                alt="Data Analysis"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">Data Analysis</h3>
              <p>
                Transforming raw data into actionable insights through advanced
                analytical techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="/path-to-devops.jpg"
                alt="DevOps"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">DevOps & Cloud</h3>
              <p>
                Streamlining your development and operations process with modern
                DevOps methodologies and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Success Stories</h2>
          <p className="mb-12 text-lg">
            Take a look at some of the projects we’ve completed and how we’ve
            helped businesses succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">
                ERP Implementation for ABC Corp.
              </h3>
              <p className="text-gray-700">
                Streamlined processes and increased efficiency with a custom
                Odoo ERP system.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">
                Custom Website for XYZ Enterprises
              </h3>
              <p className="text-gray-700">
                Designed and developed a fully responsive, SEO-optimized website
                that increased online traffic by 40%.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">
                AI Model for Data-driven Insights
              </h3>
              <p className="text-gray-700">
                Implemented machine learning algorithms for a multinational
                company, delivering actionable insights for better business
                decisions.
              </p>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">
                Mobile App for DEF Solutions
              </h3>
              <p className="text-gray-700">
                Developed a cross-platform mobile app to enhance customer
                engagement and streamline their service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* about */}(
      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-12 text-gray-700">
            At ABTech Consulting, we are driven by the mission to provide
            cutting-edge technology solutions and professional services that
            empower businesses to grow. Our team consists of highly skilled
            professionals with deep expertise in ERP systems, data analysis, web
            development, and artificial intelligence.
          </p>

          <p className="text-lg mb-12 text-gray-700">
            We believe in partnering with our clients to deliver solutions that
            not only meet but exceed their expectations. Our goal is to help
            businesses navigate their digital transformation with ease and
            confidence, ensuring sustainable growth and success.
          </p>

          {/* Mission Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To deliver innovative, cost-effective, and reliable technology
              solutions that drive business success.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the go-to consulting partner for businesses worldwide, known
              for delivering excellence and building lasting client
              relationships.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6" id="about">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} ABTech Consulting. All rights
            reserved.
          </p>
          <div className="mt-4">
            <a
              href="https://wa.me/923279161573" // WhatsApp link with country code for Pakistan (+92)
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-teal-400 hover:text-teal-200">
              <FaWhatsapp className="inline-block mr-2" />
              Chat with us on WhatsApp
            </a>
            <span className="mx-4">|</span>
            <a
              href="mailto:haseebmiani13@gmail.com" // Gmail link
              className="inline-block text-teal-400 hover:text-teal-200">
              <FaEnvelope className="inline-block mr-2" />
              Email Us
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#portfolio" className="hover:text-teal-400">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-teal-400">
              Contact
            </a>
            <a href="#about" className="hover:text-teal-400">
              About Us
            </a>
            <a href="#services" className="hover:text-teal-400">
              Services
            </a>
            <a href="#expertise" className="hover:text-teal-400">
              Expertise
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
