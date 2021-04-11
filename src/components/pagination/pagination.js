import { Button } from '../button/button';
import Styles from './pagination.module.css';

export const Pagination = ({ page, onClickBack, onClickForward }) => (
    <ul className={Styles.pagination}>
        <li>
            <Button onClick={onClickBack}>Back</Button>
        </li>
        <li className={Styles.page}>{page}</li>
        <li>
            <Button onClick={onClickForward}>Forward</Button>
        </li>
    </ul>
);
