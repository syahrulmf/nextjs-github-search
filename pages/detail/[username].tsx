import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { username } = router.query;
  return <div>Ini halaman dengan username : {username}</div>;
}
