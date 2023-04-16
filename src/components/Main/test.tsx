import { screen } from '@testing-library/react';
import { Main } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Main />', () => {
  it('should render main', () => {
    renderWithTheme(<Main />);
    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
