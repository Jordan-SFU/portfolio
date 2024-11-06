let project1 = {
    index: 0,
    name: "HireHigher",
    description: "An AI-powered job interview simulator!",
    image: "/hirehigher.png",
    tags: ["Javascript", "React", "Node.js", "OpenAI", "Django", "Python", "AWS"],
    expandedText:
        <div>
            <p>
                HireHigher is an AI-powered job interview simulator leveraging OpenAI's API, OCR, React, and Django!
                HireHigher reads your Resume, the job you want, your skills, and your Linkedin profile and generates questions
                tailored to the info you provide it. Our custom made AI-interviewer will simulate a real interview and take note
                of your answers, and provide feedback regarding your speech and other metrics! Our backend was hosted on AWS for
                further modularity. Our project ended up winning first place in Langara Hacks 2024!</p>
            <p>
                My role in this project involved working with the OCR API to extract text from resumes, and working with
                OpenAI's API to generate questions based on the extracted text. I also worked on the frontend, creating
                some of the UI and connecting it to the backend.
            </p>
        </div>,
    link: "https://devpost.com/software/hirehigher?ref_content=user-portfolio&ref_feature=in_progress",
    github: "https://github.com/Jordan-SFU/HireHigher",
    isVideo: false,
    award: ["1st Place Langara Hacks 2024"]
}

let project2 = {
    index: 1,
    name: "Infinite Chess",
    description: "A chess game with infinite possibilities!",
    image: "/infinitechess.PNG",
    tags: ["Javascript", "React", "Node.js", "OpenAI", "Express", "AWS"],
    expandedText:
        <div>
            <p>
                Infinite Chess is a solo passion project of mine inspired by Infinite-Craft on <a href="https://neal.fun/infinite-craft/" style={{ color: 'orange' }}>Neal.fun</a>.
                This is your standard game of chess, but your chesspieces are created on the fly completely from scratch using AI! The piece's movement and
                attack patterns, special traits, and even completely custom abilities like status effects and summoning are all modularly implemented
                for a fun and chaotic game. The game has online multiplayer functionality, and uses AWS for hosting.
            </p>
            <p>
                I used OpenAI's GPT-4o model to generate JSON files that describe the pieces following a specified format, and parsed that data to create the pieces.
                Express was used to create the server, and the frontend was made with React. The game is still in development, but I'm excited to see where it goes!
            </p>
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
            <p>
                ASLingo was made in 12 hours for nwhacks' beginner hackathon with a small group of me, and two others. My role in this project was working with MediaPipe
                to recognize hand gestures and positining, and Tensorflow to create a machine learning model that can identify ASL letters based on the MediaPipe data.
                I also worked on connecting this to our frontend to create a real-time translation tool.
            </p>
            <p>
                To train the model, I wrote a small script to continuously capture pictures of my laptop's webcam where I painstakingly performed all of the gestures
                myself for training data. I used MediaPipe to turn the images into arrays of numbers representing the position of my hands and fingers. With this,
                I could create a basic model with Tensorflow trained on these arrays, so that when I captured webcam data and converted that into arrays as well,
                I could get live predictions.
            </p>
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
            <p>
                Created as part of a capstone project, "Project Midas" is a 2D siderscroller autorunner created in Unity. I learned alot about physics programming
                using vector math, and familiarized myself with the Unity game engine.
            </p>
        </div>,
    link: "https://joodoon.itch.io/project-midas",
    github: "https://joodoon.itch.io/project-midas",
    isVideo: false
}




let projects = [project1, project2, project3, project4];

export default projects;