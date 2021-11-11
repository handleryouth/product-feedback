interface InputTextAreaProps {
  title: string;
  label: string;
}

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  title,
  label,
}) => {
  return (
    <div className="my-4">
      <h3 className="text-darkBlue font-bold">{title}</h3>
      <div className="flex flex-col">
        <label htmlFor={label} className="text-grey">
          {label}
        </label>
        <textarea
          style={{ resize: "none" }}
          id={label}
          className="bg-lightgray h-36 rounded-md p-4 mt-3"
        />
      </div>
    </div>
  );
};
