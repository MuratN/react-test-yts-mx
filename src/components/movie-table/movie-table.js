import { Comments } from "../comments/comments";
import { Button } from '../button/button';
import Styles from './movie-table.module.css';

export const MovieTable = ({ list, onHide, onShow }) => (
    <table className={Styles.table}>
        <thead>
            <tr>
                <th className={Styles.firstColumn}>Preview</th>
                <th className={Styles.secondColumn}>Title</th>
                <th className={Styles.thirdColumn}>Description</th>
                <th className={Styles.forthColumn}>Comments</th>
                <th className={Styles.fithColumn}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {list.map((movie) => (
                <tr key={movie.id}>
                    <td className={Styles.firstColumn}>
                        <img src={movie.medium_cover_image} />
                    </td>
                    <td className={Styles.secondColumn}>{movie.title}</td>
                    <td className={Styles.thirdColumn}>{movie.description_full}</td>
                    <td className={Styles.forthColumn}>
                        <Comments id={movie.id} />
                    </td>
                    <td className={Styles.fithColumn}>
                        {onHide ? (
                            <Button onClick={() => onHide(movie)}>Hide</Button>
                        ) : (
                            <Button onClick={() => onShow(movie)}>Show</Button>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
