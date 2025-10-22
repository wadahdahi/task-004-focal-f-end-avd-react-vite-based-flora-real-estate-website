// SCROLL TO MIDDLE WHEN CLICK
const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
export default handleCardClick;
