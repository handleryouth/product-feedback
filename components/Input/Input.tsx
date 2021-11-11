interface InputProps {
  title: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({ title, label }) => {
  return (
    <div className="my-4">
      <h3 className="text-darkBlue font-bold">{title}</h3>
      <div className="flex flex-col text-grey">
        <label htmlFor={title}>{label}</label>
        <input
          id={title}
          type="text"
          className="bg-lightgray h-10 pl-4 rounded-md mt-2"
        />
      </div>
    </div>
  );
};
