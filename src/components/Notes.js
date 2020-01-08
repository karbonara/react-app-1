import React from 'react' 

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            <li className="list-group-item note">text
                <button type="button" class="btn btn-outline-danger btn-sm">&times;</button>
            </li>
        </ul>
    )
}