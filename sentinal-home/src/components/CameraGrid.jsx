import React from "react";

export default function CameraGrid({ alertActive }) {
  const cameras = [
    {
      id: "CAM_01",
      name: "Front Door",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "CAM_02",
      name: "Balcony",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "CAM_03",
      name: "Living Room",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "CAM_04",
      name: "Hallway",
      img: "https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="glass-panel p-4 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Live Surveillance
        </h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono">REC :: 4 CHANNELS</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 h-[calc(100%-40px)]">
        {cameras.map((cam) => (
          <div
            key={cam.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer border border-white/5"
          >
            <img
              src={cam.img}
              alt={cam.name}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${alertActive && cam.id === "CAM_01" ? "sepia-[.5] hue-rotate-300deg" : ""}`}
            />
            <div className="scanline" />
            <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-[9px] font-mono uppercase tracking-tighter">
              {cam.id} // {cam.name}
            </div>
            {alertActive && cam.id === "CAM_01" && (
              <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center font-mono text-[10px] text-red-500 animate-pulse">
                MOTION DETECTED
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
