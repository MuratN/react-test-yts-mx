import classnames from "classnames";
import { CrossIcon } from "../cross-icon/cross-icon";
import Styles from "./comment.module.css";

export const Comment = ({ id, comment, className, onClickRemove }) => (
    <div className={classnames(Styles.comment, className)}>
        {comment}{" "}
        <CrossIcon
            onClick={() => onClickRemove(id)}
            className={Styles.removeIcon}
        />
    </div>
);
