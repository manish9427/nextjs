import About from "./about";
import Header from "./header";
import Timer from "../components/Timer/Timer";
import Counter from "./counter";
import Slider from "../components/Slider"
import Form from "../components/Form";
import Calculator from "../components/Calculator/Calculator";

export default function Home() {
    return(
        <div>
            <Calculator/>
            <Form/>
            <About/>
            <Header/>
            <Timer/>
            <Slider/>
            <Counter/>
        </div>
    )
}