import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td />
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
export default TableBody;
