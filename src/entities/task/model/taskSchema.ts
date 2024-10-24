import { z } from 'zod';

export const TaskSchema = z.object( {
  tag: z.string(),
  title: z.string(),
  body: z.string(),
  status: z.enum( [ 'todo', 'inProgress', 'done', 'cancelled', 'backlog' ] ),
  priority: z.enum( [ 'low', 'medium', 'high' ] )
} );

export const TaskResponseSchema = TaskSchema.extend( {
  __v: z.number(),
  _id: z.string(),
  user: z.string(),
  uid: z.string(),
  created: z.string()
} );

export const TaskListResponseSchema = z.array( TaskResponseSchema );

export type TaskType = z.infer<typeof TaskSchema>;

export type TaskResponseType = z.infer<typeof TaskResponseSchema>;

export type TaskListResponseType = z.infer<typeof TaskListResponseSchema>;