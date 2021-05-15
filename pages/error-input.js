import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default class ErrorInput extends React.Component {
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
        <h2>Mini Compiler Error Detection</h2>
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
            <h3>Missing semicolon</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 20\nnumber = 5;\n"}
            ></textarea>
            <p>(2, 1) error: assign: Expecting ';', found 'Ident'</p>
          </section>

          <section>
            <h3>Missing Assignment</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count 20;\nnumber =5;"}
            ></textarea>
            <p>(1, 7) error: assign: Expecting '=', found 'Integer literal'</p>
          </section>

          <section>
            <h3>Multi Character in Single Quotes</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"char = 'ab';"}
            ></textarea>
            <p>
              1 1 Identifier char 1 6 Op_assign (1,8) error: multi-character
              constant
            </p>
          </section>

          <section>
            <h3>Expected Primary Expression</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 0;\ncount = count + ;"}
            ></textarea>
            <p>(2, 17) error: expecting a primary, found: ;</p>
          </section>

          <section>
            <h3>Integer Overflow</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"count = 10000000000;\n"}
            ></textarea>
            <p>
              1 1 Identifier count 1 7 Op_assign (1,9) error: Number exceeds
              maximum value
            </p>
          </section>

          <section>
            <h3>Expected Primary Expression before '='</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"= 4;\n"}
            ></textarea>
            <p>(1, 1) error: expecting start of statement, found '='</p>
          </section>

          <section>
            <h3>Missing Closing Curly brackets </h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif( number==5 ){\n\tprint(number, "\\n");\n'
              }
            ></textarea>
            <p>{"(5, 1) error: Lbrace: Expecting '}', found 'EOI'"}</p>
          </section>
          <section>
            <h3>Missing Opening Curly brackets</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif( number==5 )\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
            <p>{"(4, 1) error: expecting start of statement, found '}'"}</p>
          </section>

          <section>
            <h3>Missing Opening Parenthesis</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif number==5){\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
            <p>(2, 4) error: paren_expr: Expecting '(', found 'Ident'</p>
          </section>

          <section>
            <h3>Missing Closing Parenthesis</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number==5 {\n\tprint(number, "\\n");\n}'
              }
            ></textarea>
            <p>{"(2, 14) error: paren_expr: Expecting ')', found '{'"}</p>
          </section>

          <section>
            <h3>Missing Terminating " character</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={
                'number = 5;\nif(number!=5){\n\tprint(number, "\\n);\n}'
              }
            ></textarea>
            <p>(3,16) error: EOL in string</p>
          </section>

          <section>
            <h3>'else' without a previous 'if'</h3>
            <textarea
              rows="4"
              cols="30"
              readOnly
              defaultValue={"else {\n\tnumber=10;\n}"}
            ></textarea>
            <p>(1, 1) error: expecting start of statement, found 'else'</p>
          </section>

          <section>
            <h3>Unterminated Comment</h3>
            <textarea
              rows="6"
              cols="30"
              readOnly
              defaultValue={
                '/*\nComments supported\n \nnumber=10\nprint(number, "\\n");\n'
              }
            ></textarea>
            <p>(1,1) error: EOF in comment</p>
          </section>
        </div>
      </div>
    );
  }
}
