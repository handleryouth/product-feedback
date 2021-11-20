import Image from "next/image";
import { Comments } from "../mock";

export const Comment = ({
  comment,
  name,
  profilePicture,
  username,
  replyTo,
}: Comments) => {
  return (
    <div>
      <div>
        <Image
          src={profilePicture}
          layout="fixed"
          width={35}
          height={35}
          alt="Profile Picture"
        />
      </div>

      <div>
        <div>
          <div>
            <p>{name}</p>
            <p>{username}</p>
          </div>

          <p>Reply</p>
        </div>

        <p>
          {replyTo && <span>{replyTo}</span>}
          {comment}
        </p>
      </div>
    </div>
  );
};
