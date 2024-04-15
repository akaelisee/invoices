import React from 'react'
import './aside.css'
import user from '../assets/img/user.png'

const Aside = () => {
    return (
        <div className='inner-aside'>
            &nbsp;
            <div className='account'>
                <div className='circle'>
                    <img src={user} alt='user' />
                </div>
            </div>
        </div>
    );
}

export default Aside
