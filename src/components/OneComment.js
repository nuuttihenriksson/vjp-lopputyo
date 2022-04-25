import React, { useState } from 'react';
import {
    ThumbUp,
    ThumbDown,
    ThumbUpOffAlt,
    ThumbDownOffAlt,
} from '@mui/icons-material';
import {
    Box,
} from '@mui/material';

const OneComment = ({ comments, changeComments, comment }) => {
    const liked = comment.liked;
    const disliked = comment.disliked;

    const getLike = (comment) => {
        if (liked) {
            return (
                <Box
                    sx={{
                        display: 'inline-block',
                    }}
                >
                    <ThumbUp
                        onClick={() => like(comment)}
                        sx={{
                            marginLeft: "20px",
                            display: 'inline-block',
                            verticalAlign: 'middle',
                        }}
                    />
                    <a style={{ display: 'inline-block', }}>{comment.likes}</a>
                </Box>
            );
        } else {
            return (
                <Box
                    sx={{
                        display: 'inline-block',
                    }}
                >
                    <ThumbUpOffAlt
                        onClick={() => like(comment)}
                        sx={{
                            marginLeft: "20px",
                            display: 'inline-block',
                            verticalAlign: 'middle',
                        }}
                    />
                    <a style={{ display: 'inline-block', }}>{comment.likes}</a>
                </Box>
            );
        }
    }

    const getDislike = (comment) => {
        if (disliked) {
            return (
                <Box
                    sx={{
                        display: "inline-block",
                    }}
                >
                    <ThumbDown
                        onClick={() => dislike(comment)}
                        sx={{
                            marginLeft: "20px",
                            display: 'inline-block',
                            verticalAlign: 'middle',
                        }}
                    />
                    <a style={{ display: "inline-block" }}>{comment.dislikes}</a>
                </Box>
            );
        } else {
            return (
                <Box
                    sx={{
                        display: 'inline-block',
                    }}
                >
                    <ThumbDownOffAlt
                        onClick={() => dislike(comment)}
                        sx={{
                            marginLeft: "20px",
                            display: 'inline-block',
                            verticalAlign: 'middle',
                        }}
                    />
                    <a style={{ display: 'inline-block', }}>{comment.dislikes}</a>
                </Box>
            );
        }
    }

    const like = (comment) => {
        changeComments(comments.map((com) => {
            if (com.id === comment.id) {
                if (liked) {
                    const likedCom = { ...com, likes: com.likes - 1, liked: !com.liked };
                    return likedCom;
                } else {
                    const likedCom = { ...com, likes: com.likes + 1, liked: !com.liked };
                    return likedCom;
                }
            } else return com;
        }));
        if (disliked) {
            changeComments(comments.map((com) => {
                if (com.id === comment.id) {
                    const likedCom = { ...com, dislikes: com.dislikes - 1, likes: com.likes + 1, liked: !com.liked, disliked: !com.disliked };
                    return likedCom;
                } else return com;
            }));
        }
    }

    const dislike = (comment) => {
        changeComments(comments.map((com) => {
            if (com.id === comment.id) {
                if (disliked) {
                    const likedCom = { ...com, dislikes: com.dislikes - 1, disliked: !com.disliked };
                    return likedCom;
                } else {
                    const likedCom = { ...com, dislikes: com.dislikes + 1, disliked: !com.disliked };
                    return likedCom;
                }
            } else return com;
        }));
        if (liked) {
            changeComments(comments.map((com) => {
                if (com.id === comment.id) {
                    const likedCom = { ...com, likes: com.likes - 1, dislikes: com.dislikes + 1, liked: !com.liked, disliked: !com.disliked };
                    return likedCom;
                } else return com;
            }));
        }
    }

    return (
        <Box key={`comment-${comment.id}`}>
            <Box
                sx={{
                    marginBottom: "20px",
                    display: 'inline-block',
                    verticalAlign: 'middle',
                }}
            >
                <Box
                    sx={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                    }}
                >
                    <a>{comment.name}:</a>
                    <a style={{ marginLeft: "5px" }}>{comment.comment}</a>
                </Box>
                {getLike(comment)}
                {getDislike(comment)}
            </Box>
        </Box>
    );
}

export default OneComment;