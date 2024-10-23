import { FC } from 'react';
import { Priority, Status } from '@/entities/task/ui';

export const SingleTaskPage: FC = () => {
  return (
    <div className="p-10">
      <div className="max-w-[40rem] mx-auto pb-14">
        <h1 className="text-2xl font-bold">You can't compress the program without quantifying the open-source SSD pixel!</h1>
        <table className="mt-8">
          <tbody>
            <tr>
              <td className="pr-3 py-3 min-w-32"><span className="font-medium text-zinc-600">Task</span></td>
              <td className="px-3 py-3 w-full">TASK-0000</td>
            </tr>
            <tr>
              <td className="pr-3 py-3 min-w-32"><span className="font-medium text-zinc-600">Tag</span></td>
              <td className="px-3 py-3 w-full">Bug</td>
            </tr>
            <tr>
              <td className="pr-3 py-3 min-w-32"><span className="font-medium text-zinc-600">Status</span></td>
              <td className="px-3 py-3 w-full"><Status status="todo" /></td>
            </tr>
            <tr>
              <td className="pr-3 py-3 min-w-32"><span className="font-medium text-zinc-600">Priority</span></td>
              <td className="px-3 py-3 w-full"><Priority priority="medium" /></td>
            </tr>
            <tr>
              <td className="pr-3 py-3 min-w-32"><span className="font-medium text-zinc-600">Created</span></td>
              <td className="px-3 py-3 w-full">19283748365</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-8">
          <article className="prose prose-sm prose-zinc text-white">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus assumenda nemo cumque maiores id consectetur, tempore facilis sit rem maxime doloribus eos aperiam. Perferendis, sequi doloremque? Tenetur, vitae saepe. Magnam expedita dolorum enim, facere tempora nihil! Doloremque pariatur placeat recusandae?</p>
            <p>Aliquid, hic repudiandae. Ad tempore sapiente eius repellat beatae, quas ipsam? Porro dicta minus dolor fugiat! Tempore sed molestiae velit placeat harum quae, minus enim expedita dolorem quaerat dolore. Molestiae culpa quod eveniet provident tenetur porro accusantium iusto aperiam voluptatem?</p>
            <p>Dolorem aliquam id obcaecati ad fugiat fuga recusandae dolores? Tempora, rerum? Velit debitis est impedit, voluptas et quos incidunt pariatur nemo facilis recusandae minima numquam nihil neque dicta voluptatibus labore vitae praesentium inventore voluptatum, architecto eveniet, maxime odit! Alias, provident.</p>
            <p>Atque explicabo ullam veritatis dicta dolore expedita veniam beatae, accusantium aliquam tempore delectus vero libero autem, soluta itaque omnis iste incidunt quas unde alias voluptate doloribus reiciendis qui eum. Voluptas nostrum culpa repellat id illo deleniti porro quia sunt. Quae.</p>
            <p>Voluptas nam nisi fugit libero modi dolores, eaque magnam, quia sunt non vero est! Voluptatem neque eum, alias expedita rerum delectus aliquid totam deleniti ex quis aperiam beatae excepturi. Quos laborum nesciunt repellendus recusandae labore doloremque maiores aliquid rerum quibusdam.</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskPage;
