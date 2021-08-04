
import angular from './images/angular.svg';
import backface from './images/backface.svg'

function MainCanvas() {
  return (
    <div className="main">
      {/* <div class="memory-card" data-framework='react'>
        <img class="front-face" src="img/react.svg" alt="React">
        <img class="back-face" src="img/js-badge.svg" alt="Memory Card">
      </div>
    
      <div class="memory-card" data-framework='react'>
        <img class="front-face" src="img/react.svg" alt="React">
        <img class="back-face" src="img/js-badge.svg" alt="Memory Card">
      </div> */}
    
      <div class="memory-card" data-framework='angular'>
        <img class="front-face" src={angular} alt="Angular"/>
        <img class="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div class="memory-card" data-framework='angular'>
        <img class="front-face" src={angular} alt="Angular"/>
        <img class="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      {/* <div class="memory-card" data-framework='ember'>
        <img class="front-face" src="img/ember.svg" alt="Ember">
        <img class="back-face" src="img/js-badge.svg" alt="Memory Card">
      </div>
    
      <div class="memory-card" data-framework='ember'>
        <img class="front-face" src="img/ember.svg" alt="Ember">
        <img class="back-face" src="img/js-badge.svg" alt="Memory Card">
      </div>
    
      <div class="memory-card" data-framework='vue'>
        <img class="front-face" src="img/vue.svg" alt="Vue">
        <img class="back-face" src="img/js-badge.svg" alt="Memory Card">
      </div>
    
      <div class="memory-card" data-framework='vue'>
        <img class="front-face" src="img/vue.svg" alt="Vue">
        <img class="back-face" src="img/js-badge.svg" alt="Memory Card">
      </div> */}
    </div>
  );
}

export default MainCanvas;
