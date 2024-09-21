import { FC, FormEvent } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TaskSchema } from '@/entities/task';
import { createTask } from './createTaskService';
import { ChangeTaskFolder } from '../changeTaskFolder';

const CreateTaskForm: FC = () => {
  const queryClient = useQueryClient();
  const mutation =useMutation( createTask, { onSuccess: () => queryClient.invalidateQueries( 'tasks' ) } );

  function formDataToObject( formData: FormData ) {
    const fields = Object.fromEntries( formData.entries() );
    const result = TaskSchema.safeParse( fields );
    if ( !result.success ) { throw result.error; }
    return result.data;
  };

  async function handleSubmitForm( e: FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    try {
      const formData = new FormData( e.currentTarget );
      const fields = formDataToObject( formData );
      mutation.mutate( fields );
      e.currentTarget.reset();
    } catch ( error ) {
      return error;
    }
  }

  return (
    <form onSubmit={e => handleSubmitForm( e )} className="px-3 py-2 bg-[#C6CAD2] rounded-2xl flex items-center gap-2 duration-500 has-[:focus]:bg-white has-[:focus]:shadow-md group">
      <span className="w-4 h-4 sm:w-5 sm:h-5 -ml-3 bg-[#EAEAEA] rounded-md duration-500 opacity-0 flex-shrink-0 group-has-[:focus]:ml-0 group-has-[:focus]:opacity-100"></span>
      <input type="text" id="body" name="body" placeholder="Write a new task" className="w-full p-1 bg-transparent outline-none" required />
      <div className="-mr-3 opacity-0 duration-500 group-has-[:focus]:mr-0 group-has-[:focus]:opacity-100">
        <ChangeTaskFolder />
      </div>
      <input type="submit" hidden />
    </form>
  );
};

export default CreateTaskForm;