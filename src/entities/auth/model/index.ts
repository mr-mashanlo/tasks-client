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

import {
  validateAuthResponse,
  validateSignInFormData,
  validateSignUpFormData
} from './validator';

import useAuthStore from './store';

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