import { useSelector } from "react-redux";

export default function useApp() {
  const loader = useSelector(store => store.products.loader)

  const gitData = useSelector(store => store)

  console.log("gitData from store in appjs", gitData);
  return [loader]
}
