import SecondChild from "./secondChild";
function FirstChild() {
    return (
        <div>
            First Child
            <div>
                <SecondChild />
            </div>
        </div>
    )
}

export default FirstChild;