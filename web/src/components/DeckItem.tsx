import React from 'react'

interface IDeckItem {
  item: { title: String; body: String }
}

const DeckItem: React.FC<IDeckItem> = (props) => {
  const { item } = props
  return (
    <div
      style={{
        backgroundColor: 'cyan',
      }}
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>{item.title}</h2>
        <p style={{ textAlign: 'center' }}>{item.body}</p>

        <div style={{ textAlign: 'center', height: '25vh' }}>
          <p>{item.title}</p>
        </div>
      </div>
    </div>
  )
}

export default DeckItem
