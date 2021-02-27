import React, { useState } from 'react';
import SnackOrBoozeApi from './Api'
import slugify from 'slugify'

const MenuItemForm = ({addItem}) => {
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
    const handleChangeSelect = (e) => {
        setFormData({ type: e.target.value });
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { type,name, description, recipe, serve } = formData;
        console.log(type)
        SnackOrBoozeApi.createItem(type,{ id:slugify(name),name, description, recipe, serve })
        // make the fields blank
        setFormData(initialState)
    }
    return(
        <div>
        <select onChange={handleChangeSelect}>
                <option value='drinks'>Booze</option>
                <option value='snacks'>Snack</option>
            </select>
        <form>
            
            
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