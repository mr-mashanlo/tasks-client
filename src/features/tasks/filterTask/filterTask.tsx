import { FC, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { useTaskStore } from '../_store';

const FilterTask: FC = () => {
  const filter = useTaskStore( state => state.filter );
  const setFilter = useTaskStore( state => state.setFilter );
  const container = useRef<HTMLFormElement>( null );
  const [ isVisible, setIsVisible ] = useState<boolean>( false );

  function handleChange() {
    if ( container.current ) {
      handleSubmit( container.current );
    }
  }

  function handleSubmit( target: HTMLFormElement ) {
    try {
      const formData = new FormData( target );
      const fields = Object.fromEntries( formData.entries() );
      setFilter( fields );
    } catch ( error ) {
      return error;
    }
  }

  function handleReset() {
    if ( container.current ) {
      container.current.reset();
      setFilter( {} );
    }
  }

  return createPortal(
    <div className={twMerge( 'flex items-center gap-6 bg-white fixed bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 rounded-xl duration-500 overflow-hidden', isVisible ? 'w-[21rem]' : 'w-[5.55rem] sm:w-[5.95rem]' )}>
      <button onClick={() => setIsVisible( !isVisible )} className="w-[5.75rem] sm:w-[6rem] px-4 py-2 bg-black text-white flex items-center gap-2 rounded-xl">
        <span>Filter</span>
        <span className="material-symbols-rounded text-[1.2rem]">tune</span>
      </button>
      <form ref={container} onSubmit={() => handleSubmit} onChange={handleChange} className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <label className="w-4 h-4 bg-[#DEE0E4] rounded-md cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1 has-[:checked]:ring-black">
            <input defaultChecked={!!filter.completed && +filter.completed === 0} type="radio" name="completed" value={0} hidden />
          </label>
          <label className="w-4 h-4 bg-black rounded-md cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1 has-[:checked]:ring-black">
            <input defaultChecked={!!filter.completed && +filter.completed === 1} type="radio" name="completed" value={1} hidden />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <label className="w-4 h-4 bg-blue-400 rounded-full cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1 has-[:checked]:ring-black">
            <input defaultChecked={!!filter.folder && filter.folder === 'blue'} type="radio" name="folder" value="blue" hidden />
          </label>
          <label className="w-4 h-4 bg-red-400 rounded-full cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1 has-[:checked]:ring-black">
            <input defaultChecked={!!filter.folder && filter.folder === 'red'} type="radio" name="folder" value="red" hidden />
          </label>
          <label className="w-4 h-4 bg-orange-400 rounded-full cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1 has-[:checked]:ring-black">
            <input defaultChecked={!!filter.folder && filter.folder === 'orange'} type="radio" name="folder" value="orange" hidden />
          </label>
          <label className="w-4 h-4 bg-[#C6CAD2] rounded-full cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-offset-1 has-[:checked]:ring-black">
            <input defaultChecked={!!filter.folder && filter.folder === 'default'} type="radio" name="folder" value="default" hidden />
          </label>
        </div>
        <button onClick={() => handleReset()} type="button" className="w-4 h-4 bg-red-500 flex items-center justify-center"></button>
      </form>
    </div>,
    document.body
  );
};

export default FilterTask;