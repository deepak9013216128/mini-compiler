import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default class SuccessfullInput extends React.Component {
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
        <h2>Mini Compiler Successfull parse Input</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <section>
            <h3>Integer Assignment</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 20;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Charater Assignment</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={`char = 'a';`}
            ></textarea>
          </section>

          <section>
            <h3>Arithmetic Operation (Addition)</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 0;\ncount = count + 5;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Arithmetic Operation (Subtraction)</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 15;\ncount = count - 5;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Arithmetic Operation (Multiplication)</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 15;\ncount = count * 5;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Arithmetic Operation (Division)</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 20;\ncount = count / 2;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Logical And Operation</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 20 && 10;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Logical Or Operation</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 5 || 2;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Logical Not Operation</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 20;\nboolean = !count;\n"}
            ></textarea>
          </section>

          <section>
            <h3>Relational Operator Equal To (==)</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number==5){\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>Relational Operator Not Equal To (!=)</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number!=5){\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>{"Relational Operator Less Than (<)"}</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number<2){\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>{"Relational Operator Less Than Equal To (<=)"}</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number<=10){\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>{"Relational Operator Greater Than (>)"}</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number>4){\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>{"Relational Operator Greater Than Equal To (>=)"}</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number>=3){\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>While Loop</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={`count = 6;\nwhile (count < 100) {\n\tcount = count + 5;\n}`}
            ></textarea>
          </section>

          <section>
            <h3>Print Statement</h3>
            <textarea
              rows="4"
              cols="35"
              readOnly
              defaultValue={`count = 6;\nprint(\"count is: \", count, \"\\n\");\n`}
            ></textarea>
          </section>

          <section>
            <h3>If Else Condition</h3>
            <textarea
              rows="5"
              cols="30"
              readOnly
              defaultValue={
                'if(1){\n\tprint(number, "\\n");\n}else {\n\tnumber=10;\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>Else If</h3>
            <textarea
              rows="6"
              cols="35"
              readOnly
              defaultValue={
                'if(0){\n\tprint(number, "\\n");\n}else if(1) {\n\tnumber=10;\n}\nelse number=20;'
              }
            ></textarea>
          </section>

          <section>
            <h3>Mutli Line Comment</h3>
            <textarea
              rows="11"
              cols="35"
              readOnly
              defaultValue={
                '/*\n  Comments supported\n */\nnumber = 5;\n\nif(number<10){\n/*\n  Comments supported\n */\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
          </section>

          <section>
            <h3>Test Case 1</h3>
            <textarea
              rows="11"
              cols="35"
              readOnly
              defaultValue={
                'count = 6;\nc = \'a\';\n while (count < 100) {\n     print("count is: ", count, "\\n");\n     count = count + 5;\n }\n'
              }
            ></textarea>
          </section>
          <section>
            <h3>Test Case 2 (Nested If Else)</h3>
            <textarea
              rows="11"
              cols="35"
              readOnly
              defaultValue={
                'number=5;\nif(1){\n\tprint(number, "\\n");\n\tif(1){\n\t\tprint(number, "\\n");\n\t}\n}else {\n\tnumber=10;\n}'
              }
            ></textarea>
          </section>
        </div>
      </div>
    );
  }
}
