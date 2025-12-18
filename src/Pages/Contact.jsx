import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Sparkles,
  ChevronRight,
  Check,
} from "lucide-react";
//Import constants
import {
  CONTACT_INFO,
  BRAND_COLORS,
  CONTACT_COPY,
} from "../Constant/contactInfo";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  // Destructure for cleaner access
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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating Golden Bubbles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            backgroundColor: goldenBubble,
            width: `${Math.random() * 80 + 20}px`,
            height: `${Math.random() * 80 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() > 0.5 ? 30 : -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Subtle Animated Gold Glow */}
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
            <div className="p-2 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50">
              <Sparkles className="w-4 h-4 text-amber-700" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-5">
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
                className="absolute -bottom-1 left-0 w-full h-0.5"
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
            className="text-gray-600 max-w-2xl mx-auto text-lg"
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
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div
                  className="p-3 rounded-xl mr-4 flex-shrink-0"
                  style={{ background: goldGradient }}
                >
                  <span className="text-white">
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
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {item.label}
                  </h3>
                  <p className="text-lg font-medium text-gray-900 mt-1">
                    {item.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
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
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                {formTitle}
              </h2>
              <p className="text-gray-600 mt-2">{formSubtitle}</p>
            </div>

            {/* ... rest of form remains the same ... */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition resize-none"
                  placeholder="Tell us about your vision or opportunity..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 px-6 rounded-xl font-medium text-white relative overflow-hidden"
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

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200"
                >
                  <div className="flex">
                    <Check className="text-emerald-600 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-emerald-800 text-sm">
                      Thank you! Your message has been received. We’ll get back
                      to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-light text-center text-gray-900 mb-6">
            {mapTitle}
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location – Kathmandu, Nepal"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
