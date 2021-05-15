import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Button from "../components/Button";
import OutputFiles from "../components/OutputFiles";

export default class Home extends React.Component {
  state = {
    input: "",
    error: "",
    fetchOutFile: false,
  };

  handleChange = (e) => this.setState({ input: e.target.value });
  handleClick = () => this.setState({ error: "", fetchOutFile: false });
  handleKeyDown = (e) => {
    if (e.key == "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;

      this.setState(
        (prevState) => ({
          input:
            prevState.input.substring(0, start) +
            "\t" +
            prevState.input.substring(end),
        }),
        () => {
          e.target.selectionStart = e.target.selectionEnd = start + 1;
        }
      );
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain",
    });
    formData.append("inputFile", file);
    fetch("http://localhost:5000/api/compile", {
      body: formData,
      method: "POST",
    })
      .then((res) => {
        if (res.status == 200)
          return res
            .json()
            .then((data) => this.setState({ fetchOutFile: true }));
        else
          return res.text().then((data) => {
            this.setState({ error: data });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Mini Compiler</title>
          <meta
            name="description"
            content="Mini Compiler created by Deepak Kumar and Ashi Gupta"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Mini Compiler</h2>
        <form onSubmit={this.onSubmit}>
          <Input
            id="input"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            required
            spellCheck="false"
          />
          <Button onClick={this.handleClick} type="submit" disabled={false} />
        </form>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        {this.state.fetchOutFile && <OutputFiles />}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <div>
            <h2>Submitted To: </h2>
            <h3>Sir Rajiv Mishra</h3>
          </div>
          <div>
            <h2>Submitted By: </h2>
            <h3>Deepak Kumar (2K18/SE/052)</h3>
            <h3>Ashi Gupta (2K18/SE/040)</h3>
          </div>
        </div>
      </div>
    );
  }
}
