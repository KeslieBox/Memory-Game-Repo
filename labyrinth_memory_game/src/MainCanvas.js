import angular from './images/angular.svg';
import reactbadge from './images/reactbadge.svg';
import aurelia from './images/aurelia.svg';
import backbone from './images/backbone.svg';
import ember from './images/ember.svg';
import vue from './images/vue.svg';
import backface from './images/backface.svg'



function MainCanvas(props) {

  return (
    <section className="main">
      {/* want to add a background image of a maze or something */}
      <div className="memory-card" dataset='reactbadge'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={reactbadge} alt="React"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="React"/>
      </div>
    
      <div className="memory-card" dataset='reactbadge'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={reactbadge} alt="React"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="React"/>
      </div>
    
      <div className="memory-card" data-framework='angular'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={angular} alt="Angular"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Angular"/>
      </div>
    
      <div className="memory-card" data-framework='angular'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={angular} alt="Angular"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Angular"/>
      </div>
    
      <div className="memory-card" data-framework='ember'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={ember} alt="Ember"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Ember"/>
      </div>
    
      <div className="memory-card" data-framework='ember'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={ember} alt="Ember"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Ember"/>
      </div>
    
      <div className="memory-card" data-framework='vue'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={vue} alt="Vue"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Vue"/>
      </div>
    
      <div className="memory-card" data-framework='vue'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={vue} alt="Vue"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Vue"/>
      </div>

      <div className="memory-card" data-framework='backbone'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={backbone} alt="Backbone"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Backbone"/>
      </div>

      <div className="memory-card" data-framework='backbone'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={backbone} alt="Backbone"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Backbone"/>
      </div>

      <div className="memory-card" data-framework='aurelia'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={aurelia} alt="Aurelia"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Aurelia"/>
      </div>

      <div className="memory-card" data-framework='aurelia'>
        <img onClick={e => props.clickCard(e)} className="front-face" src={aurelia} alt="Aurelia"/>
        <img onClick={e => props.clickCard(e)} className="back-face" src={backface} alt="Aurelia"/>
      </div>

    </section>
  );
}

export default MainCanvas;
