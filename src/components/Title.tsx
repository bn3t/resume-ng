interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="mb-4">
      <h2 className="mb-1 text-2xl font-normal">{title}</h2>
      <div className="max-w-[50px] border-b-2 border-smo-blue-800"></div>
    </div>
  );
};

export default Title;
