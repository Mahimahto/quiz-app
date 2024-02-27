const Option = ({ option, index, handleOptionClick, selectedIndex, correctAnswer }) => {
    const clicked = selectedIndex !== null && index === correctAnswer
    const notIsCorrect = selectedIndex === index && selectedIndex !== correctAnswer
    return (
        <div className="optionDiv">
            <div className={clicked ? "green"
                : notIsCorrect ? "red" : "white"} onClick={() => handleOptionClick(index)}>{option}</div>
        </div>
    )
}

export default Option