import React from "react";

export default function AccessControl({
  isLockdown,
  setIsLockdown,
  alertActive,
  setAlertActive,
}) {
  return (
    <div className="glass-panel p-6 flex flex-col gap-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Access Control
      </h2>

      {/* Visitor Profile [cite: 134] */}
      <div className="bg-black/40 rounded-xl p-4 flex items-center gap-4 border border-white/5">
        <div className="w-16 h-16 rounded-full border-2 border-cyan-500/30 overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=visitor" alt="Visitor" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 uppercase">
            Unknown Visitor
          </p>
          <p className="font-mono text-sm">ID: 982-AX-Q</p>
          <p className="text-[10px] text-amber-500 italic">
            No valid clearance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setAlertActive(false)}
          className="py-3 rounded-lg border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase hover:bg-cyan-500/10 transition-colors"
        >
          Approve
        </button>
        <button
          onClick={() => setIsLockdown(!isLockdown)}
          className={`py-3 rounded-lg text-xs font-bold uppercase transition-all ${isLockdown ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]" : "border border-red-500/50 text-red-500 hover:bg-red-500/10"}`}
        >
          {isLockdown ? "Lockdown Active" : "Deny Access"}
        </button>
      </div>

      <div className="mt-2 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-400">Front Door</span>
          <span className={isLockdown ? "text-red-500" : "text-cyan-400"}>
            {isLockdown ? "LOCKED" : "SECURE"}
          </span>
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${isLockdown ? "w-full bg-red-500" : "w-1/3 bg-cyan-500"}`}
          />
        </div>
      </div>
    </div>
  );
}
