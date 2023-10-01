import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SignIn from './SignIn';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('SignInForm', () => {
  test('renders SignInForm', () => {
    const { getByPlaceholderText } = render(
      <SignIn
        email={undefined}
        setEmail={() => {}}
        password="password"
        setPassword={() => {}}
      >
        children
      </SignIn>,
    );

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
