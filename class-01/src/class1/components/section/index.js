import Section1 from "./components/firstSection";
import Section2 from "./components/secondSection"
function SectionParent() {
    return(
        <div>
            <Section1 />
            <Section2 />
        </div>
    )
}
export default SectionParent;