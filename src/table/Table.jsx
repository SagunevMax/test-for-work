import ArrowDown from "../svg/ArrowDown";
import ArrowUp from "../svg/ArrowUp";
import { useState, useRef } from "react";

const Table = ({ info, sort, directionSort, detailInfo, information }) => {
  const [type, setType] = useState();
  const refInfo = useRef();
  const Arrow = () => {
    return directionSort ? <ArrowDown /> : <ArrowUp />;
  };

  const typeSort = (field) => {
    sort(field);
    setType(field);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => typeSort("id")} scope="col">
            id {type === "id" ? <Arrow /> : null}
          </th>
          <th onClick={() => typeSort("firstName")} scope="col">
            FirstName {type === "firstName" ? <Arrow /> : null}
          </th>
          <th onClick={() => typeSort("lastName")} scope="col">
            LastName {type === "lastName" ? <Arrow /> : null}
          </th>
          <th onClick={() => typeSort("email")} scope="col">
            Email {type === "email" ? <Arrow /> : null}
          </th>
          <th onClick={() => typeSort("phone")} scope="col">
            Phone {type === "phone" ? <Arrow /> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {info.map((el) => {
          return (
            <tr key={el.phone} ref={refInfo} onClick={() => detailInfo(el)}>
              <td>{el.id}</td>
              <td>{el.firstName}</td>
              <td>{el.lastName}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
