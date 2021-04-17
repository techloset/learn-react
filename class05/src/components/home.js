import Section from "./nested/section1";
function Home(props) {
    console.log("props", props);
    return (
        <div>
            <Section childData={props.data} />
        </div>
    )
}

export default Home;