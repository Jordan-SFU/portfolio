let testProject = {
    index: 0,
    name: "Quackii",
    description: "A desktop pet powered by AI!",
    image: "/quackii.png",
    tags: ["Python", "JavaScript", "OpenAI"],
    link: "https://devpost.com/software/quackii",
    github: "https://github.com/pnotato/ducky"
}
  
let testProject2 = {
    index: 1,
    name: "WeCycle",
    description: "A mobile app for tracking your recycling habits!",
    image: "/wecycle.png",
    tags: ["Python", "Kivy", "JSON"],
    link: "https://devpost.com/software/wecycle-z937sr",
    github: "https://github.com/Jordan-SFU/WeCycle"
}
  
let testProject3 = {
    index: 2,
    name: "WFC Visualizer",
    description: "A visualizer for the Wave Function Collapse algorithm!",
    image: "/wfc.png",
    tags: ["Unity2D", "C#"],
    link: "https://joodoon.itch.io/wave-function-collapse-visualizer",
    github: "https://joodoon.itch.io/wave-function-collapse-visualizer"
}

let testProject4 = {
    index: 3,
    name: "ColrGuessr",
    description: "A fun game about guessing colors, utilizing the color API!",
    image: "/colrguessr.png",
    tags: ["Javascript", "P5js", "APIs"],
    expandedText: 
        <div>
            <p>This was another fun hackathon project, where we decided to make a fun game. The color API stores lots of information about each individual colour and their hex codes, and so we made a guessing game revolving around this endpoint. We started by choosing a random hexcode, and getting that colour's name using the API. Using p5js, we created a colour wheel and slider where the goal is to select the colour based on its name. With a colour selected, you can submit it, and using some colour math, we determine where the correct colour was on the wheel. If I were to revisit this project, I'd implement a point and scoring system to gameify this project even more.</p>
            <p>This project taught me alot about how to use different endpoints and APIs to enhance your project, and I found it really fun to make.</p>
        </div>,
    link: "https://colrguessrgame.netlify.app/",
    github: "https://github.com/Jordan-SFU/ColrGuessr"
}
  
let extraprojects = [testProject, testProject2, testProject3, testProject4];

export default extraprojects;