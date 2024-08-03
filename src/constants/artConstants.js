let artProject1 = {
    index: 0,
    name: "3D Character Sculpt",
    description: "A high poly textured sculpt of a character!",
    video: "/Pippin_Turntable.mov",
    tags: ["Blender", "High Poly", "Sculpting"],
    expandedText: 
        <div>
            <video src='/Pippin_Turntable.mov' width='600px' height='400px' alt='' autoPlay loop muted></video>
            <video src='/Pippin_Headshot_Turntable.mov' width='600px' height='400px' alt='' autoPlay loop muted></video>
        </div>,
}

let artProject2 = {
    index: 1,
    name: "BD-1 Rig",
    description: "An animation ready rigged droid from Starwars!",
    video: "/BD-1 Walking.mov",
    tags: ["3DS Max", "Rigging", "Materials"],
    expandedText: 
        <div>
            <video src='/BD-1 Walking.mov' width='600px' height='400px' alt='' autoPlay loop muted></video>
            <video src='/BD-1 Jumping.mov' width='600px' height='400px' alt='' autoPlay loop muted></video>
            <video src='/IMG_2164.mov' width='600px' height='400px' alt='' autoPlay loop muted></video>
        </div>,
}

let artProject3 = {
    index: 2,
    name: "Rubber Duck Debugging",
    description: "A short film about rubber duck debugging!",
    video: "/bouncing duck.mp4",
    tags: ["Maya", "Animation", "Rigging"],
    expandedText: 
        <div>
            <video src='/bouncing duck.mp4' width='600px' height='400px' alt='' autoPlay loop muted></video>
            <a href='https://www.youtube.com/watch?v=la3_uyoUlGk'>Link to full video</a>
        </div>,
}

let art = [artProject1, artProject2, artProject3];

export default art;