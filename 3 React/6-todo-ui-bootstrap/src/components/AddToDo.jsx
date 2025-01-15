import React from 'react'
import Button from './Button'

export default function AddToDo() {
    return (
        <div className="container text-center kg-row">
            <div className="row">

                <div className="col-5">
                    <input type="text" className="form-control" placeholder="Add to do" />
                </div>

                <div className="col-3">
                    <input type="date" className="form-control" placeholder="Username" />
                </div>

                <div className="col-2">
                    <Button btnType='sucess' btnText='Add' />
                </div>

            </div>
        </div>
    )
}
