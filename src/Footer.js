import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container text-center">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicin!</h2>
                            <h3>477847177</h3>
                            <div className="footer-menu">
                                <ul className="list-unstyled">
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Youtube</a></li>
                                    <li><a href="/">Instagram</a></li>
                                </ul>
                            </div>
                            <div className="copyright_text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
