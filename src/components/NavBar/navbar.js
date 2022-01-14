import React from 'react'
import './NavBar.css'

export default function NavBar() {
    return(
        <div class="header">
            <a href="" class="logo">Blogs.io</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li><a href="#work">Home</a></li>
                <li><a href="#about">Blogs</a></li>
                <li><a href="#careers">Upcoming</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    )
}