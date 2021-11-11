interface InputDropdownProps {
  title?: string;
  label: string;
  list: string[];
  flex: "flex-col" | "flex-row";
  toggleFunction: (value: string) => void;
}

export const InputDropdown: React.FC<InputDropdownProps> = ({
  list,
  title,
  label,
  flex,
  toggleFunction,
}) => {
  return (
    <div className={`${flex === "flex-col" ? "my-4" : ""} cursor-pointer`}>
      <h3 className="text-darkBlue font-bold">{title}</h3>
      <div
        className={`flex ${
          flex === "flex-col" ? `${flex}` : `${flex} items-center`
        } text-grey`}
      >
        <label
          htmlFor={title}
          className={`${flex === "flex-col" ? "" : "text-white"}`}
        >
          {label}{" "}
        </label>
        <select
          title="dropdownInput"
          id={title}
          className={`flex ${
            flex === "flex-col" ? "bg-lightgray mt-2" : "bg-darkBlue text-white"
          } h-10 pl-4 rounded-md `}
          onChange={(e) => toggleFunction(e.target.value)}
        >
          {list.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
