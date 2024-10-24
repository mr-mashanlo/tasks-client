import { FC } from 'react';
import { View } from '@/entities/task/ui';
import { TaskResponseType } from '@/entities/task/model';

const DataView: FC = () => {

  const task: TaskResponseType = {
    __v: 0,
    _id: '0',
    user: '0',
    uid: 'TASK-0000',
    tag: 'Bug',
    title: 'You can\'t compress the program without quantifying the open-source SSD pixel!',
    body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptas autem ut ipsam! Sint, aperiam?</p><p>Quae laudantium iusto aliquam quod reiciendis. Aut sit minima accusantium ipsam fugiat dolores, velit minus.</p><p>Quasi facilis maiores vero accusantium obcaecati dolor! Fugit quisquam corrupti ea obcaecati, illo autem fuga.</p>',
    status: 'todo',
    priority: 'low',
    created: '00000000'
  };

  return <View task={task} />;
};

export default DataView;