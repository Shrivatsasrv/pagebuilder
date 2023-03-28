import React, { useState } from 'react';
import tiglogo from './Images/tigeenlogo.png';
import { BiMenu } from 'react-icons/bi';

const menuStyle1 = {
    backgroundColor: '#1976d2'
}

const menuStyle2 = {
    backgroundColor: '#ff0000'
}



const Main = () => {
    //Menu

    //Main
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);
    const [a1, seta1] = useState('checked');
    const [a2, seta2] = useState('checked');
    const [bgcolor, setbgcolor] = useState(true);

    // if (bgcolor) { setMenuStyle(menuStyle1); }
    // else {
    //     setMenuStyle(menuStyle2);
    // }
    return (
        <div>




            {active1 ? <div className="menu "><Menu /></div> : ''}

            {/* {bgcolor ? <div className="menu "><Menu /></div> : <div className="menu "><Menu /></div>} */}




            <div className='container ' style={{ width: '50%', border: '1px solid black' }}>
                <div className="form-check form-switch">
                    <input style={{ border: '1px solid black' }} className="form-check-input" type="checkbox" checked={a1} id="flexSwitchCheckDefault"
                        onChange={(e) => {
                            setActive1(!active1);
                            seta1((a1) ? '' : 'checked')

                        }} />
                    <label style={{ border: '1px solid black' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">I want a Header</label>
                </div>


                <div className="form-check form-switch">
                    <input style={{ border: '1px solid black' }} className="form-check-input" type="checkbox" checked={a2} id="flexSwitchCheckDefault"
                        onChange={(e) => {
                            setActive2(!active2);
                            seta2((a2) ? '' : 'checked')

                        }} />
                    <label style={{ border: '1px solid black' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">I want a Footer</label>
                </div>
                <div className="form-check form-switch">
                    <input style={{ border: '1px solid black' }} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label style={{ border: '1px solid black' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">I want a Drawer OverLay Mode (requires Header or Footer</label>
                </div>
                <div className="form-check form-switch">
                    <input style={{ border: '1px solid black' }} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label style={{ border: '1px solid black' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">I want a left-side Drawer</label>
                </div>
                <div className="form-check form-switch">
                    <input style={{ border: '1px solid black' }} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label style={{ border: '1px solid black' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">I want a right-side Drawer</label>
                </div>
                <div className="form-check form-switch">
                    <input style={{ border: '1px solid black' }} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label style={{ border: '1px solid black' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">I want a navigation tabs(requires Header)</label>
                </div>
                <div className="form-check form-switch">
                    <input style={{ border: '1px solid black' }} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label style={{ border: '1px solid black' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">I want a Bottom Menu(requires Footer)</label>
                </div>


            </div >
            {active2 ? <div className="menu "><Footer /></div> : ''}
            {/* <div className="footer bg-dark">Footer</div> */}

        </div>







    )
}

const Menu = () => {
    return (
        <div className='container-fluid' style={menuStyle1}>
            <div className="row">

                <div className="col-lg-11">
                    <BiMenu />
                    <img src={tiglogo} alt="" border='1px solid black' />
                </div>
                <div >

                </div>
            </div>


            <div>
                <span>Tab1</span>
                <span>Tab2</span>
                <span>Tab3</span>
            </div>

        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer bg-dark">Footer</div>
    )

}



export default Main;