import { useBlockProps } from '@wordpress/block-editor';
import foicon from './fo-icon.png';

export default function save( { attributes } ) {

  const blockProps = useBlockProps.save({
    className: `formo-formore-header`
  })

  const imageOneProps = useBlockProps.save({
    style: `background-image: url(${attributes.imageOne})`,
    className: 'more'
  });
  const imageTwoProps = useBlockProps.save({
    style: `background-image: url(${attributes.imageTwo})`,
    className: 'more'
  });
  const imageThreeProps = useBlockProps.save({
    style: `background-image: url(${attributes.imageThree})`,
    className: 'more'
  });
  const imageFourProps = useBlockProps.save({
    style: `background-image: url(${attributes.imageFour})`,
    className: 'more'
  });

	return (
		<div { ...blockProps }>
      <h1>
      <span className="for-more-1">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageOneProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      <span className="for-more-2">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageTwoProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      <span className="for-more-3">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageThreeProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      <span className="for-more-4">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageFourProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      <span className="for-more-1">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageOneProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      <span className="for-more-2">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageTwoProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      <span className="for-more-3">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageThreeProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      <span className="for-more-4">
        <span className="for">
          f<span className="wide">o</span>r
        </span> 
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        <span className="more" { ...imageFourProps }>
          <span className="wide">m</span>ore
        </span>
        <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
      </span>
      </h1>
		</div>
	);
}
