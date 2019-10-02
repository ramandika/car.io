/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from 'react';
import { View, Text, Button, Icon, Fab } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export interface Props {
	navigation: any;
}
export interface State {
	active: boolean
}

export default class CustomFab extends React.Component<Props, State>{
    constructor(props){
        super(props);
        this.state={active: false, pressed: false};
        this.resetPressedFab = this.resetPressedFab.bind(this);
        this.action = this.action.bind(this);
    }

	_onPressCustom = (menu, prop) => {
	    if(menu.navigateTo){
	        //Navigate To
	        if(!this.state.pressed){
	            this.props.navigation.navigate(menu.navigateTo,{tabBarVisible: false, fields: prop.data, selected_pipeline: (prop.selected_pipeline ? prop.selected_pipeline : ''), selected_stage: (prop.selected_stage ? prop.selected_stage : ''), resetPressedFab: this.resetPressedFab, triggerRefresh: prop.triggerRefresh});
	        }
	    }else{
	        //Show options
	        this.setState({ active: !this.state.active });
	        prop.fabOverlay(!this.state.active);
	    }
	    this.setState({pressed: true});
	}

	resetPressedFab(){
	    this.setState({pressed: false});
	}

	action = (action_sheet_param) => {
	    this.setState({ active: false });
	    const {navigation} = this.props;
	    navigation.navigate(action_sheet_param.action,{onGoBack: action_sheet_param.refreshAfterUpdate});
	    this.props.fabOverlay(!this.state.active);
	}

	render(){
	    const { menu } = this.props;
	    return (
	        <Fab
	            style={{backgroundColor: '#DF2800'}}
	            active={this.state.active}
	            direction="up"
	            position="bottomRight"
	            onPress={() => this._onPressCustom(menu, this.props)}
            	>
	            <Icon
	                name={!this.state.active ? 'md-add' : 'md-close'}
	            />
	            {this.state.active && menu.options && menu.options.map((item,idx) => (
	                <View key={idx} style={{borderRadius: 5, width: 200, marginLeft: -150, marginBottom: 10}}>
	                    <Button iconRight light style={{width: '100%'}} onPress={() => this.action(menu.options[idx].action_sheet_params)}>
	                        <Text style={{fontSize: 12}}>{item.title}</Text>
	                        <Icon name={item.icon} type={item.iconType} style={{marginRight: 10, fontSize: 20}} />
	                    </Button>
	                </View>
	            ))}
     		</Fab>
	    );
	}
}