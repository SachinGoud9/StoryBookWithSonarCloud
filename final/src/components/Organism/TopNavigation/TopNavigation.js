import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProfileItem from '../../molecules/ProfileItem/ProfileItem';
import LocationListItem from '../../molecules/LocationListItem/LocationListItem';
import { Grid } from "@material-ui/core";
const TopNavigation = (  { locationName} )  => {

    const useStyles = makeStyles((theme) => ({
       
      }));
  const classes = useStyles();
  
    return (
      <div data-testid = "topNavigation">
        <Grid>
            <LocationListItem locationName={locationName} />
            <ProfileItem ></ProfileItem>
        </Grid>
     </div>
    );
  }
  
  export default TopNavigation;