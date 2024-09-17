import mobile from '../assets/mobile.png'
import gshape from '../assets/Shape.svg'


function Content() {
  return (
    <div className='content-main'>
    <img src={gshape} alt="bg-shape" />

  <div className='heading'>
    <h1>
    Features of Little Bites Food Delivery Solution
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor in mi condimentum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor in mi condimentum congue.
    </p>
  </div>
  <div className='parent'>
    <div className='ul-main'>
        <ul>
            <li>
                <div className='make-small'>
                    <h1>User Login and Registration</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
        </ul>
    </div>
    <div className='mobimg'>
        <img src={mobile} alt="mobile" />
    </div>
    <div className='ul-main'>
    <ul style={{marginRight:"170px",marginLeft:"-100px"}}>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
            <li>
                <div className='make-small'>
                    <h1>Push Notification Setup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus esse, deleniti illum repellat amet?</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</div>
  );
};

export default Content;

