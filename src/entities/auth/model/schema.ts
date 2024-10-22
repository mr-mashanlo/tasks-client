import { z } from 'zod';

export const SignInSchema = z.object( {
  email: z.string().email(),
  password: z.string().min( 5 )
} );

export const SignUpSchema = z.object( {
  email: z.string().email(),
  password: z.string().min( 5 ),
  confirm: z.string().min( 5 )
} );

export const AuthResponseSchema = z.object( {
  id: z.string(),
  token: z.string()
} );

export const ErrorResponseSchema = z.object( {
  code: z.number(),
  errors: z.array( z.object( { path: z.string(), msg: z.string() } ) )
} );

export const ErrorZodSchema = z.array( z.object( { validation: z.string(), message: z.string() } ) );

export type SignInType = z.infer<typeof SignInSchema>;

export type SignUpType = z.infer<typeof SignUpSchema>;

export type AuthResponseType = z.infer<typeof AuthResponseSchema>;

export type ErrorResponseType = z.infer<typeof ErrorResponseSchema>;

export type ErrorZodType = z.infer<typeof ErrorZodSchema>;