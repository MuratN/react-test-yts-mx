import classnames from "classnames";
import Styles from "./cross-icon.module.css";

export const CrossIcon = ({ className, ...props }) => (
    <div className={classnames(Styles.crossIcon, className)} {...props} />
);
