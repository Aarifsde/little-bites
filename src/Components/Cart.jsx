import cmob from '../assets/cart-mob.png'
import cimg from '../assets/cart-img1.png'

const Cart = () => {
  return (
    <>
       <div className="cartwrap">
        <div className='htag'>
            <h1>Our Unique App Features</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum veniam molestiae, deserunt quia voluptatum aspernatur eveniet distinctio reprehenderit vero.
            </p>
        </div>
        <div className="cart-grid">
         <div className="rightCon">
            <div className='hovercls'>
                <div>
                    <img className='cimg' src={cimg} alt="" />
                </div>
                <h2 style={{color:"green"}}>Simple Business Dashboard</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque optio alias doloribus possimus! Nemo.</p>
            </div>
            <div>
                <div><img  className='cimg'  src={cimg} alt="" /></div>
                <h2>Simple Business Dashboard</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque optio alias doloribus possimus! Nemo.</p>
            </div>
            <div>
                <div>
                <img  className='cimg'  src={cimg} alt="" />
                </div>
                <h2>Simple Business Dashboard</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque optio alias doloribus possimus! Nemo.</p>
            </div>
         </div>
        
         <div className="leftCon">
            <div>
                <div>
                <img  className='cimg'  src={cimg} alt="" />
                </div>
                <h2>Simple Business Dashboard</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque optio alias doloribus possimus! Nemo.</p>
            </div>
            <div>
                <div>
                <img  className='cimg'  src={cimg} alt="" />
                </div>
                <h2>Simple Business Dashboard</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque optio alias doloribus possimus! Nemo.</p>
            </div>
            <div>
                <div>
                <img  className='cimg'  src={cimg} alt="" />
                </div>
                <h2>Simple Business Dashboard</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque optio alias doloribus possimus! Nemo.</p>
            </div>
         </div>
         <div className="third-div">
            <img src={cmob} alt="cart-mob" />
         </div>
        </div>
       </div>
    </>
  )
}

export default Cart
