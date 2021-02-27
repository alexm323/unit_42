import React, { useState,useEffect } from 'react';
import SnackOrBoozeApi from './Api'
import slugify from 'slugify'
import {useHistory} from 'react-router-dom'

const MenuItemForm = () => {
    const initialState = {
        "name": "",
        "description": "",
        "recipe": "",
        "serve": ""
      }
    const [formData,setFormData] = useState(initialState);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }));
    }
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { type,name, description, recipe, serve } = formData;
        // console.log(type)

        const awaitCreation = async() =>{
            await SnackOrBoozeApi.createItem(type,{ id:slugify(name),name, description, recipe, serve })
            // console.log(`/${type}/${slugify(name)}`)

            history.push( `/${type}/${slugify(name)}`)
        }
        awaitCreation();

    }   
    return(
        <div>

        <form>
            {/* <label htmlFor="itemType">Item Type </label>
            <select name='itemType'>
                <option value='drinks'>Booze</option>
                <option value='snacks'>Snack</option>
            </select> */}
            <label htmlFor="type">Type </label>
            <input
                id="type"
                type='text'
                name="type"
                placeholder="'snacks' or 'drinks'"
                value={formData.type}
                onChange={handleChange}
            />
            <label htmlFor="name">Name </label>
            <input
                id="name"
                type='text'
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            
            <label htmlFor="description">Description </label>
            <input
                type="description"
                name="description"
                placeholder="Description"
                id="description"
                value={formData.description}
                onChange={handleChange}
            />

            <label htmlFor="recipe"> Recipe </label>
            <input
                type="recipe"
                name="recipe"
                placeholder="Recipe"
                id="recipe"
                value={formData.recipe}
                onChange={handleChange}
            />
            <label htmlFor="serve"> Serve </label>
            <input
                type="serve"
                name="serve"
                placeholder="Serve"
                id="serve"
                value={formData.serve}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add me to the List!</button>
        </form>
        </div>
    )
}

export default MenuItemForm;