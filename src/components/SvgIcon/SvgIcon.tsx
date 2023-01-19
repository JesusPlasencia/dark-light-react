import React from 'react'
import { useDynamicSvgImport } from '../../redux/hooks/useDynamicSvgImport';
import { IProps } from './SvgProps'

const SvgIcon = (props: IProps) => {
    const { iconName, wrapperStyle, svgProp, handleClick } = props;
    const { isLoading, SvgIcon } = useDynamicSvgImport(iconName);

    return (
        <>
            {isLoading && (
                <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
            )}
            {SvgIcon && (
                <div className={wrapperStyle} onClick={handleClick}>
                    <SvgIcon {...svgProp} />
                </div>
            )}
        </>
    );
}

export { SvgIcon }