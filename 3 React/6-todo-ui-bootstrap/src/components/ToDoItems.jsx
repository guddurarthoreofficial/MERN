import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoItems() {
    const todoItems = [
        { id: 1, todoText: 'Drink Milk', todoDate: "23-11-2002" },
        { id: 2, todoText: 'Go to School', todoDate: "23-11-2002" },
        { id: 3, todoText: 'Kuchna', todoDate: "23-11-2002" }
    ];

    return (
        <div>
            {
                todoItems.map(item => (
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        todoText={item.todoText}
                        todoDate={item.todoDate}
                    />
                ))

            }

        </div>
    );
}
