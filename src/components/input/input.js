import classnames from "classnames";
import Styles from "./input.module.css";

export const Input = ({ children, className, ...props }) => (
    <input className={classnames(Styles.input, className)} {...props} />
);
