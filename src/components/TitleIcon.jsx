import grid from "../media/icons/grid.png";

function TitleIcon({ title }) {
  return (
    <div className="h-fit w-fit">
      <div className="w-fit h-fit relative ml-7">
        <img src={grid} alt="grid pattern" className="w-14 lg:w-20 absolute -top-1/2 -left-7 lg:-left-10 lg:-translate-y-2 opacity-40" />
        <div className="font-spartan text-white text-5xl lg:text-6xl">{title}</div>
      </div>
    </div>
  );
}

export default TitleIcon;
