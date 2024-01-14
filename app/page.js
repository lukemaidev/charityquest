"use client";

import Image from "next/image";
import AllResolutionPanel from "@/components/allResolutionPanel";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { userName, theme, setUsername, toggleTheme, userinfo, setUserinfo } =
    useAppContext();
  return (
    <main className="w-full h-screen grid place-content-center bg-slate-700">
      <div className="w-auto h-full bg-slate-800">
          <AllResolutionPanel />
      </div>
    </main>
  );
}
