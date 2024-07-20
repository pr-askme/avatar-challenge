import "./App.css";

function App() {
  const skills = [
    { name: "HTML/CSS", color: "red", level: "👌" },
    { name: "Javascript", color: "blue", level: "🤓" },
    { name: "React", color: "green", level: "👶" },
    { name: "Git & GitHub", color: "yellow", level: "👶" },
  ];
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="priya_dp.jpg" alt="my-photo" />;
}

function Intro() {
  return (
    <>
      <h1>Priya S</h1>
      <p>
        Front-end Developer; love to build communities. I love to play
        Basketball & do Yoga in my free time. My favourite female-gazey shows
        are "Desperate Housewives", "The Good wife"!
      </p>
    </>
  );
}

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.name} color={skill.color} level={skill.level} />
      ))}
    </ul>
  );
}

function Skill({ name, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {name} {level}
    </li>
  );
}

export default App;
