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
  const [notification, setNotification] = useState(null);

  // Trigger a "System Ready" toast on load
  useEffect(() => {
    showToast("Sentinel OS v4.0 Initialized", "info");
    const intruderTimer = setTimeout(() => {
      setAlertActive(true);
      showToast("SECURITY BREACH: Front Door", "error");
    }, 15000);
    return () => clearTimeout(intruderTimer);
  }, []);

  const showToast = (msg, type) => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div
      className="min-h-screen p-4 lg:p-8 transition-all duration-1000"
      style={{
        filter: `brightness(${brightness}%)`,
        backgroundColor: "#0a0c10",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 80%)",
      }}
    >
      {/* Top HUD */}
      <header className="flex justify-between items-start mb-10 border-b border-white/5 pb-4">
        <div>
          <h1 className="text-4xl font-extralight tracking-tighter text-white uppercase">
            SENTINEL<span className="font-black text-cyan-400">HOME</span>
          </h1>
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-2 text-[10px] font-mono text-green-500">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />{" "}
              NETWORK: STABLE
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase">
              LATENCY: 14ms
            </span>
          </div>
        </div>
        <div className="text-right font-mono hidden md:block">
          <p className="text-3xl text-cyan-400/80 font-light tabular-nums">
            14:20:45
          </p>
          <p className="text-[10px] text-slate-600 tracking-[0.3em]">
            FRIDAY // APRIL 2026
          </p>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto h-[75vh]">
        <section className="lg:col-span-8 flex flex-col gap-6">
          <CameraGrid alertActive={alertActive} />
          <SecurityLog alertActive={alertActive} />
        </section>

        <aside className="lg:col-span-4 flex flex-col gap-6">
          <AccessControl
            isLockdown={isLockdown}
            setIsLockdown={(val) => {
              setIsLockdown(val);
              showToast(
                val ? "Lockdown Initiated" : "Doors Unlocked",
                val ? "error" : "info",
              );
            }}
            alertActive={alertActive}
            setAlertActive={setAlertActive}
          />
          <EnvironmentControls setBrightness={setBrightness} />
        </aside>
      </main>

      {/* Modern Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className={`fixed bottom-8 right-8 px-6 py-3 rounded-lg border backdrop-blur-xl z-100 font-mono text-xs shadow-2xl ${
              notification.type === "error"
                ? "bg-red-500/10 border-red-500/50 text-red-500"
                : "bg-cyan-500/10 border-cyan-500/50 text-cyan-400"
            }`}
          >
            {notification.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
