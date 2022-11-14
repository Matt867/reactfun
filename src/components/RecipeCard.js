import React, { useState } from 'react'
import UpDownVoteForm from './UpDownVoteForm'
import defaultProfilePic from '../Default_pfp.svg'

export default function RecipeCard (props) {

    return (
        <div id={props.id} className='card-container'>
            <div className='author-container'>
                <p>Submitted by: {props.author ? props.author : "Default Author"}</p>
            </div>
            <div className='recipe-container'>
                <div className='recipe-header'><h2>{props.title}</h2></div>
                <div className='article-body'>
                    <article className='recipe-body'>{props.text}</article>
                    <UpDownVoteForm/>
                </div>
            </div>
        </div>
    );
}
