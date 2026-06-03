"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-[#0d0d16] border-r border-zinc-800 min-h-screen p-4 transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      <div className="flex items-center justify-between mb-10">
        {!collapsed && (
          <h1 className="text-2xl font-bold text-white">
            LearnX
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      <nav className="space-y-4">

        <button className="flex items-center gap-3 w-full hover:bg-zinc-800 text-gray-300 p-4 rounded-2xl transition">
          <LayoutDashboard size={22} />
          {!collapsed && "Dashboard"}
        </button>

        <button className="flex items-center gap-3 w-full hover:bg-zinc-800 text-gray-300 p-4 rounded-2xl transition">
          <BookOpen size={22} />
          {!collapsed && "Courses"}
        </button>

        <button className="flex items-center gap-3 w-full hover:bg-zinc-800 text-gray-300 p-4 rounded-2xl transition">
          <BarChart3 size={22} />
          {!collapsed && "Analytics"}
        </button>

        <button className="flex items-center gap-3 w-full hover:bg-zinc-800 text-gray-300 p-4 rounded-2xl transition">
          <Settings size={22} />
          {!collapsed && "Settings"}
        </button>

      </nav>
    </aside>
  );
}