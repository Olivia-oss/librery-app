import svgError from "../../assets/error.svg";
export default function Error() {
  return (
    <div className="error">
      <img src={svgError} width={400} />
      <p>Ocurrio un error vuelva a intentar mas tarde</p>
    </div>
  );
}
