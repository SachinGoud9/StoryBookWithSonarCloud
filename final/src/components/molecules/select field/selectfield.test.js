import { render, screen, cleanup } from '@testing-library/react';
import CustomizedHook from './select';




describe('Typography Rendered', () => {
    test('nossrinselect', () => {
      const { asFragment} = render(<CustomizedHook/>);
        expect(asFragment()).toMatchSnapshot();
    });
  });