"use client"
import { useMemo } from "react"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import MarkdownPreview from "@uiw/react-markdown-preview"

interface MarkdownProps {
  content: string;
}

export const RenderMarkdown: React.FC<MarkdownProps> = ({ content }) => {
  const renderedMarkdown = useMemo(() => {
    return (
      <MarkdownPreview source={content}
        wrapperElement={{
          "data-color-mode": "light"
        }} />
    );
  }, [content]);

  return <>{renderedMarkdown}</>;
};
