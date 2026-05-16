export const initTitleMarquee = () => {
  let titleText = "Pratik Lohani - Full Stack Developer Portfolio. Applied Computer Science Student at Howest. | ";
  let intervalId: number | null = null;

  const startMarquee = () => {
    if (intervalId) return;
    intervalId = window.setInterval(() => {
      titleText = titleText.substring(1) + titleText[0];
      document.title = titleText;
    }, 300);
  };

  const stopMarquee = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopMarquee();
      document.title = "Why did you leave?";
    } else {
      startMarquee();
    }
  });

  startMarquee();
};
