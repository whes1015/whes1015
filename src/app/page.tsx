import { BlogTimeline } from "@/components/BlogTimeLine";
import { Avatar } from "@mui/material";
import React from "react";
import USER_NAME from "../../config";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5 flex flex-col items-center pt-8">
          <Avatar
            alt={USER_NAME}
            src="https://avatars.githubusercontent.com/u/44525760?v=4"
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 },
              mb: 3,
            }}
          />
          <h1 className="text-4xl md:text-4xl font-black">{USER_NAME}</h1>
        </aside>

        <main className="md:w-4/5">
          <BlogTimeline />
        </main>
      </div>
    </div>
  );
};

export default Home;
