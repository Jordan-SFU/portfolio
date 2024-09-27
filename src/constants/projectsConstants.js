let project1 = {
    index: 0,
    name: "HireHigher",
    description: "An AI-powered job interview simulator!",
    image: "/hirehigher.png",
    tags: ["Javascript", "React", "Node.js", "OpenAI", "Django", "Python", "AWS"],
    expandedText:
        <div>
            <p>1st place winner of Langara Hacks 2024!</p>
        </div>,
    link: "https://devpost.com/software/hirehigher?ref_content=user-portfolio&ref_feature=in_progress",
    github: "https://github.com/Jordan-SFU/HireHigher",
    isVideo: false,
    award: ["1st Place Langara Hacks 2024"]
}

let project2 ={
    index: 1,
    name: "Infinite Chess",
    description: "A chess game with infinite possibilities!",
    image: "/infinitechess.PNG",
    tags: ["Javascript", "React", "Node.js", "OpenAI", "Express", "AWS"],
    expandedText:
        <div>
            <p></p>
        </div>,
    link: "https://github.com/Jordan-SFU/Infinite-Chess",
    github: "https://github.com/Jordan-SFU/Infinite-Chess",
    isVideo: false
}

let project3 = {
    index: 2,
    name: "ASLingo",
    description: "An online translator for American Sign Language using machine learning!",
    image: "/aslingo.png",
    tags: ["Python", "TensorFlow", "MediaPipe", "Javascript"],
    expandedText: 
        <div>
            <p>ASLingo was made in 12 hours for nwhacks' beginner hackathon. My role in this project was working with MediaPipe to recognize hand gestures and positining, and Tensorflow to create a machine learning model that can identify ASL letters based on the MediaPipe data. I also worked on connecting this to our frontend to create a real-time translation tool. </p>
            <p>To train the model, I wrote a small script to continuously capture pictures of my laptop's webcam where I painstakingly performed all of the gestures myself for training data. I used MediaPipe to turn the images into arrays of numbers representing the position of my hands and fingers. With this, I could create a basic model with Tensorflow trained on these arrays, so that when I captured webcam data and converted that into arrays as well, I could get live predictions.</p>
        </div>,
    link: "https://devpost.com/software/aslingo-3yi1vd",
    github: "https://github.com/Jordan-SFU/ASLingo",
    isVideo: false
}

let project4 = {
    index: 3,
    name: "Project: Midas",
    description: "An action-packed 2D platforming game created in Unity!",
    image: "/midas.png",
    tags: ["C#", "Unity2D"],
    expandedText: 
        <div>
            <p>Created as part of my capstone project, "Project Midas" is a 2D siderscroller autorunner where timing and precision is key. I learned alot about physics programming and working with Unity to create a fun experience.</p>
        </div>,
    link: "https://joodoon.itch.io/project-midas",
    github: "https://joodoon.itch.io/project-midas",
    isVideo: false
}



  
let projects = [project1, project2, project3, project4];

export default projects;