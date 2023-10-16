import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import EditCar from './EditCar';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

describe('EditCar', () => {
  test('Has submit button', () => {
    const { getByTestId } = render(<EditCar />);

    expect(getByTestId('editCarButton')).toBeTruthy();
  });
});
