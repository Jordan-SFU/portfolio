let testProject = {
    index: 0,
    name: "Project: Midas",
    description: "An action-packed 2D platforming game created in Unity!",
    image: "/midas.png",
    tags: ["C#", "Unity2D"],
    expandedText: 
        <div>
            <p><img src="/midas.png" width='600px' height='400px' alt=''></img>Created as part of my capstone project, "Project Midas" is a 2D siderscroller autorunner where timing and precision is key.</p>
        </div>,
    link: "https://joodoon.itch.io/project-midas",
    github: "https://joodoon.itch.io/project-midas"
}
  
let testProject2 = {
    index: 1,
    name: "ASLingo",
    description: "An online translator for American Sign Language using machine learning!",
    image: "/aslingo.png",
    tags: ["Python", "TensorFlow", "MediaPipe"],
    expandedText: 
        <div>
            <p><img src="/aslingo.png" width='600px' height='400px' alt=''></img>ASLingo was made in 12 hours for nwhacks' beginner hackathon. My role in this project was working with MediaPipe to recognize hand gestures and positining, and Tensorflow to create a machine learning model that can identify ASL letters based on the MediaPipe data. I also worked on connecting this to our frontend to create a real-time translation tool. </p>
            <p>To train the model, I wrote a small script to continuously capture pictures of my laptop's webcam where I painstakingly performed all of the gestures myself for training data. I used MediaPipe to turn the images into arrays of numbers representing the position of my hands and fingers. <img src="/mediapipe.png" width='200px' height='200px' alt=""></img> With this, I could create a basic model with Tensorflow trained on these arrays, so that when I captured webcam data and converted that into arrays as well, I could get live predictions.</p>
        </div>,
    link: "https://devpost.com/software/aslingo-3yi1vd",
    github: "https://github.com/Jordan-SFU/ASLingo"
}
  
let testProject3 = {
    index: 2,
    name: "ColrGuessr",
    description: "A fun game about guessing colors, utilizing the color API!",
    image: "/colrguessr.png",
    tags: ["Javascript", "P5js", "APIs"],
    expandedText: 
        <div>
            <p><img src="/colrguessr.png" width='600px' height='400px' alt=''></img>This was another fun hackathon project, where we decided to make a fun game. The color API stores lots of information about each individual colour and their hex codes, and so we made a guessing game revolving around this endpoint. We started by choosing a random hexcode, and getting that colour's name using the API. Using p5js, we created a colour wheel and slider where the goal is to select the colour based on its name. With a colour selected, you can submit it, and using some colour math, we determine where the correct colour was on the wheel. If I were to revisit this project, I'd implement a point and scoring system to gameify this project even more.</p>
            <p>This project taught me alot about how to use different endpoints and APIs to enhance your project, and I found it really fun to make.</p>
        </div>,
    link: "https://colrguessrgame.netlify.app/",
    github: "https://github.com/Jordan-SFU/ColrGuessr"
}
  
let projects = [testProject, testProject2, testProject3]

export default projects;