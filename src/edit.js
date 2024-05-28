import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockIcon, MediaPlaceholder } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './editor.scss';
import foicon from './fo-icon.svg';

export default function Edit( { attributes, setAttributes }) {
  
  const blockProps = useBlockProps({
    className: `formo-formore-header`
  })

  return (
		<div { ...blockProps }>
      <InspectorControls key="setting">
        <div className='formore-controls'>
          <MediaPlaceholder
            onSelect = {
                ( el ) => {
                    setAttributes( { 
                        imageOne: el.url,
                    } );
                    setImageOneUrl(el.url);
                }
            }
            accept="image/*"
            icon={<BlockIcon icon="format-image" />}
            allowedTypes = { [ 'image' ] }
            multiple = { false }
            labels = { { title: 'Image #1' } }
            mediaPreview={ <img className='previewimg' src={ attributes.imageOne } /> }
          >
          </MediaPlaceholder>
          <MediaPlaceholder
            onSelect = {
                ( el ) => {
                    setAttributes( { 
                        imageTwo: el.url,
                    } );
                }
            }
            accept="image/*"
            icon={<BlockIcon icon="format-image" />}
            allowedTypes = { [ 'image' ] }
            multiple = { false }
            labels = { { title: 'Image #2' } }
            mediaPreview={ <img className='previewimg' src={ attributes.imageTwo } /> }
          >
          </MediaPlaceholder>
          <MediaPlaceholder
            onSelect = {
              ( el ) => {
                setAttributes( { 
                  imageThree: el.url,
                } );
              }
            }
            accept="image/*"
            icon={<BlockIcon icon="format-image" />}
            allowedTypes = { [ 'image' ] }
            multiple = { false }
            labels = { { title: 'Image #3' } }
            mediaPreview={ <img className='previewimg' src={ attributes.imageThree } /> }
          >
          </MediaPlaceholder>
          <MediaPlaceholder
            onSelect = {
              ( el ) => {
                setAttributes( { 
                  imageFour: el.url,
                } );
              }
            }
            accept="image/*"
            icon={<BlockIcon icon="format-image" />}
            allowedTypes = { [ 'image' ] }
            multiple = { false }
            labels = { { title: 'Image #4' } }
            mediaPreview={ <img className='previewimg' src={ attributes.imageFour } /> }
          >
          </MediaPlaceholder>
        </div>
      </InspectorControls>
      <h1>
        <span className="for-more-1">
          <span className="for">
            f<span className="wide">o</span>r
          </span> 
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
          <span className="more" style= {{
            backgroundImage: `url(${attributes.imageOne})`
          }}>
            <span className="wide">m</span>ore
          </span>
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        </span>
        <span className="for-more-2">
          <span className="for">
            f<span className="wide">o</span>r
          </span> 
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
          <span className="more" style= {{
            backgroundImage: `url(${attributes.imageTwo})`
          }}>
            <span className="wide">m</span>ore
          </span>
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        </span>
        <span className="for-more-3">
          <span className="for">
            f<span className="wide">o</span>r
          </span> 
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
          <span className="more" style= {{
            backgroundImage: `url(${attributes.imageThree})`
          }}>
            <span className="wide">m</span>ore
          </span>
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        </span>
        <span className="for-more-4">
          <span className="for">
            f<span className="wide">o</span>r
          </span> 
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
          <span className="more" style= {{
            backgroundImage: `url(${attributes.imageFour})`
          }}>
            <span className="wide">m</span>ore
          </span>
          <img className='fo-icon' src={foicon} alt="an icon displaying the letters f and o of the formo logo" />
        </span>
      </h1>
		</div>
	);
}
