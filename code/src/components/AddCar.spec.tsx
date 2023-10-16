import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AddCar from './AddCar';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('AddCar', () => {
  test('Has submit button', () => {
    const { getByTestId } = render(<AddCar />);

    expect(getByTestId('addCarButton')).toBeTruthy();
  });
});
