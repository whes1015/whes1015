import { TimelinePost } from "@/modal/Post";
import { Card, CardContent } from "@mui/material";

export function BlogTimeLineCard({ post }: { post: TimelinePost }) {
  return (
    <Card
      sx={{ background: "transparent" }}
      className={`
                flex h-full cursor-pointer flex-col
                border border-border/50
                backdrop-blur-md backdrop-saturate-150
                bg-background/30 
                transition-[color_background-color_border-color]
                dark:hover:bg-primary/[.08]
                hover:border-primary/40 hover:bg-primary/[.04]
                glow:border-primary glow:bg-primary/[.08]
                group
                relative
                overflow-hidden
              `}
    >
      {/* 光源效果 1: 懸停時的邊緣光暈 */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
                bg-gradient-to-r from-primary/10 via-transparent to-primary/5"
      />

      {/* 光源效果 2: 卡片中心發光 */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30
                transition-opacity duration-500 pointer-events-none
                bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,transparent_60%)]"
      />

      <CardContent className="relative z-10">
        <h3
          className="text-lg font-semibold text-primary mb-2 
                  group-hover:text-primary/90 transition-colors"
        >
          {post.title}
        </h3>
        <p
          className="text-sm text-muted-foreground group-hover:text-foreground/90 
                  transition-colors"
        >
          {post.description}
        </p>
      </CardContent>
    </Card>
  );
}