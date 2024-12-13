"use client";

import { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { BlogTimeLineCard } from "./BlogTimeLineCard";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/modal/Post";

export function BlogTimeline() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        const sortedPosts = [...fetchedPosts].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // 可以替換成更好看的載入元件
  }

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.05,
        },
        padding: 3,
      }}
    >
      {posts.map((post, index) => (
        <TimelineItem key={post.date}>
          <TimelineOppositeContent>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot className="bg-primary" />
            {index < posts.length - 1 && (
              <TimelineConnector className="bg-border" />
            )}
          </TimelineSeparator>

          <TimelineContent className="pb-8">
            <BlogTimeLineCard post={post} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
