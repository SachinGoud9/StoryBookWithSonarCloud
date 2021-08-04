import { JobSearch } from "./jobSearch";
import { render, screen, cleanup } from '@testing-library/react';


describe('Typography Rendered', () => {
    test('check the Descption Card title', () => {
      const { asFragment} = render(<JobSearch/>);
        expect(asFragment()).toMatchSnapshot();
    });
    });