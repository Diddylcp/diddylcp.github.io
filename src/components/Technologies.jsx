import { useAnimateOnScroll } from "./Animator";
import TechIcon from "./TechIcon";

function Technologies() {
  const technologies = [
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Lua", icon: "devicon-lua-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "MySQL", icon: "devicon-mysql-original colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Jira", icon: "devicon-jira-plain colored" },
    { name: "Unity", icon: "devicon-unity-plain colored" },
    { name: "Unreal Engine", icon: "devicon-unrealengine-original" },
  ];

  const tech = useAnimateOnScroll("animate__fadeInLeft");

  const splitTechnologies = (techs) => {
    const rows = [];

    rows.push(techs.slice(0, 6)); // Lenguajes
    rows.push(techs.slice(6)); // Programas

    return rows;
  };

  return (
    <section
      id="technologies"
      ref={tech.ref}
      className={`container justify-content-center align-items-center  py-5 animate__animated ${
        tech.visible ? tech.animation : ""
      }`}
    >
      <h2 className="text-white text-center mb-5">Tecnologias</h2>

      {splitTechnologies(technologies).map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="row border border-white rounded align-items-center g-4 my-4"
        >
          {row.map((tech, index) => (
            <TechIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              delay={(rowIndex * 4 + index) * 70}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Technologies;
