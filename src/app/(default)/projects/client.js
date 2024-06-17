'use client'
import Card from "@/components/pcard/card"
import styles from './projects.module.scss'
//import { faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
//import { faReact, faJs, faHtml5, faCss3, faPython , faWordpress} from "@fortawesome/free-brands-svg-icons";
// {[{ tag: '#React', color: 'red' }, { tag: '#JS', color: 'red' }, { tag: '#JS', color: 'red' }, { tag: '#JS', color: 'red' }, { tag: '#JS', color: 'red' }, { tag: '#JS', color: 'red' }]}

export default function Client({ courses, pageInfo }) {

    let cardItems = [];

    cardItems.push(
        <Card
            key={12}
            title={"Webframe"}
            tags={[
                { tag: '#HTML', color: 'black' },
                { tag: '#JS', color: 'black' },
                { tag: '#CSS', color: 'black' },
                { tag: '#MV3', color: 'black' }
            ]}
            img={"/previews/webframe.png"}
            body={"Extension that outlines HTML elements without affecting the layout to inspect websites and debug CSS"}
            link={"https://github.com/maxontech/outline-html-elements"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={11}
            title={"Twitter (X) Font Editor"}
            tags={[
                { tag: '#HTML', color: 'black' },
                { tag: '#JS', color: 'black' },
                { tag: '#CSS', color: 'black' },
                { tag: '#MV3', color: 'black' }
            ]}
            img={"/previews/x-font-editor.png"}
            body={"Google Chrome Extension that Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ Fonts on Twitter X Posts by making use of Unicode characters"}
            link={"https://github.com/maxontech/twitter-font-editor"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={10}
            title={"Click to Copy"}
            tags={[
                { tag: '#HTML', color: 'black' },
                { tag: '#CSS', color: 'black' },
                { tag: '#JQuery', color: 'black' },
                { tag: '#MV3', color: 'black' }
            ]}
            img={"/previews/click-to-copy.png"}
            body={"Google Chrome Extension that allows you to selectively Copy Text, Urls, and CSS with one Click"}
            link={"https://github.com/maxontech/click-to-copy"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={9}
            title={"GitPro"}
            tags={[
                { tag: '#HTML', color: 'black' },
                { tag: '#TailwindCSS', color: 'black' },
                { tag: '#JS', color: 'black' },
                { tag: '#GitHubActions', color: 'black' },
            ]}
            img={"/previews/gitpro.png"}
            body={"Showcase website for unique and beautiful GitHub profiles that is fully automated using GitHub Actions"}
            link={"https://maxontech.github.io/best-github-profile-readme/"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={8}
            title={"LinkedIn Font Editor"}
            tags={[
                { tag: '#HTML', color: 'black' },
                { tag: '#CSS', color: 'black' },
                { tag: '#JS', color: 'black' },
                { tag: '#JQuery', color: 'black' },
            ]}
            img={"/previews/linkedin-font-editor.png"}
            body={"Google Chrome Extension that Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ Fonts on LinkedIn Posts"}
            link={"https://maxontech.io/linkedin-font-editor"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={7}
            title={"LandingHero"}
            tags={[
                { tag: '#React', color: 'black' },
                { tag: '#JSX', color: 'black' },
                { tag: '#Puppeteer', color: 'black' },
            ]}
            img={"/previews/landinghero.png"}
            body={"Automated Website to Showcase Beautiful Landing Pages for Startups and Businesses"}
            link={"https://landing-page-design-examples.vercel.app/"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={6}
            title={"NEFT Flappy Bird"}
            tags={[
                { tag: '#Python', color: 'black' },
                { tag: '#PyGame', color: 'black' }
            ]}
            img={"/previews/neft-flappy-bird.png"}
            body={"Neuroevolution with Fixed Topologies (NEFT) implemented in the Flappy Bird without using any Machine Learning Libraries"}
            link={"https://github.com/maxontech/neft-flappy-bird"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={5}
            title={"Drive AI"}
            tags={[
                { tag: '#Python', color: 'black' },
                { tag: '#PyGame', color: 'black' }
            ]}
            img={"/previews/drive-ai.png"}
            body={"Neuroevolution with Augmenting Topologies (NEFT) implemented in a Self-Driving Car Simulation"}
            link={"https://github.com/maxontech/DriveAI"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={4}
            title={"NEAT Chrome Dinosaur"}
            tags={[
                { tag: '#Python', color: 'black' },
                { tag: '#PyGame', color: 'black' }
            ]}
            img={"/previews/neat-chrome-dinosaur.png"}
            body={"Neuroevolution with Augmenting Topologies (NEAT) implemented in Chrome Dinosaur Game"}
            link={"https://github.com/maxontech/neat-chrome-dinosaur"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={3}
            title={"Pathfinding Visualizer"}
            tags={[
                { tag: '#Python', color: 'black' },
                { tag: '#PyGame', color: 'black' }
            ]}
            img={"/previews/dijkstra-pathfinding.png"}
            body={"Simple Pathfinding Visualizer using the BFS Algorithm"}
            link={"https://github.com/maxontech/breadth-first-search"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={2}
            title={"Programming Courses"}
            tags={[
                { tag: '#Diverse', color: 'black' },
            ]}
            img={"/previews/programming-courses.png"}
            body={"Programming tutorial write ups to teach myself and others about Python, JavaScript, and more"}
            link={"/courses/"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={1}
            title={"Space Game"}
            tags={[
                { tag: '#Unity', color: 'black' },
            ]}
            img={"/previews/space-game.png"}
            body={"A nice game I made in Unity using C# to learn about game development"}
            link={"https://www.youtube.com/watch?v=9E7egB7CXJY"} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />,

        <Card
            key={0}
            title={"Ph.D. Thesis"}
            tags={[
                { tag: '#University', color: 'black' },
            ]}
            img={"/previews/phd-thesis.png"}
            body={"Analysis of infromation acquisition and financial reporting in a setting where a manager attempts to meet analysts' expectations"}
            link={"https://depositonce.tu-berlin.de/items/8c88bfbe-b338-42b7-a6fa-ab5093f59dc4"} 
        />



    )

    return (
        <>


            <div className={styles.container}>

                <h1 className={styles.title}>Projects</h1>

                <h4 className={styles.subtitle}>My Portfolio of Learning Projects </h4>

                <div className={styles.cards}>

                    {cardItems}

                </div>

            </div>

        </>

    )

}


