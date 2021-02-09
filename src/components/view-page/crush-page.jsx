import { useParams } from 'react-router-dom'
import React from 'react'

import Namegenerate from './namegenerate'

class CrushPage extends React.Component{
    state = {
        qoute: [
            "Are you Google search engine? Because you’ve got everything I’ve been searching for in life.",
            "Found the reason for my smile, the day I found you. Will you let me be the reason for your smile?",
            "In you, my life becomes whole, with you my days become bright. In your hands I would love to lay, this night and for the rest of my life!",
            "You deserve the world and all the good things it has to offer. If I fail to find that world for you, I promise to give you mine!",
            "When the rain is blowing in your face and the whole world is on your case, I could offer you a warm embrace to make you feel my love.",
            "Hold my hand tight as I want to grow old with you from this day forth.",
            "I Love You Damn"
        ],
        line: "Hey Are You There? Click On The Heart Sign To Explore More",
        clicked: 0,
        class: 'content'
    }

    clickNext = () => {
        if (this.state.clicked < 7) {
            this.setState({
                clicked: this.state.clicked + 1,
                class: "content content-anim"
            })
        }
        
        if (this.state.clicked < 7) {
            this.setState({
                line: this.state.qoute[this.state.clicked]
            })
        }
    }

    render() {
        return (
            <>
                <section id="crushPage" className=" align-items-center">
                    <main id="main">
                        <Namegenerate/>
                        <div className={this.state.class}>
                            <i className="fas fa-quote-left"></i>
                            <p className="txt fw-bold">
                                {this.state.line}
                            </p>
                        </div>
                        <button
                            className="next-btn"
                            id="next-btn"
                            onClick={this.clickNext}
                        >
                        <i className="fas fa-heart"></i></button>
                    </main>

                </section>
            </>
        )
    }
}

export default CrushPage