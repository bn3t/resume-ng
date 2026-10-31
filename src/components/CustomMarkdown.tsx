import clsx from "clsx";
import Markdown from "react-markdown";

interface CustomMarkdownProps {
  className?: string;
  children?: string;
  pAsSpan?: boolean;
}

const CustomMarkdown = ({ pAsSpan = false, className, ...props }: CustomMarkdownProps) => {
  // react-markdown 10 dropped the className prop; wrap in the same div it used to render.
  return (
    <div className={clsx("prose prose-cv dark:prose-invert", className)}>
      <Markdown
        {...props}
        components={{
          p: pAsSpan ? "span" : "p",
          a: (props) => {
            return <a {...props} target="_blank" />;
          },
        }}
      />
    </div>
  );
};

export default CustomMarkdown;
