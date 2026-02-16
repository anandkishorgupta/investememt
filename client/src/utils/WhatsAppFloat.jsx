import { AnimatePresence, motion } from "framer-motion";
import { memo, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = memo(
    ({
        phone,
        message = "Hello, I visited your website",
        position = "right",
        bottom = 60,
        offset = 32,
        tooltipText = "Chat with us",
        showTooltip = true,
        onClick,
    }) => {
        const [hovered, setHovered] = useState(false);

        const url = useMemo(() => {
            if (!phone) return "#";
            const clean = phone.replace(/[^\d+]/g, "");
            return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
        }, [phone, message]);

        const style = {
            bottom,
            [position]: offset,
        };

        return (
            <div
                className="fixed z-[9999]"
                style={style}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Tooltip */}
                <AnimatePresence>
                    {hovered && showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, x: position === "right" ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: position === "right" ? 20 : -20 }}
                            transition={{ duration: 0.25 }}
                            className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 bg-white shadow-xl rounded-lg text-sm font-semibold ${position === "right" ? "right-full mr-3" : "left-full ml-3"
                                }`}
                        >
                            {tooltipText}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Button */}
                <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open WhatsApp chat"
                    onClick={onClick}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="
            relative flex items-center justify-center
            w-14 h-14 rounded-full
            bg-gradient-to-br from-[#25D366] to-[#128C7E]
            text-white shadow-xl
          "
                >
                    {/* Floating motion */}
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <FaWhatsapp size={35} />
                    </motion.div>
                </motion.a>
            </div>
        );
    }
);

export default WhatsAppFloat;
