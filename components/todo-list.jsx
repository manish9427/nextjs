import React, { useState } from 'react'

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // editing state
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const addItem = () => {
    if (inputValue.trim()) {
      setItems((prev) => [...prev, inputValue.trim()]);
      setInputValue('');
    }
  }

  const handleDelete = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
    // if deleting the item currently being edited, cancel edit
    if (editingIndex === index) {
      setEditingIndex(null);
      setEditingValue('');
    }
  }

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditingValue(items[index]);
  }

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingValue('');
  }

  const saveEdit = () => {
    if (editingValue.trim() === '') return; // don't save empty
    setItems((prev) => prev.map((it, i) => (i === editingIndex ? editingValue.trim() : it)));
    cancelEdit();
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder='Add Item'
          value={inputValue}
          onChange={handleInput}
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div>
        <p>Item List</p>
        {
          items.length === 0 ? (
            <p>No items yet</p>
          ) : (
            items.map((it, index) => (
              <div key={index} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                {editingIndex === index ? (
                  <>
                    <input value={editingValue} onChange={(e) => setEditingValue(e.target.value)} />
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <span>{it}</span>
                    <button onClick={() => startEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default TodoList