// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-experience",
          title: "experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-handgantry",
          title: 'handGantry',
          description: "glove controlled gantry",
          section: "Projects",handler: () => {
              window.location.href = "/projects/golve_controlled_gantry/";
            },},{id: "projects-mobilegenius",
          title: 'mobileGenius',
          description: "robot run by an FPGA running a multimodal LLM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mobileGenius/";
            },},{id: "projects-power-on-touch",
          title: 'power-on-touch',
          description: "power-on-touch turns your hand into a wireless power source",
          section: "Projects",handler: () => {
              window.location.href = "/projects/power_on_touch/";
            },},{id: "projects-ratatouille",
          title: 'ratatouille',
          description: "solving micromouse with RL",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ratatouillle/";
            },},{id: "projects-electrickart",
          title: 'electricKart',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rc-electric-kart/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andre-de-la-cruz", "_blank");
        },
      },];
