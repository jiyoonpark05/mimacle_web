import Detail from "@/components/detail/Detail";
import List from "@/components/tutorial/TutorialList";
import { useRouter } from "next/router";

const ListPage = () => {
  const router = useRouter();
  const { query } = router;
  const { code } = query;

  return <List category={code} />;
};

export default ListPage;
