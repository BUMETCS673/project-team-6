import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
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

  test('redirect to SignUp page', () => {
    const { getByText, getByTestId } = render(<SignIn />);

    expect(getByTestId("to-signup")).toBeTruthy();

    fireEvent.click(getByTestId("to-signup"));

    expect(getByText("Sign Up a New Account")).toBeInTheDocument();
  })
});

describe('SignUpForm', () => {
  beforeAll(() => {
    const {getByTestId} = render(<SignIn />);
    fireEvent.click(getByTestId("to-signup"));
  })

  test('Invalid form submission', () => {
    expect(screen.getByTestId("submit-signup")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("submit-signup"));

    expect(screen.getByText("All fields are necessary.")).toBeInTheDocument();
  });
});
