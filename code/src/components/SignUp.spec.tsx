import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import SignUp from './SignUp';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {};
  },
}));

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(),
  }),
);

describe('SignUpForm', () => {
  test('Submission empty fields', () => {
    const { getByTestId } = render(
      <SignUp
        email={undefined}
        setEmail={() => {}}
        password="password"
        setPassword={() => {}}
      >
        children
      </SignUp>,
    );
    expect(getByTestId('submit-signup')).toBeInTheDocument();

    fireEvent.click(getByTestId('submit-signup'));

    expect(getByTestId('submit-signup')).not.toBeDisabled();
  });

  test('Submission valid', async () => {
    const { getByTestId, queryByTestId } = render(
      <SignUp
        email="email@email.com"
        setEmail={() => {}}
        password="password"
        setPassword={() => {}}
      >
        children
      </SignUp>,
    );
    expect(queryByTestId('submit-signup')).toBeInTheDocument();

    fireEvent.change(getByTestId('firstName'), {
      target: { value: 'password1' },
    });
    fireEvent.change(getByTestId('lastName'), {
      target: { value: 'password2' },
    });

    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      // @ts-ignore
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            message: 'message',
          }),
      }),
    );

    fireEvent.click(getByTestId('submit-signup'));

    expect(queryByTestId('submit-signup')).toBeDisabled();
    expect(queryByTestId('message')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(queryByTestId('submit-signup')).not.toBeDisabled();
      expect(queryByTestId('message')).toBeInTheDocument();
    });
  });

  test('Submission exception', async () => {
    const { getByTestId, queryByTestId } = render(
      <SignUp
        email="email@email.com"
        setEmail={() => {}}
        password="password"
        setPassword={() => {}}
      >
        children
      </SignUp>,
    );
    expect(getByTestId('submit-signup')).toBeInTheDocument();

    fireEvent.change(getByTestId('firstName'), {
      target: { value: 'password1' },
    });
    fireEvent.change(getByTestId('lastName'), {
      target: { value: 'password2' },
    });

    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      // @ts-ignore
      Promise.resolve({
        ok: true,
        status: 200,
      }),
    );

    fireEvent.click(getByTestId('submit-signup'));

    expect(queryByTestId('submit-signup')).toBeDisabled();
    expect(queryByTestId('message')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(queryByTestId('submit-signup')).not.toBeDisabled();
      expect(queryByTestId('message')).toBeInTheDocument();
    });
  });

  test('Submission bad code', async () => {
    const { getByTestId, queryByTestId } = render(
      <SignUp
        email="email@email.com"
        setEmail={() => {}}
        password="password"
        setPassword={() => {}}
      >
        children
      </SignUp>,
    );
    expect(getByTestId('submit-signup')).toBeInTheDocument();

    fireEvent.change(getByTestId('firstName'), {
      target: { value: 'password1' },
    });
    fireEvent.change(getByTestId('lastName'), {
      target: { value: 'password2' },
    });

    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      // @ts-ignore
      Promise.resolve({
        ok: false,
        status: 500,
      }),
    );

    fireEvent.click(getByTestId('submit-signup'));

    expect(queryByTestId('submit-signup')).toBeDisabled();
    expect(queryByTestId('message')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(queryByTestId('submit-signup')).not.toBeDisabled();
      expect(queryByTestId('message')).toBeInTheDocument();
    });
  });
});
