import React from 'react';
import styles from './MemeForm.module.css';
import Button from '../ui/Button/Button';
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';

interface IMemeFormProps {
  meme: MemeInterface
  onMemeChange(m:MemeInterface): undefined
  images: Array<ImageInterface> | ImageInterface[]
}

const MemeForm: React.FC<IMemeFormProps> = ({meme, onMemeChange, images}) => {
  const onInputChange = (evt:React.FormEvent<HTMLInputElement>, keyName: string, isNumber: boolean = false) => {
    const tmp = { ...meme };
    
    tmp[keyName] = isNumber ? Number(evt.target.value) : evt.target.value;
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

              onInputChange(evt, evt.target.name, false);
            }
          }
        />

        <hr />

        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <select name="image" id="image" value={meme.imageId} onInput={ (evt) => onInputChange(evt, 'imageId', true)}>
          {
            images.map((el, pos) => <option key={'si' + pos + el.id} value={el.id}>{el.name}</option>)
          }
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
          onInput={ (evt) => onInputChange(evt, evt.target.name, false) }
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
          onInput={(evt) => onInputChange(evt, evt.target.name, true)}
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
          onInput={(evt) => onInputChange(evt, evt.target.name, true)}
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
          onInput={ (evt) => onInputChange(evt, evt.target.name, false) }
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
          onInput={(evt) => onInputChange(evt, evt.target.name, true)}
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
          onInput={ (evt) => onInputChange(evt, evt.target.name, false) }
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
