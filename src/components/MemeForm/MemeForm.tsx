import React, { useEffect, useState } from 'react';
import styles from './MemeForm.module.css';
import Button from '../ui/Button/Button';
import type { MemeInterface } from 'orsys-tjs-meme';

interface IMemeFormProps {
  meme: MemeInterface
  onMemeChange(m:MemeInterface):undefined
}

const MemeForm: React.FC<IMemeFormProps> = ({meme, onMemeChange}) => {
  const onStringInputChange = (evt:React.FormEvent<HTMLInputElement>) => {
    const tmp = { ...meme };
    tmp[evt.target.name] = evt.target.value;
    onMemeChange(tmp);
  }

  const onNumberInputChange = (evt:React.FormEvent<HTMLInputElement>) => {
    const tmp = { ...meme };
    tmp[evt.target.name] = Number(evt.target.value);
    onMemeChange(tmp);
  }

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={
        (evt) => {
          evt.preventDefault()
        }
      }>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <input 
          name="titre" 
          id="titre" 
          type='text' 
          value={meme.titre} 
          onInput={
            (evt) => {
              let value: string = evt.target.value
              value = value.toLowerCase();
              evt.target.value = value

              onStringInputChange(evt)
            }
          }
        />

        <hr />

        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <select name="image" id="image">
          <option value="-1">No image</option>
        </select>

        <hr />
        
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <input 
          name="text" 
          id="text" 
          type="text" 
          value={meme.text} 
          onInput={onStringInputChange}
        />
        <br />

        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input 
          className={styles.smallNumber} 
          name="x" 
          id="x" 
          type="number"
          value={meme.x}
          onInput={onNumberInputChange}
        />

        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input 
          className={styles.smallNumber} 
          name="y" 
          id="y" 
          type="number" 
          value={meme.y}
          onInput={onNumberInputChange}
        />

        <hr />

        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input 
          name="color" 
          id="color" 
          type="color"
          value={meme.color} 
          onInput={onStringInputChange}
        />
        <br />

        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={meme.fontSize}
          onInput={onNumberInputChange}
        />
        px
        <br />

        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={meme.fontWeight}
          onInput={onStringInputChange}
        />
        <br />

        <input 
          name="underline" 
          id="underline" 
          type="checkbox" 
          checked={meme.underline} 
          onChange={(evt) => onMemeChange({...meme, underline:evt.target.checked})}
        />
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>

        <h2 style={{ display: "inline" }}>/</h2>

        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        <input 
          name="italic" 
          id="italic" 
          type="checkbox" 
          checked={meme.italic}
          onChange={(evt) => onMemeChange({...meme, italic:evt.target.checked})}
        />

        <hr />

        <Button typeBtn='submit' classTitle={["Btn-base", "Btn-green"]}>Submit</Button>
        <Button typeBtn='reset' classTitle={["Btn-base", "Btn-red"]}>Reset</Button>
      </form>
    </div>
  );
}

export default MemeForm;
