import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class DwayneJohnson extends Component {

    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render(props) {
        return (
            <View>
                <Text style={this.props.styles.header}>Dwayne Johnson</Text>
                <Button title="VOTE" onPress={this.toggle} />
                {this.state.on && <Text>You voted for: Dwayne Johnson</Text>}
            </View>
        )
    }
}
