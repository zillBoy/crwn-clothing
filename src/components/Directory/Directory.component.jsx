import React, { useState } from 'react'
import MenuItem from '../MenuItem/MenuItem.component'
import './Directory.styles.scss'
import { sections as sectionData } from '../../utils/data'

const Directory = () => {
    
    const [sections, setSections] = useState(sectionData)
    
    return (
        <div className='directory-menu'>
            {sections.map(({ id, title, imageUrl, size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)}
        </div>
    )
}

export default Directory
