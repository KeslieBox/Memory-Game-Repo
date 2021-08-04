import MainCanvas from './MainCanvas'

function MemoryLogic(props) {
    // how to access cards from virtual DOM?
    const cards = document.querySelectorAll('.memory-card')
    let hasFlippedCard = false
    let lockBoard = false
    let firstCard, secondCard

    debugger

    // if (lockBoard) return
    // if (this === firstCard) return

    const handleClickCard = (e) => {
        // handle clikc card here
        debugger
        if (lockBoard) return
        if (this === firstCard) return
        e.classList.toggle('flip')
    }

    return (
        <MainCanvas clickCard={handleClickCard}/>
    )
    

} 

export default MemoryLogic
