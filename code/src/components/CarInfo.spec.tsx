import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CarInfo from './CarInfo';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('CarInfo', () => {
  test('Can go to car edit', () => {
    const { getByTestId } = render(
      <CarInfo
        carId="id"
        manufacturer="manufacturer"
        mileage={300}
        type="type"
        model="model"
        seats={2}
        color="red"
        condition="new"
        year={1999}
        license="license"
        mileageLastOilChange="m"
        mileageLastTireChange="m"
        dateNextTireChange="d"
        dateNextOilChange="d"
      />,
    );

    expect(getByTestId('editButton')).toBeTruthy();
  });
});
