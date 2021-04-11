import classnames from "classnames";
import Styles from "./button.module.css";

export const Button = ({ children, className, ...props }) => (
    <button className={classnames(Styles.button, className)} {...props}>
        {children}
    </button>
);
