import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="bp-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
        </div>
        <br />
        <p className="text-xl">
          Fresh out of California State University (CSU), I'm a highly motivated programmer eager to dive into the exciting world of tech! My passion for coding was ignited during my studies, where I honed my skills in various programming languages and frameworks.
        </p>
        <br />
        <p className="text-xl">
          I'm a quick learner with a strong foundation in Data Analysis, Web frameworks, functional programming, Object oriented programming, and Data structures.
        </p>
        <br />
        <p className="text-xl">
          Beyond coding, I'm a modest guitar player who love playing in live settings, this has taught me more than anything how to adapt to changes and mesh well with any team.
        </p>
        <br />
        <p className="text-xl">
          I'm always looking for new challenges and opportunities to learn. Let's connect and discuss how I can contribute to your team!
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
