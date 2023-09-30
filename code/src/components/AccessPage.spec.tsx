import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import AccessPage from './AccessPage';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('SignInForm', () => {
  test('renders SignInForm', () => {
    const { getByPlaceholderText } = render(<AccessPage />);

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('redirect to SignUp page', () => {
    const { getByText, getByTestId } = render(<AccessPage />);

    expect(getByTestId("to-signup")).toBeTruthy();

    fireEvent.click(getByTestId("to-signup"));

    expect(getByText("Sign Up a New Account")).toBeInTheDocument();
  })
});

describe('SignUpForm', () => {
  beforeAll(() => {
    const {getByTestId} = render(<AccessPage />);
    fireEvent.click(getByTestId("to-signup"));
  })

  test('Invalid form submission', () => {
    expect(screen.getByTestId("submit-signup")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("submit-signup"));

    expect(screen.getByText("All fields are necessary.")).toBeInTheDocument();
  });
});
