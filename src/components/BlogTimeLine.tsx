"use client";

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
import { TimelinePost } from "@/modal/Post";

const posts: TimelinePost[] = [
  {
    date: "2024-03-15",
    title: "新功能發布",
    description:
      "今天我們發布了一些令人興奮的新功能，包括深色模式和時間軸視圖。",
  },
  {
    date: "2024-03-05",
    title: "Bug 修復",
    description: "修復了使用者報告的幾個關鍵 bug，提升了整體穩定性。",
  },
];

export default function BlogTimeline() {
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
