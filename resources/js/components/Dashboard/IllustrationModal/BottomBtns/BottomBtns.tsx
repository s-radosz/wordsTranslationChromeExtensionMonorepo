import * as React from 'react'

type bottomBtnsType = {
  handleCanvasClear: () => void
  handleWordIllustrationRemove: () => void
  handleSaveIllustration: () => void
}

const BottomBtns = ({
  handleCanvasClear,
  handleWordIllustrationRemove,
  handleSaveIllustration,
}: bottomBtnsType) => {
  return (
    <div className='illustration__content--btns'>
      <button className='btn red-btn box-shadow' onClick={handleCanvasClear}>
        Wyczyść wszystkie teksty
      </button>
      <button className='btn red-btn box-shadow' onClick={handleWordIllustrationRemove}>
        Usuń ilustracje
      </button>
      <button className='btn red-btn box-shadow' onClick={handleSaveIllustration}>
        Zapisz
      </button>
    </div>
  )
}

export default BottomBtns
