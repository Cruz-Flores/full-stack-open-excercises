import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer.js';
import { setNotification } from '../reducers/notificationReducer.js';

const AnecdoteList = () => {
  const dispatch = useDispatch();

  // const anecdotes = useSelector((state) => state.anecdotes);
  // const filter = useSelector((state) => state.filter);
  // const anecdotesToShow =
  //   filter.length === 0
  //     ? anecdotes
  //     : anecdotes.filter((a) =>
  //         a.content.toLowerCase().includes(filter.toLowerCase())
  //       );

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter.length === 0) {
      return anecdotes;
    }
    return anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const voteAnecdote = (anecdote) => {
    dispatch(vote(anecdote));
    dispatch(setNotification(`you voted ${anecdote.content}`, 2));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export { AnecdoteList };
