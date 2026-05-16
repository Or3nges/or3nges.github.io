export const initTitleMarquee = () => {
  let titleText = "Pratik Lohani - Full Stack Developer Portfolio. Applied Computer Science Student at Howest. | ";
  setInterval(() => {
    titleText = titleText.substring(1) + titleText[0];
    document.title = titleText;
  }, 300);
};
