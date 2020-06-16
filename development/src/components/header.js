import React, {useEffect} from 'react';

import $ from 'jquery';

import './header.css';

export function Header(props) {

    const name = props.data.name;
    const occupation = props.data.occupation;
    const description = props.data.description;
    const city = props.data.address.city;
    const networks = props
        .data
        .social
        .map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            )
        });

    useEffect(() => {
        $('body')
            .on('click', '.smoothscroll', function (e) {
                e.preventDefault();

                var target = this.hash,
                    $target = $(target);

                $('html, body')
                    .stop()
                    .animate({
                        'scrollTop': $target
                            .offset()
                            .top
                    }, 800, 'swing', function () {
                        window.location.hash = target;
                    });
            });

        $(window).on('scroll', function () {

            var h = $('header').height();
            var y = $(window).scrollTop();
            var nav = $('#nav-wrap');

            if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
                nav.fadeOut('fast');
            } else {
                if (y < h * .20) {
                    nav
                        .removeClass('opaque')
                        .fadeIn('fast');
                } else {
                    nav
                        .addClass('opaque')
                        .fadeIn('fast');
                }
            }

        });
    }, []);

    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">Resume</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#publications">Publications</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">Contact</a>
                    </li>
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Hi, I'm {name}.</h1>
                    <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                    <hr/>
                    <ul className="social">
                        {networks}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="fa fa-chevron-circle-down"></i>
                </a>
            </p>

        </header>
    )
}