import { MemeSVGViewer } from 'orsys-tjs-meme';
import type { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

interface IMemeSvgViewerProps {
  styles?: object
}

const MemeSvgViewer = (props: IMemeSvgViewerProps) => {
  const meme = useSelector( (s: RootState) => s.current.meme );
  const images = useSelector( (s: RootState) => s.ressources.images );

  return (
    <MemeSVGViewer 
      {...props}
      image={images.find(e => e.id === meme.imageId)} 
      meme={meme} 
      basePath=''
    />
  );
}

export default MemeSvgViewer;
