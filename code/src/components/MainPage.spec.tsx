import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Main from './MainPage';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('MainPage', () => {
  test('Has auth button', () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId('authPopup')).toBeTruthy();
  });
});
