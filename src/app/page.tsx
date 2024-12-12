import BlogTimeline from "@/components/BlogTimeLine";
import { Avatar } from "@mui/material";
import * as React from "react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-[1] flex flex-col items-center pt-8">
        <Avatar
          className="m-3"
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/44525760?v=4"
          sx={{ width: 250, height: 250 }}
        />
        <span className="p-8 text-5xl font-black">whes1015</span>
      </div>
      <div className="flex-[4]">
        <BlogTimeline />
      </div>
    </div>
  );
}
