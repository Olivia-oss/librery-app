export default function Footer() {
  const handleOpenPage = () => {
    window.location.href = "https://github.com/Olivia-oss/librery-app";
  };
  return (
    <div className="footer">
      <hr />
      <label onClick={handleOpenPage}>Github</label>
    </div>
  );
}
