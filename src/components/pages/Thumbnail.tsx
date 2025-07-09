import React from 'react'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import styles from './Tumbnail.module.css'

const Thumbnail = () => {
  const memes = useSelector( (s: RootState) => s.ressources.meme);
  const images = useSelector( (s: RootState) => s.ressources.images);

  return (
    <div className={styles.Thumbnail}>
      {
        memes.map((el, pos) => 
          <Link className={styles.linkMeme} to={'/editor/' + el.id} key={"l"+ pos}>
            { el.titre }
            <MemeSVGViewer
              image={ images.find(e => e.id === el.imageId) }
              meme={el}
              basePath=""
            />
          </Link>
        )
      }
    </div>
  )
}

export default Thumbnail