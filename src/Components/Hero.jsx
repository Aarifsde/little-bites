import phoneImage from '../assets/hand-phone-image.png'
import driver from '../assets/driver-image.svg'
import foodimg from '../assets/food-image.png'


const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          Create Your Own <br />
          <span className="highlight">Mobile Food Ordering App</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
        </p>
        <button className="cta-button">
          Talk to Our Expert Now ➜
        </button>
      </div>

      <div className="hero-image">
        <img src={phoneImage} alt="Hand holding phone" className="phone-image" />
        <img src={driver} alt="Delivery Driver" className="driver-image" />
        <img src={foodimg} alt="Food" className="food-image" />
      </div>
    </section>
  );
};

export default Hero;
