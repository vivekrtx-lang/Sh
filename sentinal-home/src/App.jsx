import React, { useState, useEffect } from "react";
import CameraGrid from "./components/CameraGrid";
import AccessControl from "./components/AccessControl";
import SecurityLog from "./components/SecurityLog";
import EnvironmentControls from "./components/EnvironmentControls";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isLockdown, setIsLockdown] = useState(false);
  const [alertActive, setAlertActive] = useState(false);
  const [brightness, setBrightness] = useState(100);

  // Bonus: Fake Intruder Event after 15s
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertActive(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-700 ${alertActive ? "border-12 border-red-900/50" : "border-0"}`}
      style={{
        filter: `brightness(${brightness}%)`,
        backgroundColor: "#0a0c10",
      }}
    >
      {/* Header Area */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-light tracking-widest text-white uppercase">
            Sentinel <span className="font-bold text-cyan-400">Home</span>
          </h1>
          <p className="text-xs font-mono text-slate-500">
            SYSTEM STATUS: {alertActive ? "BREACH DETECTED" : "SECURE"}
          </p>
        </div>
        <div className="text-right font-mono">
          <p className="text-2xl text-cyan-400">11:30:45 AM</p>
          <p className="text-xs text-slate-500">17 APRIL 2026</p>
        </div>
      </div>

      {/* Main Grid Layout  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[80vh]">
        {/* Left: Surveillance  */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <CameraGrid alertActive={alertActive} />
          <SecurityLog alertActive={alertActive} />
        </div>

        {/* Right: Controls [cite: 132, 140] */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <AccessControl
            isLockdown={isLockdown}
            setIsLockdown={setIsLockdown}
            alertActive={alertActive}
            setAlertActive={setAlertActive}
          />
          <EnvironmentControls setBrightness={setBrightness} />
        </div>
      </div>

      {/* Intruder Overlay [cite: 156] */}
      <AnimatePresence>
        {alertActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-red-900/20 pointer-events-none z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="bg-red-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl"
            >
              MOTION AT FRONT DOOR
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
