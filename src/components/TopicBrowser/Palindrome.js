import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state={
            userInput: '',
            palindrome: ''
        }
    }
    handleInput = (val) => {
        this.setState({userInput: val})
    }
    isPalindrome = () => {
        let forwards = this.state.userInput;
        let backwards = this.state.userInput;
        backwards = backwards.split('')
        backwards = backwards.reverse()
        backwards = backwards.join('')

        if (forwards === backwards){
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome Component</h4>
                <input className='inputLine' onChange={e => this.handleInput(e.target.value)}/>
                <button 
                    className='confirmationButton' 
                    onClick={this.isPalindrome}>
                        Check
                </button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome