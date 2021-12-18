import { InputCommentProps } from "../../types";

const InputComment = ({ toggleFunction, toggleSubmit }: InputCommentProps) => {
  return (
    <div className="mt-4">
      <textarea
        className="border-2 w-full rounded p-2"
        style={{ resize: "none" }}
        placeholder="Type your reply here"
        onChange={(e) => toggleFunction(e.target.value)}
      />

      <button
        className="bg-purple text-white px-6 py-2 rounded mt-4"
        onClick={toggleSubmit}
      >
        Post Reply
      </button>
    </div>
  );
};

export default InputComment;
