export default function Header() {
  const logo = "./assets/investment-calculator-logo.png";
  return (
    <header id="header">
      <img src={logo} alt="Invest Icon" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
