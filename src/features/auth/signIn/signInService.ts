import { defaultInstance } from '@/shared/api';
import { AuthResponseSchema, SignInType } from '@/entities/auth';

export async function signIn( data: SignInType ) {
  try {
    const response = await defaultInstance( 'auth/signin', { method: 'post', body: JSON.stringify( data ), headers: { 'content-type': 'application/json' } } );
    const auth = AuthResponseSchema.parse( await response.json() );
    return auth;
  } catch ( error ) {
    return error;
  }
};