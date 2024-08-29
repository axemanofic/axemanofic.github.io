import './styles/styles.sass'


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
  console.log(theme, "jopa")
  if (theme === 'dark') {
    console.log(colors.dark[0])
    return colors.dark[Math.floor(Math.random() * colors.dark.length)];
  } else {
    return colors.light[Math.floor(Math.random() * colors.light.length)];
  }
}

const social_links = document.querySelectorAll('.profile__skills li')
const theme = getCurrentTheme()

social_links.forEach(element => {
  element.style.backgroundColor = setRandomColor(theme)
});
