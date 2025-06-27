import About from "./about";
import Header from "./header";
import Timer from "../components/Timer";
import Counter from "./counter";
import Slider from "../components/Slider"

export default function Home() {
    return(
        <div>
            <About/>
            <Header/>
            <Timer/>
            <Slider/>
            <Counter/>
        </div>
    )
}