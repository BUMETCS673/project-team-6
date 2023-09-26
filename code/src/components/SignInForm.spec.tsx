import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SignIn from './SignInForm';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('SignInForm', () => {
  test('renders SignInForm', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
