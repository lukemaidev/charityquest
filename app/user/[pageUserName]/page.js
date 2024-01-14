"use client";

import ResolutionPanel from "@/components/resolutionPanel";
import { useAppContext } from "@/context/AppContext";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";

export default function Page({ params }) {
  const { userName, theme, setUsername, toggleTheme, userinfo, setUserinfo } =
    useAppContext();
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_BACKEND_URI + "/user/" + params.pageUserName
  );
    console.log("kek")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-dvh min-w-full items-center justify-between flex flex-col flex-row">
        {params.pageUserName}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && data.status == 400 && <div>{data.message}</div>}
        {data && data.status == 200 && (
          <div>
            {console.log(data.data)}
            {<ResolutionPanel Resolutions_id={data.data.Resolutions_id}/>}
          </div>
        )}
        <Image src="/meoww.jpg" width={50} height={50} />
      </div>
    </main>
  );
}
