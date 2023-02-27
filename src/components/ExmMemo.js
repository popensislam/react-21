import { memo, useCallback, useEffect, useMemo } from "react";

const ExmMemo = ({log, amount}) => {


    // useMemo
    // useCallback
    // memo

    useEffect(() => {
        log('RENDER')
    }, [ log ])
    return ( 
        <div>
            Memo {amount}
        </div>
     );
}
 
export default memo(ExmMemo);