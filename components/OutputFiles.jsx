import { useEffect, useState } from "react";
import Table from "./Table";
const lexURL = "http://localhost:5000/api/output/lexOut.txt";
const synURL = "http://localhost:5000/api/output/synOut.txt";
const machineCodeURL = "http://localhost:5000/api/output/machineCodeOut.txt";

export default function OutputFiles() {
  const [state, setState] = useState({
    lex: null,
    syn: null,
    machineCode: null,
  });

  useEffect(() => {
    const fetchData = (url, name) => {
      fetch(url)
        .then((res) => res.text())
        .then((data) => {
          const newData = data
            .split("\r\n")
            .map((row) => row.trim().replace(/  +/g, " ").split(" "));

          const size = newData.reduce(
            (size, data) => Math.max(size, data.length),
            0
          );

          const columnData = newData.map((data) => {
            if (data.length === size) {
              return data;
            } else {
              for (let i = data.length; i < size; i++) data.push("");
              return data;
            }
          });
          // console.log(columnData);

          setState((prevState) => ({
            ...prevState,
            [name]: columnData.map((data) =>
              data.reduce(
                (row, col, i) => ({ ...row, [`col${i + 1}`]: col }),
                {}
              )
            ),
          }));
        });
    };

    fetchData(lexURL, "lex");
    // fetchData(synURL,'syn');
    fetchData(machineCodeURL, "machineCode");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {state.lex && (
        <Table
          columns={[
            {
              Header: "LINE NO",
              accessor: "col1", // accessor is the "key" in the data
            },
            {
              Header: "TOKEN NO",
              accessor: "col2",
            },
            {
              Header: "CLASS",
              accessor: "col3",
            },
            {
              Header: "SYMBOL/VALUE",
              accessor: "col4",
            },
          ]}
          start="0"
          data={state.lex}
          title="Symbol Table"
        />
      )}
      {/* <Table url="http://localhost:5000/api/output/SynOut.txt" /> */}
      {state.machineCode && (
        <Table
          columns={[
            {
              Header: "COLUMN 1",
              accessor: "col1",
            },
            {
              Header: "COLUMN 2",
              accessor: "col2",
            },
            {
              Header: "COLUMN 3",
              accessor: "col3",
            },
          ]}
          start="1"
          title="3 Address Code"
          data={state.machineCode}
        />
      )}
    </div>
  );
}
