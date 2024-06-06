let testProject = {
    index: 0,
    name: "Test Project",
    description: "This is a test project, containing placeholder text and an image. A longer description will be added in the future.",
    image: "https://placehold.co/600x400",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    expandedText: 
        <div>
            <h1>hmm...</h1>
            <p>testing react stuff</p>
            <img src="https://placehold.co/100" alt="placeholder" />
        </div>,
    link: "https://en.wikipedia.org/wiki/Duck",
    github: "https://en.wikipedia.org/wiki/Cow"
}
  
let testProject2 = {
    index: 1,
    name: "Test Project 2",
    description: "This is another test project, containing placeholder text and an image. A longer description will be added in the future.",
    image: "https://placehold.co/600x400",
    tags: ["Python", "JavaScript", "C#"],
    expandedText: "This is a test of the expanded text, version 2",
    link: "https://en.wikipedia.org/wiki/Duck",
    github: "https://en.wikipedia.org/wiki/Cow"
}
  
let testProject3 = {
    index: 2,
    name: "Another test",
    description: "more tests, containing placeholder text and an image. A longer description will be added in the future.",
    image: "https://placehold.co/600x400",
    tags: ["Python", "aaaaa", "more tags"],
    expandedText: "This is a test of the expanded text, version 3",
    link: "https://en.wikipedia.org/wiki/Duck",
    github: "https://en.wikipedia.org/wiki/Cow"
}
  
let extraprojects = [testProject, testProject2, testProject3]

export default extraprojects;