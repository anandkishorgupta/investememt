
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";
// Import constants
import {
  BRAND_COLORS,
  CONTACT_COPY,
  CONTACT_INFO,
} from "../Constant/contactInfo";
import { sendContactMessage } from "../api/contact";


const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const formRef = useRef();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    setStatus("submitting");

    try {
      const result = await sendContactMessage(formData);
      console.log("Success:", result);

      setStatus("success");
      setFormData({ Name: "", Email: "", Message: "" });
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const { goldGradient, goldGlow, goldenBubble } = BRAND_COLORS;
  const { address, phone, email, mapEmbedUrl } = CONTACT_INFO;
  const {
    headlinePrefix,
    headlineHighlight,
    subheading,
    formTitle,
    formSubtitle,
    mapTitle,
  } = CONTACT_COPY;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#0B0B0B] text-white">
      {/* Soft Golden Glows */}
      <motion.div
        className="absolute top-1/4 -right-1/3 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${goldGlow}, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-1/3 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${goldGlow}, transparent 70%)`,
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.08, 0.15] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-100">
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-5">
            {headlinePrefix}{" "}
            <span
              className="font-medium relative inline-block"
              style={{
                background: goldGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {headlineHighlight}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-1"
                style={{ background: goldGradient }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            {subheading}
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[address, phone, email].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1F1F1F] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#D4AF37]/40"
            >
              <div className="flex items-start">
                <div
                  className="p-3 rounded-xl mr-4 flex-shrink-0"
                  style={{ background: goldGradient }}
                >
                  <span className="text-black">
                    {item.label === "Office" ? (
                      <MapPin size={20} />
                    ) : item.label === "Phone" ? (
                      <Phone size={20} />
                    ) : (
                      <Mail size={20} />
                    )}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[#FFD700]">
                    {item.label}
                  </h3>
                  <p className="text-lg font-medium text-white mt-1">
                    {item.value}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#1F1F1F] rounded-2xl p-6 md:p-8 shadow-md border border-[#D4AF37]/30"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-white">
                {formTitle}
              </h2>
              <p className="text-gray-300 mt-2">{formSubtitle}</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your vision..."
                  required
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 px-6 rounded-xl font-medium text-black relative overflow-hidden"
                style={{ background: goldGradient }}
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </span>
                ) : status === "success" ? (
                  <span className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2" /> Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message <ChevronRight className="ml-2 w-4 h-4" />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-light text-center text-white mb-6">
            {mapTitle}
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/30 max-w-4xl mx-auto">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
