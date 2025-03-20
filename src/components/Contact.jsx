import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending"); // Changed to lowercase
    setShowModal(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success"); // Changed to lowercase
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error"); // Changed to lowercase
      }
    } catch (error) {
      setStatus("error"); // Changed to lowercase
    }

    setTimeout(() => {
      setShowModal(false);
      setStatus(""); // Reset status
    }, 3000);
  };

  return (
    <div className="relative max-w-5xl mx-auto p-10 overflow-hidden">
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </div>
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-md">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have an idea? <br /> Let's bring it to life! Fill out the form below, or reach out using the contact details.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              icon: <Mail className="h-8 w-8 text-indigo-600" />,
              title: "Email Directly",
              info: "shresthakushal850@gmail.com",
              gradient: "from-indigo-500 to-indigo-300",
              hoverBorder: "indigo-600",
            },
            {
              icon: <Phone className="h-8 w-8 text-teal-500" />,
              title: "Call Me",
              info: "+ (977) 9843128520",
              gradient: "from-teal-600 to-teal-400",
              hoverBorder: "teal-600",
            },
            {
              icon: <MapPin className="h-8 w-8 text-yellow-500" />,
              title: "Location",
              info: "Kathmandu, Nepal",
              gradient: "from-yellow-600 to-yellow-400",
              hoverBorder: "yellow-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-${item.hoverBorder} transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-${item.hoverBorder}/10 transform hover:-translate-y-1`}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.info}</p>
              <div
                className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500 rounded-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* Form section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-sm relative overflow-hidden">
          <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Tell Us About Your Project
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-gray-300 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-800/80 text-gray-200 p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-300 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-gray-800/80 text-gray-200 p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-300 font-medium">Project Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-gray-800/80 text-gray-200 p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-5 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/20"
            >
              <Send className="h-5 w-5 mr-2 inline-block" />
              Send Proposal Request
            </button>
          </form>
        </div>
      </div>

      {/* Modal for success or error */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-auto border border-gray-700"
          >
            {status === "sending" ? ( // Ensure lowercase
              <div className="flex flex-col items-center space-y-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full"
                />
                <h3 className="text-xl font-semibold text-cyan-400">Sending Message</h3>
                <p className="text-gray-400">Securely transmitting your details...</p>
              </div>
            ) : status === "success" ? ( // Ensure lowercase
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-400">Success!</h3>
                <p className="text-gray-300">Message received. I'll respond within 24 hours.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-400">Delivery Failed</h3>
                <p className="text-gray-300">
                  Please try again or contact directly via email/phone
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="mt-20 py-8 text-center text-gray-400">
        <p>© 2025 Kushal Shrestha. All rights reserved.</p>
        <p> 📍Kathmandu, Nepal    </p>
      </footer>
    </div>
  );
};

export default Contact;