import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SignInForm from './SignInForm';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('SignInForm', () => {
  test('should render login form when status is true', () => {
    const { getByRole, getByPlaceholderText } = render(<SignInForm status />);

    expect(getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();

    const signInButton = getByRole('button', {
      name: 'Sign In with credentials',
    });
    expect(signInButton).toBeInTheDocument();

    fireEvent.click(signInButton);
  });

  test('should render sign up form when status is false', () => {
    const { getByRole, getByPlaceholderText } = render(
      <SignInForm status={false} />,
    );

    expect(getByRole('textbox', { name: 'Firstname' })).toBeInTheDocument();
    expect(getByRole('textbox', { name: 'Lastname' })).toBeInTheDocument();
    expect(getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();

    const signUpButton = getByRole('button', { name: 'Sign Up a New Account' });
    expect(signUpButton).toBeInTheDocument();

    fireEvent.click(signUpButton);
  });
});
