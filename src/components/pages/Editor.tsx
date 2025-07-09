import React, { useEffect } from 'react'
import MemeSvgViewer from '../ui/MemeSVGViewer/MemeSVGViewer.connected'
import MemeForm from '../MemeForm/MemeForm.connected'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { update } from '../../store/current'
import { emptyMeme } from 'orsys-tjs-meme'

const Editor = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const memes = useSelector( (s: RootState) => s.ressources.meme);
  const navigate = useNavigate();

  useEffect(() => {
    if(params.id !== undefined) {
      const foundMeme = memes.find( e => Number(params.id) === e.id );

      if (foundMeme) {
        dispatch(update(foundMeme));
      } else {
        navigate('/');
      }
    } else {
      dispatch(update(emptyMeme));
    }
  }, [params, navigate, memes, dispatch]);
  

  return (
    <>
      <MemeSvgViewer />
      <MemeForm />
    </>
  )
}

export default Editor