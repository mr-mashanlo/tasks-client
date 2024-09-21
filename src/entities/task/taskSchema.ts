import { z } from 'zod';

export const TaskSchema = z.object( {
  body: z.string().min( 1 ),
  folder: z.string()
} );

export const TaskResponseSchema = TaskSchema.extend( {
  __v: z.number(),
  _id: z.string(),
  author: z.string(),
  completed: z.boolean(),
  created: z.string(),
  deadline: z.string().optional()
} );

export const TaskListResponseSchema = z.array( TaskResponseSchema );

export type TaskType = z.infer<typeof TaskSchema>;

export type TaskResponseType = z.infer<typeof TaskResponseSchema>;

export type TaskListResponseType = z.infer<typeof TaskListResponseSchema>;