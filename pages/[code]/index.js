import Detail from "@/components/detail/Detail";
import List from "@/components/detail/List";
import { useRouter } from "next/router";

const ListPage = () => {
  const router = useRouter();
  const { query } = router;
  const { code } = query;

  if (code === "story") {
    return <Detail></Detail>;
  }

  return <List category={code} />;
};

export default ListPage;
