import { useRouter } from "next/router";
const Detail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>Detail{productId}</div>;
};
export default Detail;