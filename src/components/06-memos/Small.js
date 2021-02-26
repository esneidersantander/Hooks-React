import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('se monto');
    return (
        <small>
            {value}
        </small>
    )
});
