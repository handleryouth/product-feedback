interface InputCommentProps {
  toggleFunction: (value: string) => void;
}

export function InputComment({ toggleFunction }: InputCommentProps) {
  return (
    <div className="mt-4">
      <textarea
        className="border-2 w-full rounded p-2"
        style={{ resize: "none" }}
        placeholder="Type your reply here"
        onChange={(e) => toggleFunction(e.target.value)}
      />

      <button className="bg-purple text-white px-6 py-2 rounded mt-4">
        Post Reply
      </button>
    </div>
  );
}
