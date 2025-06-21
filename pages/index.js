import About from "./about";
import Headers from "../components/Header";
import Timer from "../components/Timer";

export default function Home() {
    return(
        <div>
            <Headers/>
            <Timer/>
            <About/>
        </div>
    )
}