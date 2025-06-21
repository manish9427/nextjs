import About from "./about";
import Header from "./header";
import Timer from "../components/Timer";
import Counter from "./counter";

export default function Home() {
    return(
        <div>
            <About/>
            <Header/>
            <Timer/>
            <Counter/>
        </div>
    )
}