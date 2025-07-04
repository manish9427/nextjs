import About from "./about";
import Header from "./header";
import Timer from "../components/Timer";
import Counter from "./counter";
import Slider from "../components/Slider"
import Form from "../components/Form";

export default function Home() {
    return(
        <div>
            <Form/>
            <About/>
            <Header/>
            <Timer/>
            <Slider/>
            <Counter/>
        </div>
    )
}