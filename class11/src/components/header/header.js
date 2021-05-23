import { useSelector } from "react-redux";

function Header() {
   const store = useSelector(store => store)
   console.log("store in header", store);
    return (
        <div>Header </div>
    )
}

export default Header;