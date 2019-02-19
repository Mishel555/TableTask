import React from 'react';
import './Loader.scss';

export const Loader = () => {
   return (
       <article className='spiner-box'>
           <div className=''>
               <div className='spinner3'>
                   <div className='rect1'/>
                   <div className='rect2'/>
                   <div className='rect3'/>
                   <div className='rect4'/>
                   <div className='rect5'/>
               </div>
           </div>
       </article>
   );
};

export const Loader2 = () => {
  return (
      <article className='spiner-box'>
          <div className=''>
              <div className='spinner4'>
                  <div className='rect1'/>
                  <div className='rect2'/>
                  <div className='rect3'/>
                  <div className='rect4'/>
                  <div className='rect5'/>
              </div>
          </div>
      </article>
  );
};
