import { useState } from 'react'

export default function UpDownVoteForm (props) {

    let [voted, setVoted] = useState(0)
    let [score, setScore] = useState(Math.floor(Math.random()*1000))

    function handleUpvote () {
        if (voted < 1) {
            setVoted(voted += 1)
            setScore(score += 1)
        } else {
            setVoted(voted -= 1)
            setScore(score -= 1)
        }
    }

    function handleDownvote() {
        if (voted > -1) {
            setVoted(voted -= 1)
            setScore(score -= 1)
        } else {
            setVoted(voted += 1)
            setScore(score += 1)
        }
    }

    return (
        <div className="ranking-form">
            <button className="rank-button upvote-button" onClick={handleUpvote} style={{backgroundColor: voted > 0 ? "#34ad38" : "white"}}>Like</button>
            <p>{score}</p>
            <button className="rank-button downvote-button" onClick={handleDownvote} style={{backgroundColor: voted < 0 ? "#ed2b2b" : "white"}}>Dislike</button>
        </div>
    );
}
