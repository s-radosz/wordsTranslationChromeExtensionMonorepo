import * as React from 'react'

const WordsListRow = ({ user, word, handleRemoveWord, handleAddIllustration, i }) => {
  return (
    <tr className='tranlation__row' key={i}>
      <th scope='row'>{i + 1}</th>
      <td>
        <p>{word?.en}</p>
      </td>
      <td>
        <p>{word[user?.translate_from]}</p>
      </td>
      <td>
        <button
          className='btn red-btn box-shadow'
          onClick={() => handleRemoveWord(word?.id)}
          id={`delete-row-${word?.en}`}
        >
          Usuń
        </button>
      </td>
      <td>
        <button className='btn blue-btn box-shadow' onClick={() => handleAddIllustration(word?.id)}>
          Dodaj ilustrację
        </button>
      </td>
    </tr>
  )
}

export default WordsListRow
