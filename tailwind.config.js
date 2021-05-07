const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: (theme) => ({
      primary: '#6C63FF',
      secondary: '#4a47a3',
      primarydark: '#0a1230',
      // background: '#081845',
      // #1b3364, #191a35, #182339, cool --> #0a1230'
      // background: '#a0aec0',
      // main --> background: '#f8f9fb',
      // background: '#e8eefc',
      background: '#f8f9fb',
      // #f7faff
      secondBackground: '#e8f1ff',
      // main background - #f8f9fb
      // main secondary - #0a1230
      linkBackground: '#f0f0f5',
      // linkBackground: '#e4e4eb',
      gray: '#a0aec0',
      white: '#fcfefe',
      tester: '#f7f7f7',
      red: '#ff4b5c',
      remove: '#fc573b',
      check: '#0AFF00',
      placeholder: '#BEBEBE',
      // SLIDER
      first: '#A8A3FF',
      second: '#9791FF',
      third: '#847DFF',
      five: '#524CC2',
      six: '#3C388F',
      seven: '#292661',
    }),
    // inset: {
    //   '72.5': '72.5%',
    //   '1': '1%'
    // },
    fontFamily: {
      sans: ['Comfortaa', ...defaultTheme.fontFamily.sans],
    },
    gridTemplateColumns: {
      '80px': '80px 1fr',
      btns: '1fr 1fr',
      '1frr': '1fr',
      '1fr': '1fr 1fr',
      '2fr': '1fr 1fr',
      '3fr': '1fr 1fr 1fr',
      '4fr': '1fr 1fr 1fr 1fr',
      '5fr': '1fr 1fr 1fr 1fr 1fr',
      '6fr': '1fr 1fr 1fr 1fr 1fr 1fr',
      '7fr': '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      '8fr': '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      '12fr': '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      businessSmall: '1fr 220px',
      business: '1fr 240px',
      businessMedium: '1fr 280px',
      projectMembers: '28% 28% 28% 16%',
    },
    gridTemplateRows: {
      '1fr': '1fr',
      '2fr': '1fr 1fr',
      '3fr': '1fr 1fr 1fr',
      '5fr': '1fr 1fr 1fr 1fr 1fr',
      '6fr': '1fr 1fr 1fr 1fr 1fr 1fr',
    },
    maxWidth: {
      beloweSm: '260px',
      smContainer: '380px',
      nameContainer: '460px',
      loginContainer: '490px',
      mdContainer: '520px',
      lgContainer: '760px',
      xlContainer: '920px',
      xxlContainer: '1060px',
      normalContainer: '1220px',
      normalModalContainer: '850px',
      // starter modal
      mdStarter: '680px',
      // business plan
      bpContainer: '1020px',
      // Competitors
      xxlContainerBreak: '620px',
      xlContainerBreak: '480px',
      QHD: '2000px',
      // '4K': '3200px',
    },
    screens: {
      ...defaultTheme.screens,
      normal: '1800px',
      xlContainer: '680px',
      xxlContainer: '920px',
      normalContainer: '1180px',
      // Competitors
      ssmContainer: '365px',
      smContainer: '520px',
      mdContainer: '680px',
      lgContainer: '860px',
      lg1Container: '1280px',
      bigContainer: '1400px',
      big2Container: '1720px',
      big3Container: '1900px',
      QHD: '2550px',
      // '4k': '3800px',
      mobileEnd: '960px',
      screenSmall: '1120px',
      screenMedium: '1480px',
      screenLarge: '1720px',
    },
    extend: {
      height: (theme) => ({
        maxcontent: 'max-content',
      }),
    },
    // height: {
    //   ...defaultTheme.height,
    //   maxcontent: 'max-content'
    // }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
