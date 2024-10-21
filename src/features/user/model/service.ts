import { defaultInstance } from '@/shared/api';
import { AuthResponseSchema, SignInType, SignUpType } from '@/entities/user';

export async function signIn( data: SignInType ) {
  try {
    const response = await defaultInstance( 'auth/signin', { method: 'post', body: JSON.stringify( data ), headers: { 'content-type': 'application/json' } } );
    const auth = AuthResponseSchema.parse( await response.json() );
    return auth;
  } catch ( error ) {
    return error;
  }
};

export async function signUp( data: SignUpType ) {
  try {
    const response = await defaultInstance( 'auth/signup', { method: 'post', body: JSON.stringify( data ), headers: { 'content-type': 'application/json' } } );
    const auth = AuthResponseSchema.parse( await response.json() );
    return auth;
  } catch ( error ) {
    return error;
  }
};