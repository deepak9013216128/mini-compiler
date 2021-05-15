import styles from "./Input.module.css";
export default function Input(props) {
  return (
    <div className={styles.textareaWraper}>
      <textarea
        className={styles.textarea}
        rows="20"
        cols="80"
        {...props}
      ></textarea>
    </div>
  );
}
