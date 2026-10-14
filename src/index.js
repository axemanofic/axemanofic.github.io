import './styles/styles.sass'
import person from './person.json'


const colors = {
  dark: [
    "#f5e0dc",
    "#f2cdcd",
    "#f5c2e7",
    "#cba6f7",
    "#f38ba8",
    "#eba0ac",
    "#fab387",
    "#f9e2af",
    "#a6e3a1",
    "#94e2d5",
    "#89dceb",
    "#74c7ec",
    "#89b4fa",
    "#b4befe",
  ],
  light: [
    "#dc8a78",
    "#dd7878",
    "#ea76cb",
    "#8839ef",
    "#d20f39",
    "#e64553",
    "#fe640b",
    "#df8e1d",
    "#40a02b",
    "#179299",
    "#04a5e5",
    "#209fb5",
    "#1e66f5",
    "#7287fd",
  ]
}

function getCurrentTheme() {
  const is_dark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return is_dark ? 'dark' : 'light'
}

function setRandomColor(theme) {
  if (theme === 'dark') {
    return colors.dark[Math.floor(Math.random() * colors.dark.length)];
  } else {
    return colors.light[Math.floor(Math.random() * colors.light.length)];
  }
}

function populateProfile() {
  document.querySelector('.profile__title').textContent = person.name;
  document.querySelector('.profile__position').textContent = person.position;
  const emailLink = document.querySelector('.profile__link_mail');
  if (emailLink) emailLink.href = `mailto:${person.email}`;
  const tgLink = document.querySelector('.profile__link_tg');
  if (tgLink) tgLink.href = person.telegram;
  const ghLink = document.querySelector('.profile__link_gh');
  if (ghLink) ghLink.href = person.github;
  const liLink = document.querySelector('.profile__link_linkedin');
  if (liLink) liLink.href = person.linkedin;
  const aboutEl = document.querySelector('.profile__about');
  if (aboutEl) aboutEl.textContent = person.about;
  const skillsUl = document.querySelector('.profile__skills');
  if (skillsUl) {
    skillsUl.innerHTML = '';
    person.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsUl.appendChild(li);
    });
  }
}
populateProfile();

const theme = getCurrentTheme();
const social_links = document.querySelectorAll('.profile__skills li')

social_links.forEach(element => {
  element.style.backgroundColor = setRandomColor(theme)
});
