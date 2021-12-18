import { InputProps } from "../../types";

const Input = ({ title, label, toggleFunction, defaultValue }: InputProps) => {
  return (
    <div className="my-4">
      <h3 className="text-darkBlue font-bold">{title}</h3>
      <div className="flex flex-col text-grey">
        <label htmlFor={title}>{label}</label>
        <input
          id={title}
          type="text"
          className="bg-lightgray h-10 pl-4 rounded-md mt-2"
          onChange={(e) => toggleFunction(e.target.value)}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};

export default Input;
