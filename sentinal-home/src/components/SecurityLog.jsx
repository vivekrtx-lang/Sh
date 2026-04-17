import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SecurityLog({ alertActive }) {
  // Sample data for recent security events [cite: 138]
  const logs = [
    {
      id: 1,
      time: "11:28:10",
      event: "Motion detected on Balcony",
      type: "INFO",
    },
    {
      id: 2,
      time: "11:15:45",
      event: "Package delivered at Front Door",
      type: "SUCCESS",
    },
    {
      id: 3,
      time: "10:45:22",
      event: "Failed passcode at Front Door",
      type: "WARN",
    },
    {
      id: 4,
      time: "09:30:00",
      event: "System Diagnostic Complete",
      type: "INFO",
    },
  ];

  return (
    <div className="glass-panel p-5 overflow-hidden flex-1 flex flex-col">
      {/* Section Header [cite: 137] */}
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4 flex justify-between items-center">
        Security Log
        <span className="text-[9px] text-slate-500 font-mono">
          LIVE_FEED_v2.4
        </span>
      </h2>

      <div className="space-y-2 font-mono text-[11px] overflow-y-auto pr-2 custom-scrollbar">
        {/* Dynamic Alert for High-Level Threats [cite: 139, 156] */}
        <AnimatePresence>
          {alertActive && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="p-3 bg-red-950/40 border-l-4 border-red-600 rounded flex justify-between items-center group cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-red-500 font-bold uppercase animate-pulse">
                  Critical: Glass Break Detected
                </span>
                <span className="text-[9px] text-red-400/70">
                  Location: Perimeter Sector 7 (Front Door)
                </span>
              </div>
              <button className="text-[9px] bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500 transition-colors uppercase">
                Call Police
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Standard Event List [cite: 138] */}
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex justify-between items-center p-2 border-b border-white/5 text-slate-400 hover:bg-white/5 transition-colors rounded"
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  log.type === "WARN"
                    ? "bg-amber-500 shadow-[0_0_5px_amber]"
                    : log.type === "SUCCESS"
                      ? "bg-green-500"
                      : "bg-cyan-500/50"
                }`}
              />
              <span className={log.type === "WARN" ? "text-amber-500" : ""}>
                {log.event}
              </span>
            </div>
            <span className="opacity-40 tabular-nums">{log.time}</span>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-auto pt-4 flex justify-between items-center opacity-30 text-[9px] uppercase tracking-widest">
        <span>Sentinel Home Security v4.0.1</span>
        <span>Encrypted Tunnel: Active</span>
      </div>
    </div>
  );
}
