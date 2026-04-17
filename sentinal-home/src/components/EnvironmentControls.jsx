import React, { useState } from "react";

export default function EnvironmentControls({ setBrightness }) {
  const [temp, setTemp] = useState(68); // Default 68°F per requirements [cite: 141]

  return (
    <div className="glass-panel p-6 flex flex-col gap-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Environment Controls
      </h2>

      {/* Temperature Thermostat [cite: 141] */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">
            Climate Control
          </span>
          <span className="font-mono text-xl text-white">
            {temp}°F / {Math.round(((temp - 32) * 5) / 9)}°C
          </span>
        </div>
        <input
          type="range"
          min="60"
          max="85"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <div className="flex justify-between text-[9px] font-mono text-slate-600">
          <span>60°F</span>
          <span>85°F</span>
        </div>
      </div>

      {/* Light Dimmers [cite: 142, 157] */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider">
            Ambient Lighting
          </span>
          <span className="text-[10px] text-cyan-400 font-mono">
            SYNC_ENABLED
          </span>
        </div>
        <input
          type="range"
          min="20"
          max="100"
          defaultValue="100"
          onChange={(e) => setBrightness(e.target.value)}
          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
        />
      </div>

      {/* Backup Battery Meter [cite: 144] */}
      <div className="pt-4 border-t border-white/5 space-y-3">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase">
              Power Source
            </span>
            <span className="text-[9px] text-green-500 font-mono">
              BACKUP_CELL_ACTIVE
            </span>
          </div>
          <span className="font-mono text-2xl text-green-400">98%</span>
        </div>
        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
          <div className="bg-green-500 h-full w-[98%] shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-1000" />
        </div>
      </div>

      {/* Smart Home Presets */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        <button className="py-2 text-[9px] uppercase font-bold border border-white/10 rounded hover:bg-white/5 transition-all">
          Evening
        </button>
        <button className="py-2 text-[9px] uppercase font-bold border border-cyan-500/30 text-cyan-400 rounded bg-cyan-500/5">
          Night
        </button>
      </div>
    </div>
  );
}
