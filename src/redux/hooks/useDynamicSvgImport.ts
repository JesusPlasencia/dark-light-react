import React, { useState, useEffect, useRef } from "react"

export const useDynamicSvgImport = (iconName: string) => {
    const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>()
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState<unknown>()

    useEffect(() => {
        setIsLoading(true)
        // dynamically import the mentioned svg icon name in props
        const importSvgIcon = async (): Promise<void> => {
            // make sure all svg icons are placed in the same directory
            try {
                importedIconRef.current = (
                    await import(`../../assets/icons/${iconName}.svg`)
                ).ReactComponent;
            } catch (err) {
                setHasError(err);
                console.error(err);
            } finally {
                setIsLoading(false)
            }
        }

        importSvgIcon()
    }, [iconName])

    return { hasError, isLoading, SvgIcon: importedIconRef.current };
}