export const renderText = ( text, className, baseWeight = 400) => {
    return [... text].map((char, i) => (
        <span key={i} className={className} style={{
            fontVariationSettings:`'wght' ${baseWeight}`
        }}>
            {char === " " ? '\u00A0' : char} 
        </span>
    ))
}