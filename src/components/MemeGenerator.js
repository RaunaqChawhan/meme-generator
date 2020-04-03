import React, { Component } from 'react';

class MemeGenerator extends Component {

    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memesData => {
                const { memes } = memesData.data;
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator;