import React, {Component} from "react";
import axios from 'axios';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            result => {
                this.setState({
                    isLoaded: true,
                    items: result.data
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        let ml20 = {marginLeft: "20px"};
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div style={ml20}>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={ml20}>Loading...</div>;
        } else {
            return (
                <div><h1 style={ml20}>Data Feed</h1>
                    <ol>
                        {items.map(item => (
                            <li key={item.username}>
                                {item.username}: {item.name}
                            </li>
                        ))}
                    </ol>
                </div>
            );
        }
    }
}

export default Feed;