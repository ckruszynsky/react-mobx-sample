import React from "react";

export const Row = props => {
  return (
    <tr>
      <td>
        <img src={props.data.avatar} />
      </td>
      <td>{props.data.name}</td>
      <td>{props.data.jobTitle}</td>
    </tr>
  );
};

export const Header = ({ title }) => {
  return <th>{title}</th>;
};

export const Footer = ({ value }) => {
  return <td>{value}</td>;
};

export default class Table extends React.Component {
  render() {
    const { headers, employees } = this.props;
    return (
      <table>
        <thead>
          <tr>{headers.map((h, i) => <Header key={i} title={h} />)}</tr>
        </thead>
        <tbody>{employees.map((e, i) => <Row key={i} data={e} />)}</tbody>
        <tfoot />
      </table>
    );
  }
}
