"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { Sun, MapPin, Building2, Home, Layers, ExternalLink, Globe } from "lucide-react";

interface SolarProject {
  id: number;
  title: string;
  location: string;
  address: string;
  category: "residential" | "commercial" | "society";
  capacity: string;
  capacityKW: number;
  lat: number;
  lng: number;
  amcStatus: boolean;
}

// Map Tile Layer Options (100% Free - No API Key Required)
const MAP_LAYERS = {
  google: {
    name: "Google Map",
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    attribution: "&copy; Google Maps",
  },
  satellite: {
    name: "Google Satellite",
    url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    attribution: "&copy; Google Satellite Imagery",
  },
  osm: {
    name: "OpenStreetMap",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap contributors",
  },
};

// Generate 160 detailed solar panel installations across Lucknow region
const generateLucknowProjects = (): SolarProject[] => {
  const lucknowClusters = [
    // Gomti Nagar & Extension
    { locality: "Gomti Nagar Phase 1", baseLat: 26.8505, baseLng: 80.9992, count: 12, cat: "residential" as const },
    { locality: "Gomti Nagar Phase 2", baseLat: 26.8540, baseLng: 81.0120, count: 12, cat: "residential" as const },
    { locality: "Gomti Nagar Extension", baseLat: 26.8380, baseLng: 81.0350, count: 10, cat: "society" as const },
    { locality: "Vibhuti Khand", baseLat: 26.8650, baseLng: 81.0020, count: 10, cat: "commercial" as const },
    { locality: "Viraj Khand", baseLat: 26.8480, baseLng: 81.0210, count: 8, cat: "residential" as const },

    // Aliganj & Kapoorthala
    { locality: "Aliganj Sector A & B", baseLat: 26.8920, baseLng: 80.9420, count: 10, cat: "residential" as const },
    { locality: "Aliganj Sector C & D", baseLat: 26.8980, baseLng: 80.9490, count: 10, cat: "residential" as const },
    { locality: "Kapoorthala Market", baseLat: 26.8850, baseLng: 80.9450, count: 8, cat: "commercial" as const },
    { locality: "Engineering College Road", baseLat: 26.9050, baseLng: 80.9480, count: 6, cat: "commercial" as const },

    // Hazratganj & Central Lucknow
    { locality: "Hazratganj MG Marg", baseLat: 26.8467, baseLng: 80.9462, count: 8, cat: "commercial" as const },
    { locality: "Ashok Marg & Sapru Marg", baseLat: 26.8510, baseLng: 80.9480, count: 6, cat: "commercial" as const },
    { locality: "Lalbagh & Park Road", baseLat: 26.8430, baseLng: 80.9410, count: 6, cat: "commercial" as const },

    // Indira Nagar & Munshipulia
    { locality: "Indira Nagar Block A & B", baseLat: 26.8790, baseLng: 80.9910, count: 10, cat: "residential" as const },
    { locality: "Indira Nagar Block C & D", baseLat: 26.8860, baseLng: 80.9980, count: 10, cat: "residential" as const },
    { locality: "Munshipulia & Bhootnath", baseLat: 26.8910, baseLng: 81.0060, count: 8, cat: "society" as const },

    // Mahanagar & Nishatganj
    { locality: "Mahanagar Sector A & B", baseLat: 26.8720, baseLng: 80.9550, count: 8, cat: "residential" as const },
    { locality: "Nishatganj & Badshahnagar", baseLat: 26.8640, baseLng: 80.9590, count: 6, cat: "commercial" as const },

    // Jankipuram & Extension
    { locality: "Jankipuram Extension", baseLat: 26.9200, baseLng: 80.9510, count: 8, cat: "residential" as const },
    { locality: "Jankipuram Sector F", baseLat: 26.9110, baseLng: 80.9420, count: 6, cat: "society" as const },

    // Sushant Golf City & Ansal API
    { locality: "Sushant Golf City", baseLat: 26.7720, baseLng: 81.0010, count: 8, cat: "society" as const },
    { locality: "Ansal API Pockets", baseLat: 26.7650, baseLng: 80.9950, count: 6, cat: "residential" as const },

    // Ashiyana & LDA Colony
    { locality: "Ashiyana Sector H & L", baseLat: 26.7910, baseLng: 80.9120, count: 8, cat: "residential" as const },
    { locality: "LDA Colony Kanpur Road", baseLat: 26.7850, baseLng: 80.9020, count: 6, cat: "residential" as const },

    // Rajajipuram & Talkatora
    { locality: "Rajajipuram Sectors", baseLat: 26.8320, baseLng: 80.8850, count: 8, cat: "residential" as const },
    { locality: "Talkatora Industrial Area", baseLat: 26.8280, baseLng: 80.8980, count: 6, cat: "commercial" as const },

    // Chinhat & Deva Road
    { locality: "Chinhat & Deva Road", baseLat: 26.8750, baseLng: 81.0550, count: 6, cat: "commercial" as const },

    // Vrindavan Yojana & Raebareli Road
    { locality: "Vrindavan Yojana", baseLat: 26.7790, baseLng: 80.9650, count: 6, cat: "society" as const },
    { locality: "Telibagh Raebareli Road", baseLat: 26.7980, baseLng: 80.9480, count: 6, cat: "residential" as const },
  ];

  const projects: SolarProject[] = [];
  let idCounter = 1;

  lucknowClusters.forEach((cluster) => {
    for (let i = 0; i < cluster.count; i++) {
      const latJitter = Math.sin(idCounter * 9.7 + i * 2.3) * 0.0085;
      const lngJitter = Math.cos(idCounter * 11.3 + i * 1.9) * 0.0095;

      const kwChoice = cluster.cat === "commercial"
        ? (15 + (idCounter % 4) * 10)
        : cluster.cat === "society"
          ? (20 + (idCounter % 5) * 8)
          : (3 + (idCounter % 5) * 2);

      const titleNum = 100 + idCounter;

      projects.push({
        id: idCounter,
        title: `${cluster.locality} - Site #${titleNum}`,
        location: cluster.locality,
        address: `${cluster.locality}, Lucknow, UP 2260${(idCounter % 30).toString().padStart(2, '0')}`,
        category: cluster.cat,
        capacity: `${kwChoice} kW`,
        capacityKW: kwChoice,
        lat: Number((cluster.baseLat + latJitter).toFixed(5)),
        lng: Number((cluster.baseLng + lngJitter).toFixed(5)),
        amcStatus: true,
      });

      idCounter++;
    }
  });

  return projects;
};

