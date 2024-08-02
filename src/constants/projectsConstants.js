let testText = "Lorem ipsum odor amet, consectetuer adipiscing elit. Elit facilisi nulla mus diam fusce tempus. Rutrum sodales conubia nullam suspendisse, sociosqu quis malesuada. Varius fringilla egestas vivamus dapibus mollis senectus congue tempus. Amet augue torquent litora maecenas ac elit nibh. Potenti nibh feugiat nascetur facilisis bibendum aptent est ad. Consequat dis nostra tempor vulputate laoreet ridiculus nunc semper. Scelerisque penatibus varius aptent elementum venenatis consectetur volutpat posuere. Taciti ac metus quam faucibus felis vestibulum imperdiet risus. Elementum molestie fusce eleifend; donec torquent porttitor dignissim. Bibendum morbi aliquet proin suspendisse tristique dignissim bibendum ullamcorper. Ultrices lobortis sapien accumsan mattis eros inceptos. Nunc porta justo ullamcorper gravida turpis dignissim aliquam proin euismod. Nunc posuere commodo commodo congue et molestie. Rutrum phasellus leo faucibus id commodo lacus dictumst malesuada. Pretium porta maximus varius; consectetur sociosqu ad donec. Pretium vestibulum nisl hendrerit sem varius libero lectus nostra. Habitasse senectus class nibh pharetra vestibulum nunc volutpat montes. Egestas curabitur semper convallis taciti congue tempor tempor dignissim. Vulputate integer auctor faucibus taciti cubilia elementum platea arcu. Nunc fames venenatis sapien fermentum etiam conubia viverra fusce. Accumsan conubia facilisis dui pretium; id dui porta primis. Senectus magna nostra etiam est congue per sollicitudin sit. Ex ligula felis taciti vel hendrerit luctus.";

let testProject = {
    index: 0,
    name: "Project: Midas",
    description: "An action-packed 2D platforming game created in Unity!",
    image: "/midas.png",
    tags: ["C#", "Unity2D"],
    expandedText: 
        <div>
            <p>{testText}</p>
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
            <p>{testText}</p>
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
            <p>{testText}</p>
        </div>,
    link: "https://colrguessrgame.netlify.app/",
    github: "https://github.com/Jordan-SFU/ColrGuessr"
}
  
let projects = [testProject, testProject2, testProject3]

export default projects;