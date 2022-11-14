import { useState } from "react";

export default function AddRecipeForm(props) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    function submitHandler (e) {
        e.preventDefault();
        props.addRecipe(author, title, text)
    }

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleAuthorChange(e) {
        setAuthor(e.target.value)
    }

    function handleTextChange (e) {
        setText(e.target.value)
    }

    return(
    <form className="add-recipe-form">
        <input className="form-input" type="text" id="new-recipe-title" onChange={handleTitleChange} placeholder="Recipe Title"></input>
        <input className="form-input" type="text" id="new-recipe-author" onChange={handleAuthorChange} placeholder="Author's Name"></input>
        <textarea className="form-input form-text" type="text-area" id="new-recipe-text" onChange={handleTextChange} placeholder="Recipe Text"></textarea>
        <button className="form-submit-button" type="submit" onClick={submitHandler}>Create new recipe</button>
    </form>
    );
}
