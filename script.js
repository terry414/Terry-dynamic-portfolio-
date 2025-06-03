// Show current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Skill button interaction
const skills = {
  HTML: "HTML is the structure of web pages.",
  CSS: "CSS makes your pages look beautiful.",
  JavaScript: "JavaScript adds interactivity to your web pages."
};

document.querySelectorAll('.skill-btn').forEach(button => {
  button.addEventListener('click', () => {
    const skill = button.getAttribute('data-skill');
    document.getElementById("skill-description").textContent = skills[skill];
  });
});

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Load projects from JSON
async function loadProjects() {
  try {
    const res = await fetch("data/portfolio_items.json");
    const projects = await res.json();
    const container = document.getElementById("projects-container");

    projects.forEach(project => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.link}" target="_blank">View</a>`;
      container.appendChild(div);
    });
  } catch (e) {
    console.error("Error loading projects", e);
  }
}

loadProjects();