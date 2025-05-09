let devProfile = {
    fullName: "Mercedes Lagardo",
    age: 26,
    profession: "Frontend Developer",
    skills: ["JavaScript", "Node.js", "HTML", "and CSS"],
    isEmployed: false,
    contact: {
    email: "mercedeslagardo@gmail.com",
    location: "Posadas"
    }
    };

    function introduceDev (profile) {
    let intro = `Hello! My name is ${profile.fullName}. `;
    intro += `I am a ${profile.profession}. `;
    intro += `I work with ${profile.skills.join(", ")}. `;
    intro += `I live in ${profile.contact.location}. `;
    intro += `I am ${profile.age} years old. `;
    intro += `You can reach me via email: ${profile.contact.email}. `;
    intro += profile.isEmployed
    ? "I am currently employed."
    : "I am currently looking for new opportunities.";
    return intro;
  }
  
  console.log(introduceDev(devProfile));
      