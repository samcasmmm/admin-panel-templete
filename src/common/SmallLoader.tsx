type Props = {
  color: 'border-primary' | 'border-white';
};

const SmallLoader = ({ color }: Props) => {
  return (
    <div
      className={`h-5 w-5 animate-spin rounded-full border-4 border-solid ${color} border-t-transparent`}
    ></div>
  );
};

export default SmallLoader;
