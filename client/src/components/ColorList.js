import React, { useState } from "react";
import axios from "axios";
import { axiosAuth } from "./utils/axiosAuth";
import { Route, useHistory} from 'react-router-dom' 

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, setDependency }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosAuth()
    .put(`colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      console.log(res.data)
      setDependency(true)

    })

    .catch(err => 
      console.log(err))
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };

  // const deleteColor = color => {
  //       axiosAuth()
  //         .delete(`/api/colors/${color.id}`)
  //         .then(() => {
  //           updateColors();
  //         })
  //         .catch(error => {
  //           console.log('Error Deleting', error);
  //         });

  const deleteColor = color => {
    axiosAuth()
    .delete(`colors/${color.id}`, color)
    .then(res => {
      window.location.reload(true);
      // console.log(res.data)
      // updateColors(color.filter((item) => item.id !== colorToEdit.id))
      
    })
    // make a delete request to delete this color
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
