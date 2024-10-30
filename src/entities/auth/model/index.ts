import {
  AuthResponseSchema,
  AuthResponseType,
  ErrorResponseSchema,
  ErrorResponseType,
  ErrorZodSchema,
  ErrorZodType,
  SignInSchema,
  SignInType,
  SignUpSchema,
  SignUpType
} from './schema';
import useAuthStore from './store';
import {
  validateAuthResponse,
  validateSignInFormData,
  validateSignUpFormData
} from './validator';

export {
  AuthResponseSchema,
  ErrorResponseSchema,
  ErrorZodSchema,
  SignInSchema,
  SignUpSchema,
  validateAuthResponse,
  validateSignInFormData,
  validateSignUpFormData,
  useAuthStore
};

export type {
  AuthResponseType,
  ErrorResponseType,
  ErrorZodType,
  SignInType,
  SignUpType
};