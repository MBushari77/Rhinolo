import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

import scroll from '../../static/icons/scroll.png';
import cryptex from '../../static/icons/cryptex.png';

const Home = () => {
  return (
    <div>
      {/* landing page section */}
      <section className='full_height'>
        <div className='centered_cryptex'>
          <h1 className='dgc'>RHINOLO</h1>
        </div>
        <div className='scroll_to_bottom'>
          <div>
            <img className='scroll_icon' src={ scroll } />
          </div>
          <div>
            <i>Scroll down</i>
          </div>
        </div>
      </section>

      {/* home section */}
      <section className='full_height'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 col-sm-12 home_main_side_container'>
            <div className='home_main_side'>
              <div>
                <h3 className='tag_line'>
                  <i>We provide</i>
                  <i>logistics services 1PL to 5PL</i>
                  <i>SPECILIZED in 3PL</i>
                </h3>
              </div>
              <div className='home_main_side_buttons_container'>
                <Link className='home_main_side_button dgbg lgc order_now_button'>Order now</Link>
                <Link className='home_main_side_button'>Learn more</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 cryptex_container'>
            <img src={ cryptex } className='cryptex' />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home