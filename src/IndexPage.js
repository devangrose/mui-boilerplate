// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material-Ui imports
import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    // Root is usually used for the top-level html wrapper for the component
    root: {
        width: '80%',
        margin: '5% auto'
    },
    button: {
        margin: '3%',
    }
}

class IndexPage extends Component {

    render() {

        // it is standard practice to pull out the classes from props

        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h3" paragraph>
                    Welcome to Material-UI boilerplate!
                </Typography>
                {/* inline styling is also supported in material-ui */}
                <hr style={{ maxWidth: '80%'}}/>
                <Typography color="primary" variant="h5" paragraph>
                    This is a primary color text
                </Typography>
                <Typography align="center" variant="h5" paragraph>
                    This is center aligned text
                </Typography>
                <Button className={classes.button} color="primary" variant="raised">
                    This is a primary color button
                </Button>
                <Button className={classes.button} color="secondary" variant="raised">
                    And this is a secondary color button
                </Button>
                <Typography variant="caption">
                    Both of these buttons are "raised" variants
                </Typography>
                <Button className={classes.button}>
                    I am a basic button
                </Button>
                <Button className={classes.button} variant="outlined">
                    I am an outlined button
                </Button>
                <Button className={classes.button} variant="fab" color="primary">
                    FAB 
                </Button>
            </div>
        )
    }

}

// Prop validation
IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

// This injects the styles as a prop into the component
export default withStyles(styles)(IndexPage);