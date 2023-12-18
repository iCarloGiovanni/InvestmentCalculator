import logo from '/investment-calculator-logo.png'

const Header = () => {
  return (
    <div id='header'>
        <img src={logo} alt="bag full of money" />
        <h1>React Investment Calculator</h1>
    </div>
  )
}

export default Header