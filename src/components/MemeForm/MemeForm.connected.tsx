import type { ImageInterface } from 'orsys-tjs-meme'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../store/store'
import UnconnectedMemeForm from './MemeForm';
import { update } from '../../store/current';

interface IMemeFormsProps {
  images: Array<ImageInterface>;
}

const MemeForm = (props: IMemeFormsProps) => {
  const dispatch: AppDispatch = useDispatch();
  const meme = useSelector( (s: RootState) => s.current.meme);

  return (
    <UnconnectedMemeForm 
      {...props}
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