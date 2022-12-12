let html = document.querySelector('html');
let btnChangeTheme = document.querySelector('#change-theme');

const themes = {
  primary: {
   mainBg:'hsl(222, 26%, 31%)',
   displayBg: 'hsl(224, 36%, 15%)',
   keyboardBg: 'hsl(223, 31%, 20%)',
   textColor:'white',
   textColorCalc: 'white',
   textColorKeys: 'hsl(221, 14%, 31%)',
   keyBg: 'hsl(30, 25%, 89%)',
   keyCalcBg: 'hsl(6, 63%, 50%)',
   keyBgDel: 'hsl(225, 21%, 49%)',
   keyBorder: 'hsl(224, 28%, 35%)'
  },

  secondary: {
    mainBg:'hsl(0, 0%, 90%)',
    displayBg: 'hsl(0, 0%, 93%)',
    keyboardBg: 'hsl(0, 5%, 81%)',
    textColor:'hsl(60, 10%, 19%)',
    textColorCalc: 'white',
    textColorKeys: 'hsl(60, 10%, 19%)',
    keyBg: 'hsl(30, 25%, 89%)',
    keyCalcBg: 'hsl(25, 98%, 40%)',
    keyBgDel: 'hsl(185, 42%, 37%)',
    keyBorder: 'hsl(35, 11%, 61%)'
  },

  tertiary: {
    mainBg:'hsl(268, 75%, 9%)',
    displayBg: 'hsl(268, 71%, 12%)',
    keyboardBg: 'hsl(268, 71%, 12%)',
    textColor:' hsl(52, 100%, 62%)',
    textColorCalc: 'dark',
    textColorKeys: 'hsl(52, 100%, 62%)',
    keyBg: 'hsl(281, 89%, 26%)',
    keyCalcBg: 'hsl(176, 100%, 44%)',
    keyBgDel: ' hsl(290, 70%, 36%)',
    keyBorder: 'none'
  },

}

window.addEventListener('load', ()=> {
  let theme =  localStorage.getItem('theme');
   if(theme == 'secondary') {
    btnChangeTheme.value = 1;
    setTheme(theme);
  }

  if(theme == 'primary') {
    btnChangeTheme.value = 2;
    setTheme(theme);
  }

  if(theme == 'tertiary') {
    btnChangeTheme.value = 3;
    setTheme(theme);
  }
})

function setTheme(newTheme){
  const themeColors = themes[newTheme];

  Object.keys(themeColors).map(key=>{
    html.style.setProperty(`--${key}`,` ${themeColors[key]}`);
  })
  localStorage.setItem('theme', newTheme);
}

btnChangeTheme.addEventListener('change', ({target}) => {
  if(target.value == 1) {
    setTheme('secondary');
  }

  if(target.value == 2) {
    setTheme('primary');
  }

  if(target.value == 3) {
    setTheme('tertiary');
  }
});