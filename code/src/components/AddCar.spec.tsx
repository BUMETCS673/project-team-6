import '@testing-library/jest-dom';
import { getByPlaceholderText, render, screen } from '@testing-library/react';
import AddCar from './AddCar';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

describe('AddCar Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <AddCar
        carId="12345"
        manufacturer="Toyota"
        type="Sedan"
        year={2022}
        license="XYZ-123"
        mileage={10000}
        model="Camry"
        color="Blue"
        seats={5}
        condition="New"
        oilChange="2024-01-01"
      />,
    );

    expect(screen.getByPlaceholderText('Manufacturer')).toBeInTheDocument();
   
  });
});


