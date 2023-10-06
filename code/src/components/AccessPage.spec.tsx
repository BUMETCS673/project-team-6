import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import AccessPage from './AccessPage';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('AccessPage', () => {
  test('redirect to SignUp page and black', () => {
    const { getByTestId } = render(<AccessPage />);

    expect(getByTestId('to-signup')).toBeTruthy();

    fireEvent.click(getByTestId('to-signup'));
    expect(getByTestId('signIn')).toBeInTheDocument();

    fireEvent.click(getByTestId('signIn'));
    expect(getByTestId('to-signup')).toBeInTheDocument();
  });
});
