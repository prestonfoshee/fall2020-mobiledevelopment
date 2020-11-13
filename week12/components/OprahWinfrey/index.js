import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class OprahWinfrey extends Component {

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
                <Text style={this.props.styles.header}>Oprah Winfrey</Text>
                <Button title="VOTE" onPress={this.toggle} />
                {this.state.on && <Text>You voted for: Oprah Winfrey</Text>}
            </View>
        )
    }
}
