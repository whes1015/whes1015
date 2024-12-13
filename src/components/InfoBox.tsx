import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export type InfoType = "tip" | "note" | "info" | "warn" | "caution";

interface InfoBoxProps {
  type: InfoType;
  title?: string;
  children: React.ReactNode;
}

export function InfoBox({ type, title, children }: InfoBoxProps) {
  const styles = {
    tip: {
      container:
        "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/30",
      icon: "text-green-500 dark:text-green-400",
      title: "text-green-800 dark:text-green-300",
      content: "text-green-700 dark:text-green-300",
    },
    note: {
      container:
        "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/30",
      icon: "text-gray-500 dark:text-gray-400",
      title: "text-gray-800 dark:text-gray-300",
      content: "text-gray-700 dark:text-gray-300",
    },
    info: {
      container:
        "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-900/30",
      icon: "text-blue-500 dark:text-blue-400",
      title: "text-blue-800 dark:text-blue-300",
      content: "text-blue-700 dark:text-blue-300",
    },
    warn: {
      container:
        "border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-900/30",
      icon: "text-orange-500 dark:text-orange-400",
      title: "text-orange-800 dark:text-orange-300",
      content: "text-orange-700 dark:text-orange-300",
    },
    caution: {
      container:
        "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-900/30",
      icon: "text-red-500 dark:text-red-400",
      title: "text-red-800 dark:text-red-300",
      content: "text-red-700 dark:text-red-300",
    },
  };

  const icons = {
    tip: <LightbulbOutlinedIcon className="h-5 w-5" />,
    note: <NoteOutlinedIcon className="h-5 w-5" />,
    info: <InfoOutlinedIcon className="h-5 w-5" />,
    warn: <WarningAmberOutlinedIcon className="h-5 w-5" />,
    caution: <ErrorOutlineOutlinedIcon className="h-5 w-5" />,
  };

  const defaultTitles = {
    tip: "提示",
    note: "筆記",
    info: "資訊",
    warn: "注意",
    caution: "警告",
  };

  if (!styles[type]) {
    type = "tip";
  }

  return (
    <div className={`my-4 rounded-lg border p-4 ${styles[type].container}`}>
      <div className="flex items-start">
        <div className={styles[type].icon}>{icons[type]}</div>
        <div className="ml-3 w-full">
          <h5 className={`font-medium ${styles[type].title}`}>
            {title || defaultTitles[type]}
          </h5>
          <div className={`mt-2 ${styles[type].content}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
