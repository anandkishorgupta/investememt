import { motion } from "framer-motion";
import { ChevronRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { BRAND_COLORS, CONTACT_COPY, CONTACT_INFO } from "../Constant/contactInfo";
import { sendContactMessage } from "../api/contact";

// ----------------------
// Reusable Components
// ----------------------
const ContactCard = ({ icon, label, value, description, goldGradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative bg-amber-50 rounded-2xl p-6 shadow-md hover:shadow-lg border border-[#D4AF37]/40 transition-all"
  >
    <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
      <div className="p-3 rounded-xl shrink-0" style={{ background: goldGradient }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-900">{label}</h3>
        <p className="text-lg font-medium mt-1 text-amber-900 break-words">{value}</p>
        {description && <p className="text-amber-600 text-sm mt-1 break-words">{description}</p>}
      </div>
    </div>
  </motion.div>
);

const InputField = ({ label, type = "text", name, value, onChange, placeholder, rows }) => (
  <div>
    <label className="block text-sm font-medium text-amber-900 mb-2">{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 bg-amber-100 border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 bg-amber-100 border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition"
      />
    )}
  </div>
);

// ----------------------
// Main Contact Component
// ----------------------
const Contact = () => {
  const { goldGradient, goldGlow } = BRAND_COLORS;
  const { address, phone, email, mapEmbedUrl } = CONTACT_INFO;
  const { headlinePrefix, headlineHighlight, subheading, formTitle, formSubtitle, mapTitle } = CONTACT_COPY;

  const [formData, setFormData] = useState({ Name: "", Email: "", Message: "" });
  const [status, setStatus] = useState("idle");
  const formRef = useRef();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await sendContactMessage(formData);
      setFormData({ Name: "", Email: "", Message: "" });
      formRef.current?.reset();
      toast.success("Message sent successfully!");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      toast.error("Failed to send message. Try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-amber-900">
      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      <motion.div
        className="absolute top-1/4 -right-1/3 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: `radial-gradient(circle, ${goldGlow}, transparent 70%)` }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-1/3 w-[700px] h-[700px] rounded-full opacity-20"
        style={{ background: `radial-gradient(circle, ${goldGlow}, transparent 70%)` }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.08, 0.15] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 300 }} className="inline-flex items-center justify-center mb-4">
            <div className="p-2 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-100">
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-5">
            {headlinePrefix}{" "}
            <span className="font-medium relative inline-block" style={{ background: goldGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {headlineHighlight}
              <motion.div className="absolute -bottom-1 left-0 w-full h-1" style={{ background: goldGradient }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} />
            </span>
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-amber-800 max-w-2xl mx-auto text-lg">
            {subheading}
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <ContactCard icon={<MapPin size={20} />} label={address.label} value={address.value} description={address.description} goldGradient={goldGradient} />
          <ContactCard icon={<Phone size={20} />} label={phone.label} value={phone.value} description={phone.description} goldGradient={goldGradient} />
          <ContactCard icon={<Mail size={20} />} label={email.label} value={email.value} description={email.description} goldGradient={goldGradient} />
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-amber-50 rounded-2xl p-6 md:p-8 shadow-md border border-[#D4AF37]/30">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-amber-900">{formTitle}</h2>
              <p className="text-amber-800 mt-2">{formSubtitle}</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" name="Name" value={formData.Name} onChange={handleChange} placeholder="Your name" />
                <InputField label="Email" type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="your.email@example.com" />
              </div>
              <InputField label="Message" type="textarea" name="Message" value={formData.Message} onChange={handleChange} rows={5} placeholder="Tell us about your vision..." />

              <motion.button type="submit" disabled={status === "submitting"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} className="w-full py-3.5 px-6 rounded-xl font-medium relative overflow-hidden text-amber-900" style={{ background: goldGradient }}>
                {status === "submitting" ? (
                  <span className="flex items-center justify-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Sending...
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-20">
          <h2 className="text-2xl font-light text-center text-amber-900 mb-6">{mapTitle}</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/30 max-w-4xl mx-auto">
            <iframe src={mapEmbedUrl} width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
