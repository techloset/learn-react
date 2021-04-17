    import Header from "./header";
    import FeatureItem from "../../commonComponents/featureItem";
import {featureData } from "../../constants/featureData";

    
    function LandingPage() {
        return (
            <div>
                <Header />
                {/* <Slider /> */}
            {
                featureData.map((item)=>  <FeatureItem data={item} />)
            }
                {/* <FeatureItem />
                <FeatureItem />
                <FeatureItem />
                <FeatureItem /> */}

            </div>
        )
    }

    export default LandingPage;