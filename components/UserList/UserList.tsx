import { SearchRes } from "../../types/SearchRes";
import UserItem from "../UserItem/UserItem";

export default function UserList({ result, search }: Props) {
  return (
    <div className="border rounded-lg w-full space-y-3 pb-10">
      <p className="text-center p-5">
        Hasil Pencarian dari <span className="font-bold">{search}</span>
      </p>
      {result?.users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}

interface Props {
  result?: SearchRes;
  search?: string;
}
