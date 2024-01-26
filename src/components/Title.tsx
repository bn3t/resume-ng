interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => (
  <div className="mb-4">
    <h2 className="mb-1 text-2xl font-normal">{title}</h2>
    <div className="max-w-[50px] border-b-2 border-smo-blue-400 dark:border-smo-blue-900"></div>
  </div>
);

export default Title;
