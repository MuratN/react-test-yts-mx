import { useEffect, useState } from "react";
import classnames from "classnames";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { Comment } from "../comment/comment";
import {
    addComment,
    getComments,
    removeComment,
} from "../../stores/comments.store";
import Styles from "./comments.module.css";

export const Comments = ({ id }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const handleClickAdd = () => {
        if (comment === "") {
            return;
        }

        addComment(id, comment);
        setComments(getComments(id));
        setComment("");
    };

    const handleClickRemove = (index) => {
        removeComment(id, index);
        setComments(getComments(id));
    };

    useEffect(() => {
        setComments(getComments(id));
    }, [id]);

    return (
        <div>
            <div>
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        id={index}
                        comment={comment}
                        className={classnames({
                            [Styles.comment]: index !== 0,
                        })}
                        onClickRemove={handleClickRemove}
                    />
                ))}
            </div>
            <div className={Styles.action}>
                <Input
                    value={comment}
                    onChange={(evt) => setComment(evt.target.value)}
                    className={Styles.input}
                />
                <Button onClick={handleClickAdd} className={Styles.button}>
                    Add
                </Button>
            </div>
        </div>
    );
};
