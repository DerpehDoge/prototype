import Typewriter from "typewriter-effect";
import Link from "next/link";
import Tooltip from "@material-ui/core/Tooltip";

export default function Egg() {
    return (
        <>
            <h1 className="text-blue-300 text-3xl">Water.</h1>
            <div className="text-l mt-5 text-center">
                <h1>Water is found all around us.</h1>
                <h1>From the seas and lakes, from the food we eat,</h1>
                <h1>from the sky, on tap, and even from the air.</h1>
                <br />
                <h1>It is vital to all life.</h1>
                <h1>However, some people may not have access to water.</h1>
                <h1> Others have it and abuse it.</h1>
                <h1>
                    <Tooltip
                        interactive
                        title={
                            <a
                                href="https://www.cdc.gov/healthywater/global/wash_statistics.html#:~:text=An%20estimated%201.8%20billion%20people,access%20to%20adequate%20sanitation%2015."
                                target="_blank"
                            >
                                Global WASH Fast Facts. 2021,
                                www.cdc.gov/healthywater/global/wash_statistics.html#:~:text=An%20estimated%201.8%20billion%20people,access%20to%20adequate%20sanitation%2015..
                                Accessed 24 Mar. 2021. ‌
                            </a>
                        }
                    >
                        <h1 className="text-yellow-100 inline">
                            1.8 billion people
                        </h1>
                    </Tooltip>{" "}
                    don't have access to clean water.
                </h1>
                <br />
                <h1>On that note, let's keep going.</h1>
            </div>
            <br />
            <Link href="shower">
                <a class="text-green-300 transform hover:scale-125 transition ease-out duration-200">
                    sure, let's keep going
                </a>
            </Link>
        </>
    );
}
