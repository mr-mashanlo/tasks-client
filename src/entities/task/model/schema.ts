import { z } from 'zod';

export const StatusSchema = z.enum( [ 'todo', 'inProgress', 'done', 'cancelled', 'backlog' ] );

export const PrioritySchema = z.enum( [ 'low', 'medium', 'high' ] );

export const TaskSchema = z.object( {
  tag: z.string().optional(),
  title: z.string(),
  body: z.string().optional(),
  status: StatusSchema,
  priority: PrioritySchema
} );

export const TaskResponseSchema = TaskSchema.extend( {
  __v: z.number(),
  _id: z.string(),
  user: z.string(),
  uid: z.string(),
  created: z.string()
} );

export const TaskListResponseSchema = z.array( TaskResponseSchema );

export type StatusType = z.infer<typeof StatusSchema>;

export type PriorityType = z.infer<typeof PrioritySchema>;

export type TaskType = z.infer<typeof TaskSchema>;

export type TaskResponseType = z.infer<typeof TaskResponseSchema>;

export type TaskListResponseType = z.infer<typeof TaskListResponseSchema>;