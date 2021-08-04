import { render, screen, cleanup } from '@testing-library/react';
import JobCard from './JobCard';

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import jobCardDetails from '../../Organism/RenderJobCard/jobCardDetails'


logo,
	roleName,
	companyName,
	location,

describe('Typography Rendered', () => {
  test('check the Descption Card title', () => {
      const { getByTestId } = render(<JobCard logo = {jobCardDetails[0].logo} roleName = {jobCardDetails[0].roleName}
                 companyName = {jobCardDetails[0].companyName} location = {jobCardDetails[0].location}/>);
      expect(getByTestId('cardinjobcard')).toBeTruthy();
  });
});