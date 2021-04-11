import classnames from "classnames";
import Styles from "./spin.module.css";

export const Spin = ({ children, active }) => (
    <div className={Styles.spinWrapper}>
        {children}
        <div className={classnames(Styles.mask, { [Styles.active]: active })} />
        <div className={classnames(Styles.spin, { [Styles.active]: active })} />
    </div>
);
