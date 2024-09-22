import svgEmpty from "../../assets/empty.svg";
export default function NotResult() {
  return (
    <div className="error">
      <img src={svgEmpty} width={300} />
      <p>No se encontro ningun resultado</p>
    </div>
  );
}
