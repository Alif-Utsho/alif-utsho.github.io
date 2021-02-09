import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="container space-2 text-center mt-5">
                <ul className="list-inline mb-4">
                    <p>
                            <a className="underline" href="https://www.m.me/utsho.aiub" >
                                ALif Shahriar Utsho</a> &copy; 2021
                        </p>
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://www.facebook.com/utsho.aiub">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://github.com/Alif-Utsho">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://www.instagram.com/alif_utsho/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://www.linkedin.com/in/md-shahoriar-alif-utsho-014ba817a/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer