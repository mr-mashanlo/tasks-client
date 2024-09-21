import { defaultInstance } from '@/shared/api';
import { AuthResponseSchema, SignUpType } from '@/entities/auth';

export async function signUp( data: SignUpType ) {
  try {
    const response = await defaultInstance( 'auth/signup', { method: 'post', body: JSON.stringify( data ), headers: { 'content-type': 'application/json' } } );
    const auth = AuthResponseSchema.parse( await response.json() );
    return auth;
  } catch ( error ) {
    return error;
  }
};