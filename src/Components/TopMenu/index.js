/* eslint-disable no-lone-blocks */
import { Box } from '@mui/system'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import Styles from './styles'


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: {

    }
})

const TopMenu = (props) => {
    /** VARS **/
    const history = useHistory()
    const {
        classes,
        // dispatch,
    } = props

    /** EFFECTS **/
    { }
    
    /** HANDLERS **/
    { }

    /** RENDER **/
    console.log(Styles);
    return (
      <div style={Styles.TopMenu}>
        hello from TopMenu
      </div>
    );
}

/** EXPORT **/
export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);