import clsx from "clsx";
import Markdown from "react-markdown";

interface CustomMarkdownProps {
  className?: string;
  children?: string;
  pAsSpan?: boolean;
}

const CustomMarkdown = ({ pAsSpan = false, className, ...props }: CustomMarkdownProps) => {
  return (
    <Markdown
      {...props}
      className={clsx("prose prose-cv dark:prose-invert", className)}
      components={{
        p: pAsSpan ? "span" : "p",
        a: (props) => {
          return <a {...props} target="_blank" />;
        },
      }}
    />
  );
};

export default CustomMarkdown;
