import angular from './images/angular.svg';
import reactbadge from './images/reactbadge.svg';
import aurelia from './images/aurelia.svg';
import backbone from './images/backbone.svg';
import ember from './images/ember.svg';
import vue from './images/vue.svg';
import backface from './images/backface.svg'



function MainCanvas(props) {

  // const handleClickCard = (e) => {
  //   debugger
  // }

  return (
    <section className="main">
      {/* want to add a background image of a maze or something */}
      <div className="memory-card" data-framework='reactbadge'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={reactbadge} alt="React"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div className="memory-card" data-framework='reactbadge'>
        <img className="front-face" src={reactbadge} alt="React"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div className="memory-card" data-framework='angular'>
        <img className="front-face" src={angular} alt="Angular"/>
        <img class="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div className="memory-card" data-framework='angular'>
        <img className="front-face" src={angular} alt="Angular"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div className="memory-card" data-framework='ember'>
        <img className="front-face" src={ember} alt="Ember"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div className="memory-card" data-framework='ember'>
        <img className="front-face" src={ember} alt="Ember"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div className="memory-card" data-framework='vue'>
        <img className="front-face" src={vue} alt="Vue"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>
    
      <div className="memory-card" data-framework='vue'>
        <img className="front-face" src={vue} alt="Vue"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>

      <div className="memory-card" data-framework='backbone'>
        <img className="front-face" src={backbone} alt="Backbone"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>

      <div className="memory-card" data-framework='backbone'>
        <img className="front-face" src={backbone} alt="Backbone"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>

      <div className="memory-card" data-framework='aurelia'>
        <img className="front-face" src={aurelia} alt="Aurelia"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>

      <div className="memory-card" data-framework='aurelia'>
        <img className="front-face" src={aurelia} alt="Aurelia"/>
        <img className="back-face" src={backface} alt="Memory Card"/>
      </div>

    </section>
  );
}

export default MainCanvas;
