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

export type SignInType = z.infer<typeof SignInSchema>;

export type SignUpType = z.infer<typeof SignUpSchema>;

export type AuthResponseType = z.infer<typeof AuthResponseSchema>;