

const Navbar = () => {
    const navArr = ["About", "Why LittleBites", "Features", "Pricing", "FAQ", "Blog", "Contact us","Cart"];
  
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-title">
            <h1>Little <span>Bites</span></h1>
        </div>
  <div className="navbar-links">
    <ul>
      {navArr.map((arr, index) => (
        <li key={index}><a href="#">{arr}</a></li>
      ))}
    </ul>
  </div>
  <div className="navbar-button">
    <button>Request a Demo</button>
  </div>
</div>
      </>
    );
  };
  
  export default Navbar;
  