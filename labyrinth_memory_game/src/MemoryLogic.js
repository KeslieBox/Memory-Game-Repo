import MainCanvas from './MainCanvas'

function MemoryLogic(props){
    // how to access cards from virtual DOM?
    const cards = document.querySelectorAll('.memory-card')
    let hasFlippedCard = false
    let lockBoard = false
    let firstCard, secondCard

    // if (lockBoard) return
    // if (this === firstCard) return

    function handleClickCard(e){
        // handle click card here
        debugger
        if (lockBoard) return
        // if (firstCard && e.target.className === firstCard.target.className) return
        e.target.parentElement.classList.add('flip')

        if (!hasFlippedCard) {
            debugger
            // first click
            hasFlippedCard = true
            firstCard = e
    
            return 
        } 
        // second click 
        hasFlippedCard = false
        secondCard = e

        checkForMatch() 
    }

    function checkForMatch(){
        debugger
        // should not be based on classname but on the name of the particular card
        let isMatch = firstCard.target.alt === secondCard.target.alt
        
        isMatch ? disableCards() : unflipCards()
    }

    function disableCards(){
        debugger
        // if the cards matched, we remove event listener so they no longer respond to click
        firstCard.target.removeEventListener('click', handleClickCard)
        secondCard.target.removeEventListener('click', handleClickCard)
    
        resetBoard()
    }
    
    function unflipCards(){
        debugger
        // if cards don't match, we lock the board to prevent other moves 
        lockBoard = true
        // we set a timer before flipping cards back over
        setTimeout(() => {
            debugger
            firstCard.target.parentElement.classList.remove('flip')
            secondCard.target.parentElement.classList.remove('flip')
            // we unlock the board again for new moves
            resetBoard()
        }, 1500)
    }

    function resetBoard(){
        [hasFlippedCard, lockBoard] = [false, false]
        [firstCard, secondCard] = [null, null]
    }
    
    // wrapped in parenthesis to immediately call the function expression right after it's defined
    (function shuffle(){
        // how to get all the cards
        // cards.forEach(card => {
        //     let randomPos = Math.floor(Math.random() * 12)
        //     card.style.order = randomPos
        // })
    })()

    return (
        <MainCanvas clickCard={handleClickCard}/>
    ) 
} 

export default MemoryLogic
