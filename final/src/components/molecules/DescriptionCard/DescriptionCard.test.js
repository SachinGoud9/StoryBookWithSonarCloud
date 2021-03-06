import React from 'react';
import DescriptionCard from './DescriptionCard'

import { cleanup, fireEvent, render, screen} from '@testing-library/react'

afterEach(cleanup)

describe('App', () => {
    test('check the Descption Card title', () => {
      const { asFragment} = render(<DescriptionCard body="Description body" head = "head"/>);
        expect(asFragment()).toMatchSnapshot();
    })
  })