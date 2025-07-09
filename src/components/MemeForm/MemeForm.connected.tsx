import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../store/store'
import UnconnectedMemeForm from './MemeForm';
import { update } from '../../store/current';

interface IMemeFormsProps {
  style?: object;
}

const MemeForm = (props: IMemeFormsProps) => {
  const dispatch: AppDispatch = useDispatch();
  const meme = useSelector( (s: RootState) => s.current.meme);
  const images = useSelector( (s: RootState) => s.ressources.images);

  return (
    <UnconnectedMemeForm 
      {...props}
      images={images}
      meme={meme}
      onMemeChange={ 
        (m) => {
          dispatch(update(m));
        }
      }
    />
  )
}

export default MemeForm;