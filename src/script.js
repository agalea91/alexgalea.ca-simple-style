const about = document.getElementById("about-btn");
const experience = document.getElementById("experience-btn");
const portfolio = document.getElementById("portfolio-btn");

const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");

const aboutSection = document.getElementById("about");
const experienceSection = document.getElementById("experience");
const portfolioSection = document.getElementById("portfolio");

const personalInfo = document.getElementById("personal-info");

const bike1 = document.getElementById("bike1");
const bike2 = document.getElementById("bike2");

function btnClick(e) {
  about.classList.remove("blue-line");
  experience.classList.remove("blue-line");
  portfolio.classList.remove("blue-line");

  menuItem1.classList.remove("active-bg");
  menuItem2.classList.remove("active-bg");
  menuItem3.classList.remove("active-bg");

  aboutSection.classList.add("display-none");
  experienceSection.classList.add("display-none");
  portfolioSection.classList.add("display-none");

  aboutSection.classList.remove("display-block");
  experienceSection.classList.remove("display-block");
  portfolioSection.classList.remove("display-block");

  if (e === "about") {
    about.classList.add("blue-line");
    menuItem1.classList.add("active-bg");
    aboutSection.classList.add("display-block");
    personalInfo.classList.remove("small-header");
  } else if (e === "experience") {
    experience.classList.add("blue-line");
    menuItem2.classList.add("active-bg");
    experienceSection.classList.add("display-block");
    personalInfo.classList.add("small-header");
  } else if (e === "portfolio") {
    portfolio.classList.add("blue-line");
    menuItem3.classList.add("active-bg");
    portfolioSection.classList.add("display-block");
    personalInfo.classList.add("small-header");
  }
}
