import { User } from "next-auth";
import { FC } from "react";
import { Avatar } from "./ui/avatar";
import Image from "next/image";

interface UserAvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user }: UserAvatarProps) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            fill
            src={user.image}
            alt="profile image"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <h1>fallback</h1>
      )}
    </Avatar>
  );
};

export default UserAvatar;
