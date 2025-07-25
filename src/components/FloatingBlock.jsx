export default function FloatingBlock({ position, id }) {
  return (
    <div className={`absolute ${position} cube cube-${id}`}>
      <div className="cube-inner">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
}