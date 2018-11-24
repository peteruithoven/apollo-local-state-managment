import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { COMPLETED } from "./queries";

const TOGGLE = gql`
  mutation Toggle {
    toggle @client
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>ToDo</h3>
        <Query query={COMPLETED}>
          {({ data, error }) => {
            console.log("data: ", data);
            if (error) return error.message;
            return (
              <Fragment>
                <label>
                  <Mutation mutation={TOGGLE}>
                    {toggle => (
                      <input
                        type="checkbox"
                        checked={data.complete}
                        onChange={toggle}
                      />
                    )}
                  </Mutation>
                  Completed
                </label>
              </Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}