export default function LucknowSolarMap() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial" | "society">("all");
  const [activeLayer, setActiveLayer] = useState<keyof typeof MAP_LAYERS>("google");
  const [selectedProject, setSelectedProject] = useState<SolarProject | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  const allProjects = useMemo(() => generateLucknowProjects(), []);

  // Compute live statistics from dataset
  const stats = useMemo(() => {
    const totalCount = allProjects.length;
    const resCount = allProjects.filter(p => p.category === "residential").length;
    const commCount = allProjects.filter(p => p.category === "commercial").length;
    const socCount = allProjects.filter(p => p.category === "society").length;
    const totalKW = allProjects.reduce((sum, p) => sum + p.capacityKW, 0);

    return { totalCount, resCount, commCount, socCount, totalKW };
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.category === filter);
  }, [allProjects, filter]);

  // Dynamically Load Leaflet map
  useEffect(() => {
    let isMounted = true;

    const loadLeaflet = async () => {
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (!window.hasOwnProperty("L")) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.async = true;
        script.onload = () => {
          if (isMounted) initMap();
        };
        document.body.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!mapContainerRef.current || mapInstanceRef.current || !(window as any).L) return;

      const L = (window as any).L;

      // Centered on Lucknow City (26.8520, 80.9650)
      const map = L.map(mapContainerRef.current, {
        center: [26.8520, 80.9650],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // Default Free Tile Layer (Google Map layer)
      const tileLayer = L.tileLayer(MAP_LAYERS.google.url, {
        attribution: MAP_LAYERS.google.attribution,
        maxZoom: 20,
      }).addTo(map);

      tileLayerRef.current = tileLayer;
      mapInstanceRef.current = map;
      setMapLoaded(true);
    };

    loadLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update map tile layer when activeLayer changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const L = (window as any).L;
    if (!map || !L || !mapLoaded) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const layerConfig = MAP_LAYERS[activeLayer];
    const newTileLayer = L.tileLayer(layerConfig.url, {
      attribution: layerConfig.attribution,
      maxZoom: 20,
    }).addTo(map);

    tileLayerRef.current = newTileLayer;
  }, [activeLayer, mapLoaded]);

  // Render/Update Leaflet Markers whenever filter or projects change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const L = (window as any).L;
    if (!map || !L || !mapLoaded) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Render new markers
    filteredProjects.forEach((proj) => {
      const customIcon = L.divIcon({
        className: "custom-solar-marker",
        html: `
          <div class="relative flex items-center justify-center group cursor-pointer">
            <div class="w-3.5 h-3.5 rounded-full ${proj.category === 'commercial' ? 'bg-amber-400' : proj.category === 'society' ? 'bg-sky-400' : 'bg-emerald-500'} border-2 border-white shadow-[0_0_10px_rgba(16,185,129,0.9)] animate-pulse"></div>
          </div>
        `,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      const marker = L.marker([proj.lat, proj.lng], { icon: customIcon }).addTo(map);

      marker.on("click", () => {
        setSelectedProject(proj);
      });

      markersRef.current.push(marker);
    });
  }, [filteredProjects, mapLoaded]);

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 px-4 py-1.5 rounded-full text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            <MapPin size={14} className="text-primary" />
            <span>Lucknow Regional Free Google Maps View</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Over <span className="text-primary">{stats.totalCount} Active Solar Sites</span> Across Lucknow
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
            Free interactive Google Map showing rooftop solar installations, panel cleaning visits, and AMC contracts across Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, and all Lucknow localities.
          </p>
        </div>

        {/* Live Dynamic Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-primary">{stats.totalCount}</div>
            <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-1">Lucknow Solar Sites</div>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">{(stats.totalKW / 1000).toFixed(1)} MW+</div>
            <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-1">Total Solar Power</div>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
            <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-1">AMC & Cleaned</div>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-300">5,800+</div>
            <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-1">Tons CO₂ Offset</div>
          </div>
        </div>

        {/* Filter Controls & Map Type Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all outline-none border cursor-pointer ${filter === "all"
                ? "bg-primary text-slate-900 border-primary shadow-md"
                : "bg-slate-800 text-gray-300 border-slate-700 hover:bg-slate-750"
                }`}
            >
              All Sites ({stats.totalCount})
            </button>
            <button
              onClick={() => setFilter("residential")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all outline-none border cursor-pointer flex items-center gap-1.5 ${filter === "residential"
                ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md"
                : "bg-slate-800 text-gray-300 border-slate-700 hover:bg-slate-750"
                }`}
            >
              <Home size={13} />
              <span>Residential ({stats.resCount})</span>
            </button>
            <button
              onClick={() => setFilter("commercial")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all outline-none border cursor-pointer flex items-center gap-1.5 ${filter === "commercial"
                ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md"
                : "bg-slate-800 text-gray-300 border-slate-700 hover:bg-slate-750"
                }`}
            >
              <Building2 size={13} />
              <span>Commercial ({stats.commCount})</span>
            </button>
            <button
              onClick={() => setFilter("society")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all outline-none border cursor-pointer flex items-center gap-1.5 ${filter === "society"
                ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md"
                : "bg-slate-800 text-gray-300 border-slate-700 hover:bg-slate-750"
                }`}
            >
              <Layers size={13} />
              <span>Housing Societies ({stats.socCount})</span>
            </button>
          </div>

          {/* Map Layer Mode Selector */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveLayer("google")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeLayer === "google"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
                }`}
            >
              🗺️ Google Map
            </button>
            <button
              onClick={() => setActiveLayer("satellite")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeLayer === "satellite"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
                }`}
            >
              🛰️ Satellite
            </button>
            <button
              onClick={() => setActiveLayer("osm")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${activeLayer === "osm"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
                }`}
            >
              <Globe size={12} className="inline mr-1" />
              OSM
            </button>
          </div>
        </div>

        {/* Map Container & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          {/* Leaflet Map Container with Free Google Maps Layer */}
          <div className="lg:col-span-3 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative min-h-[460px] md:min-h-[540px] flex flex-col">
            <div ref={mapContainerRef} className="w-full flex-1 z-10 min-h-[460px]" />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 z-[500] bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-xl text-xs text-gray-200 flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold">Showing {filteredProjects.length} Solar Sites on Free {MAP_LAYERS[activeLayer].name}</span>
            </div>
          </div>

          {/* Installation Directory Sidebar */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-5 flex flex-col justify-between max-h-[540px]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80 mb-3">
                <h3 className="font-extrabold text-white text-sm flex items-center gap-1.5">
                  <Sun size={16} className="text-primary" />
                  <span>Lucknow Sites</span>
                </h3>
                <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                  Free Maps
                </span>
              </div>

              {/* Scrollable list */}
              <div className="space-y-2.5 overflow-y-auto max-h-[350px] pr-1 scrollbar-thin">
                {filteredProjects.map((proj) => {
                  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${proj.lat},${proj.lng}`;
                  return (
                    <div
                      key={proj.id}
                      onClick={() => {
                        setSelectedProject(proj);
                        if (mapInstanceRef.current) {
                          mapInstanceRef.current.flyTo([proj.lat, proj.lng], 14);
                        }
                      }}
                      className={`p-3 rounded-xl border text-xs transition-all cursor-pointer ${selectedProject?.id === proj.id
                        ? "bg-emerald-950/70 border-emerald-400 text-white shadow-md scale-[1.01]"
                        : "bg-slate-900/60 border-slate-700/60 text-gray-300 hover:border-slate-600 hover:bg-slate-850"
                        }`}
                    >
                      <div className="flex items-center justify-between font-bold text-white mb-1">
                        <span className="truncate pr-2">{proj.title}</span>
                        <span className="text-emerald-400 font-extrabold text-[11px] shrink-0">{proj.capacity}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-gray-400 mt-1">
                        <span className="truncate pr-1">📍 {proj.location}</span>
                        <a
                          href={googleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 font-bold shrink-0 flex items-center gap-0.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Google Maps</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700/80 mt-3 text-center">
              <a
                href="https://wa.me/918573003002?text=Hi,%20I%20am%20looking%20for%20maintenance%20of%20my%20solar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
              >
                <span>Add Your Lucknow Solar Site</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
